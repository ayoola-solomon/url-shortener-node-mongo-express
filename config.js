var config = {};

config.db = {};
config.webhost = 'http://localhost:3000/';

config.db.host = 'localhost' || '52.58.102.26'; // mongodb aws instance public ip
config.db.name = 'url_shortener';

module.exports = config;
