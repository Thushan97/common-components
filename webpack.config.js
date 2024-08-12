const path = require("path");

module.exports = {
  entry: "./index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "common-components.js",
    globalObject: "this",
    library: {
      name: "common-components",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: false,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: "react",
  },
};
