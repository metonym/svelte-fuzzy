# svelte-fuzzy

[![NPM][npm]][npm-url]

> Lightweight Svelte fuzzy search highlighting using [fuse.js](https://github.com/krisk/Fuse).

## Install

```bash
yarn add svelte-fuzzy
```

## Usage

```js
<Fuzzy
  query='old'
  data={[
    { title: "Old Man's War" },
    { title: 'The Lock Artist' },
    { title: 'HTML5' }
  ]}
  options={{ keys: ['title'] }}
  let:results>
  {#each results as { title }}
    {#if Array.isArray(title)}
      {#each title as { text, matches }}
        {#if matches}
          <mark>{text}</mark>
        {:else}{text}{/if}
      {/each}
    {/if}
  {/each}
</Fuzzy>
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-fuzzy.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-fuzzy
