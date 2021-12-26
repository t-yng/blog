---
title: 実務でts-jestを@swc/jestに置き換えてCIの実行時間を1/2に短縮した
date: 2020-02-27
description: この記事は YAMAP エンジニア Advent Calendar 2021 の21日目の記事です。ts-jestを使っているとコンパイル時間の問題で地味にテストに実行がかかります。YAMAPではフロントエンドでもユニットテストを書き始めたので、約180ケースで1分ほどCIでテスト実行に時間がかかるようになりました。またTDDで開発を進めていると、開発中に非常に多くユニットテストを実行するので ts-jest の実行時間の遅さが、開発効率に直結してきます。そこで、ts-jest を @swc/jest に置き換えて、実行時間の改善を試みました。
tags: ['jest', 'テスト']
---

この記事は [YAMAP エンジニア Advent Calendar 2021](https://qiita.com/advent-calendar/2021/yamap-engginers) の21日目の記事です。

## ts-jestの課題感

ts-jestを使っているとコンパイル時間の問題で地味にテストに実行がかかります。

YAMAPではフロントエンドでもユニットテストを書き始めたので、約180ケースで1分ほどCIでテスト実行に時間がかかるようになりました。
またTDDで開発を進めていると、開発中に非常に多くユニットテストを実行するので ts-jest の実行時間の遅さが、開発効率に直結してきます。

そこで、ts-jest を @swc/jest に置き換えて、実行時間の改善を試みました。

## 導入効果

@swc/jest に置き換えた結果、CIでのユニットテストの実行時間が1/2に短縮されました🎉

|変更前|変更後|
|--|--|
|53s|21s|

## @swc/jest とは
@sec/jest は Rust製の TypeScriptコンパイラーの swc を利用して作られた Jest の Transformer です。

個人的に感じる ts-jest のメリットは次の点です。
- swc が Rust製のため ts-jest(tsc) と比較して、高速に動作する
- 設定を `jest.config.js` 内に書くことができるので、`tsconfig.test.json` のようにテスト用の tsconfig ファイルを持つ必要がない

## ts-jest を @swc/jest に置き換え
まずはコンパイラー本体の @swc/core と Transformer の @swc/jest をインストールします。

```
$ yarn install -D @swc/core @swc/jest
```

変更前のJestの設定ファイルはこんな感じです。

```js
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  (省略),
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
};
```

これを @swc/jest を使うように変更します。
設定ファイル内に swc の設定を追加して `transform` を @swc/jest を使うように修正しています。
また、tsconfigは不要になったので `globals` の設定ごと削除しています。

swc の設定項目についてはコメントに記載してあります。詳細は[公式ドキュメント](https://swc.rs/docs/configuration/compilation)を参照ください。

```js
/** @type {import('@swc/core').Config} */
const swcConfig = {
  // ソースマップの出力を有効にする
  sourceMaps: true,
  module: {
    // JestがCommonJSでモジュールを読み込むのでCommonJS形式で出力する
    type: 'commonjs',
  },
  jsc: {
    parser: {
      // TypeScriptとしてコンパイルする
      syntax: 'typescript',
      // Reactのコンポーネントをテストしたいのでtsxのコンパイルを有効化
      tsx: true,
    },
    transform: {
      react: {
        // React の JSX トランスフォームの指定
        // Reactインポートの手間を省略するために React17 から導入された 
        // _jsx(react/jsx-runtime) の形式にコンパイルする
        runtime: 'automatic',
      },
    },
  },
};

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfig],
  },
  (省略),
};
```

## コンパイラーが異なることによる懸念

babelの設定を使っていることもあり、プロダクションのコンパイルはは引き続き tsc が使用しており、テストとサービスの実行環境でコンパイラーが異なる状況になってしまっているので、コンパイラー依存の問題でテストでは正常に動くみたいな事が起こる可能性はあるのかなと思っています。

ただ、それによるバグが起こる可能性はかなり低いと思っているので、そこは許容範囲かなと考えています。

## さいごに

テスト実行に swc を導入をしてみましたが、思ったよりもスムーズに導入ができ今までと変わらずに使い続けれるので、テストの実行速度に悩んでいたら、試しに導入してみてください。
