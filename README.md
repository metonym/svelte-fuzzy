# svelte-fuzzy

[![NPM][npm]][npm-url]

> [Fuse.js](https://github.com/krisk/Fuse) binding for fuzzy text match highlighting.

<!-- REPO_URL -->

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-fuzzy
```

**NPM**

```bash
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
    {
      title: "Frankenstein; Or, The Modern Prometheus",
      author: "Mary Wollstonecraft Shelley",
    },
    {
      title: "A Christmas Carol in Prose; Being a Ghost Story of Christmas",
      author: "Charles Dickens",
    },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Scarlet Letter", author: "Nathaniel Hawthorne" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll" },
  ];

  let formatted = [];
</script>

<input bind:value={query} />

<br />

<button on:click={() => (query = "carol")}>Search "carol"</button>
<button on:click={() => (query = "")}>Clear</button>

<Fuzzy {query} {data} {options} bind:formatted />

{#each formatted as item}
  {#each item as line}
    <li>
      {#each line as { matches, text }}
        {#if matches}
          <mark>{text}</mark>
        {:else}
          {text}
        {/if}
      {/each}
    </li>
  {/each}
{/each}
```

### `Highlighter`

You can use the `Highlighter` component for fuzzy text highlighting. Matching characters are wrapped in a `mark` element.

```svelte
<script>
  import { Highlighter } from "svelte-fuzzy";
</script>

{#each formatted as item}
  {#each item as line}
    <li>
      <Highlighter {line} />
    </li>
  {/each}
{/each}
```

## API

### Props

#### `Fuzzy`

| Prop name | Value                                                                                                                  |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| query     | `string` (default: `""`)                                                                                               |
| data      | [FuzzyData](https://github.com/metonym/svelte-fuzzy/blob/master/types/Fuzzy.svelte.d.ts#L19) (default: `[]`)           |
| options   | [FuzzyOptions](https://github.com/metonym/svelte-fuzzy/blob/master/types/Fuzzy.svelte.d.ts#L25)                        |
| result    | [FuzzyResult](https://github.com/metonym/svelte-fuzzy/blob/master/types/Fuzzy.svelte.d.ts#L31) (default: `[]`)         |
| formatted | [FuzzyFormattedResult](https://github.com/metonym/svelte-fuzzy/blob/master/types/Fuzzy.svelte.d.ts#L4) (default: `[]`) |

#### `Highlighter`

| Prop name | Value                                                                                                                   |
| :-------- | :---------------------------------------------------------------------------------------------------------------------- |
| line      | [HighlighterLine](https://github.com/metonym/svelte-fuzzy/blob/master/types/Highlighter.svelte.d.ts#L4) (default: `[]`) |

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](./types).

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-fuzzy.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-fuzzy
