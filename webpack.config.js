const path = require('path');

module.exports = {
  // what is the main file we want webpack to start at?
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
