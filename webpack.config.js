'use strict';

const env = process.env.NODE_ENV || 'development';

module.exports = require(`./tools/${env}.js`);
