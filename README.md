# svelte-fuzzy

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Lightweight Svelte fuzzy search highlighting using [fuse.js](https://github.com/krisk/Fuse).

This component allows for easier fuzzy text match highlighting.

## Install

```bash
yarn add svelte-fuzzy
```

## Usage

```html
<script>
  import Fuzzy from 'svelte-fuzzy';

  let query = 'old';
  let data = [
    {
      title: "Old Man's War",
      author: 'John'
    },
    {
      title: 'The Lock Artist',
      author: 'Steve'
    },
    {
      title: 'Remy',
      author: 'Remy'
    }
  ];
  let options = { keys: ['title', 'author'] };
</script>

<Fuzzy {query} {data} {options} />
```

## [Examples](examples)

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-fuzzy.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-fuzzy
[build]: https://travis-ci.com/metonym/svelte-fuzzy.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-fuzzy
[codecov]: https://codecov.io/gh/metonym/svelte-fuzzy
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/svelte-fuzzy.svg
