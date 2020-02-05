# svelte-rollup-template

> Svelte Rollup template with static asset hashing and minification.

This template extends the official [Svelte rollup template](https://github.com/sveltejs/template) by focusing on the post-build process.

The initial motivation was to address [an issue](https://github.com/sveltejs/template/issues/39) about hashing file names for production.

## Key Differences

- CSS/JS files are hashed
- HTML is minified

This project uses [PostHTML](https://github.com/posthtml/posthtml) to process compiled assets after the build stage.

## Getting Started

Clone the repository and install its dependencies.

```bash
git clone git@github.com:metonym/svelte-rollup-template.git
cd svelte-rollup-template
yarn install
```

## Available Scripts

### `yarn develop`

Runs the app in development mode with livereload enabled. Visit [http://localhost:3000](http://localhost:3000) to view the app.

The port number can be customized in [rollup.config.js](rollup.config.js#L45).

```diff
serve({
  contentBase: ['build'],
- port: 3000
+ port: 8080
})
```

### `yarn build`

Builds the app for production.

After the app is compiled to the `build` folder, the [`postbuild` script](postbuild.js) script runs [PostHTML](https://github.com/posthtml/posthtml) on the static assets.

#### Asset Hashing

[posthtml-hash](https://github.com/posthtml/posthtml-hash) hashes `bundle.css` and `bundle.js`.

```diff
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Svelte Rollup Template</title>
-   <link rel="stylesheet" href="bundle.css">
+   <link rel="stylesheet" href="bundle.b19ea05c629cee24e7b1.css">
  </head>
  <body>
-   <script src="bundle.js"></script>
+   <script src="bundle.d84688974c6150c07e5f.js"></script>
  </body>
</html>
```

#### Minification

[htmlnano](https://github.com/posthtml/htmlnano) minifies `build/index.html`.

```html
<!DOCTYPE html><html><head><meta charset="utf-8"><title>Svelte Rollup Template</title><link rel="stylesheet" href="bundle.b19ea05c629cee24e7b1.css"></head><body> <script src="bundle.d84688974c6150c07e5f.js"></script> </body></html>
```

## Limitations

Currently, only CSS and JS files are hashed.

## License

[MIT](LICENSE)
