const path = require("path");

module.exports = {
  entry: './public/javascripts/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  },
  mode: "development",
};