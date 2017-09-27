const { environment } = require('@rails/webpacker');

// expose jquery
environment.loaders.set('expose', {
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: 'jQuery'
  }, {
    loader: 'expose-loader',
    options: '$'
  }]
});

module.exports = environment;
