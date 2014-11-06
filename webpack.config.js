
module.exports = {

  // entry: {
  //   tlaloc: "./src/TlalocApp"
  // },
  entry: [
    "bootstrap-webpack!./src/bootstrap/bootstrap.config.jsconfig",
    "./src/css/tlaloc.less",
    "./src/TlalocApp"
  ],

  output: {
      path: __dirname +"/public",
      filename: "tlaloc.js"
  },

  module: {
    loaders: [

      { test: /\.jx$/, loader: 'jsx-loader?harmony'},
      { test: /\.js$/, loader: '6to5-loader'},

      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },


      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  externals: { jquery: "jQuery" }
}
