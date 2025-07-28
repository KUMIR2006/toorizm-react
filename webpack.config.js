module.exports = {
  devtool: false,
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/react-day-picker/],
      },
    ],
  },
};
