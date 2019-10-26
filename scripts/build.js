const shx = require('shelljs');

shx.rm('-rf', ['dist', 'lib', 'example/dist', 'docs']);

shx.exec('rollup -c');

shx.exec('rollup -c rollup.client.config.js');
shx.exec('hash-static "dist/index.html"');

shx.cd('example');
shx.exec('yarn build');
shx.mv('dist', '../docs');
