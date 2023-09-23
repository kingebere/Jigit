const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    greenhouse: './greenhouse',
    lever: './lever.js',
    ashbyhq: './ashbyhq.js',
    bamboohr: './bamboohr.js',
    gmail: './gmail.js',
    breezyhr: './breezyhr.js',
    recruitee: './recruitee.js',
    ashbyhq: './ashbyhq.js',
    smart: './smart.js',
    workable: './workable.js',
    workable2: './workable2.js',
    linkedin: './linkedin.js',
    ycombinator: './ycombinator.js',
    techstars: './techstars.js',
    crunchbase: './crunchbase.js',
    linkedin: './linkedin.js',
    submitlever: './submitlever.js',
    submitgreenhouse: './submitgreenhouse.js',
    submitworkable: './submitworkable.js',
    submitbreezyhr: './submitbreezyhr.js',
    submitrecruitee: './submitrecruitee.js',
    popup:'./popup.js'
    // Add other entry points for each content script
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
