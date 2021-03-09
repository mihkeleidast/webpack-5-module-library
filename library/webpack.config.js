const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyLibrary',
    libraryTarget: 'umd',
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  optimization: {
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                keep_fnames: true,
            },
        }),
    ],
  }
};