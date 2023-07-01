export interface PostMeta {
  title: string;
  tags: string[];
}

export interface PostParams {
  id?: string;
  title: string;
  tags: string[];
  content: string;
  images?: string[];
  path?: string;
  // mode?: Mode;
}

export class Post {
  public readonly id: string;
  public readonly title: string;
  public readonly tags: string[];
  public readonly content: string;
  public readonly images: string[]; // base64エンコードされた画像の配列

  constructor(args: PostParams) {
    this.id = args.id ?? new Date().getTime().toString();
    this.title = args.title;
    this.tags = args.tags;
    this.content = args.content;
    this.images = args.images ?? [];
  }

  toMarkdown() {
    this.tags.map((tag) => `'${tag}'`).join(',');
    return `
---
title: ${this.title}
tags: [${this.tags.map((tag) => `'${tag}'`).join(',')}]
---
${this.content}
`.replace(/^\n/, '');
  }
}
