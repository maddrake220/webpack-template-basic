const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  // 파일을 읽어들ㅇ리기 시작하는 진입점 설정
  entry: "./js/main.js",
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // html 태그에 해석된 css를 삽입해주는 역할
          "css-loader", //  js에서 css를 해석하는 패키지
          "postcss-loader",
          "sass-loader", // 실행순서 중요) 처음 실행
        ],
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader", // babel 해석관련
        ],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    // 특정 파일, 폴더를 복사하여 dist에 들어간다.
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
