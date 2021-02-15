const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/css/*.less")],
    },
  },
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: "json",
          use: "yaml-loader",
        },
      ],
    },
  },
};
