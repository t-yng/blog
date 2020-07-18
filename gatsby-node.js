require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017',
    },
});

const { onCreateNode, createPages } = require('./gatsby-node/index');

exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
