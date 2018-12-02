const { environment } = require('@rails/webpacker');
const expose = require('./loaders/expose');

environment.loaders.insert('expose', expose);
module.exports = environment;
