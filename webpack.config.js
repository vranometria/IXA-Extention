const path = require("path");
module.exports = {

  // 変換するファイルを指定
  entry: {
    index: './src/index.ts',
    "skill-enhance": "./src/skill-enhance.ts"
  },

  // 出力先を指定
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },

  // TypeScriptを変換することを指示
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  // コードでimportを書いた時の拡張子を指定
  resolve: {
    extensions: [".ts", ".js"],
  },

  // バンドル後のevalがcspに引っかかるのを回避
  devtool: 'cheap-module-source-map',
};