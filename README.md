# svelte-fuzzy

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> [Fuse.js](https://github.com/krisk/Fuse) binding for Svelte for fuzzy text syntax highlighting.

## Install

```bash
yarn add -D svelte-fuzzy
# OR
npm i -D svelte-fuzzy
```

## Usage

```svelte
<script>
  import Fuzzy from "svelte-fuzzy";

  let query = "old";

  // Fuse.js options
  let options = { keys: ["title"] };

  // Fuse.js data
  let data = [
    { title: "Old Man's War", author: "John" },
    { title: "The Lock Artist", author: "Steve" },
    { title: "Remy", author: "Remy" },
  ];
  
  let formatted = [];
</script>

<Fuzzy {query} {data} {options} bind:formatted />

{#each formatted as item}
  {#each item as line}
    <li>
      {#each line as { matches, text }}
        {#if matches}<mark>{text}</mark>{:else}{text}{/if}
      {/each}
    </li>
  {/each}
{/each}
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-fuzzy.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-fuzzy
[build]: https://travis-ci.com/metonym/svelte-fuzzy.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-fuzzy
[codecov]: https://codecov.io/gh/metonym/svelte-fuzzy
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/svelte-fuzzy.svg
