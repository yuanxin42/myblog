module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        "prettier/prettier": "off",
        "vue/multi-word-component-names": [
            "error",
            {
                ignores: ["index"], //需要忽略的组件名
            },
        ],
        'vue/multi-word-component-names': 0
    },
    'settings': {
        "import/resolver": {
            "webpack": {
                //此处config对应webpack.config.js的路径，我这个路径是vue-cli3默认的路径
                "config": "node_modules/@vue/cli-service/webpack.config.js"
            }
        }
    }
};