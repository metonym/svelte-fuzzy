<script>
  import SvelteFuzzy from 'svelte-fuzzy';
  let query = 'old';
</script>

<input bind:value={query} />

<SvelteFuzzy
  {query}
  data={[{ title: "Old Man's War" }, { title: 'The Lock Artist' }, { title: 'HTML5' }]}
  options={{ keys: ['title'] }}
  let:results>
  {#each results as { title }}
    {#each title as { text, matches }}
      {#if matches}
        <mark>{text}</mark>
      {:else}{text}{/if}
    {/each}
  {/each}
</SvelteFuzzy>
