<script>
  let className = 'svelte-fuzzy';
  export { className as class };
  export let query = '';
  export let data = [];
  export let options = {};

  import Fuse from './Fuse.ts';
  import format from 'format-fuse.js';

  options.shouldSort = true;
  options.includeMatches = true;

  const fuse = new Fuse(data, options);

  let result = [];
  let formatted = [];

  $: if (data) {
    fuse.setCollection(data);
  }

  $: if (query || data) {
    result = format(fuse.search(query));
    formatted = result.map(item => {
      return options.keys.map(key => {
        return typeof item[key] === 'string'
          ? [{ key, text: item[key], matches: false }]
          : item[key].map(field => ({ ...field, key }));
      });
    });
  }
</script>

<style>
  .svelte-fuzzy-field {
    display: block;
  }
</style>

<slot results={result} {result} {formatted}>
  {#each formatted as item}
    <div class={className}>
      {#each item as field}
        <span class="svelte-fuzzy-field">
          {#each field as { key, text, matches }}
            <span class={`svelte-fuzzy-${key}`}>
              {#if matches}
                <mark>{text}</mark>
              {:else}{text}{/if}
            </span>
          {/each}
        </span>
      {/each}
    </div>
  {/each}
</slot>
