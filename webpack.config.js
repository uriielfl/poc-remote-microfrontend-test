const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  output: {
    publicPath: "http://localhost:3000/",
  },
  entry: "./src/main.tsx", // ou "./src/app.tsx", dependendo de qual é o seu ponto de entrada
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"], // adicione suporte para arquivos .ts e .tsx
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, // adicione suporte para arquivos .ts e .tsx
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"], // adicione o preset @babel/preset-typescript
        },
      },
      {
        test: /\.css$/, // adicione esta regra para processar arquivos .css
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/Component",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};