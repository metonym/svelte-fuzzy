const shx = require('shelljs');

shx.exec('rollup -c rollup.client.config.js -w');
