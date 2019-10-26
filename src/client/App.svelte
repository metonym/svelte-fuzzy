<script>
  import Fuzzy from '../Fuzzy.svelte';
  let query = 'old';
  let data = [
    { title: "Old Man's War" },
    { title: 'The Lock Artist' },
    { title: 'HTML5' }
  ];
</script>

<input bind:value={query} />

<Fuzzy {query} {data} options={{ keys: ['title'] }} let:results>
  {#each results as { title }}
    {#each title as { text, matches }}
      {#if matches}
        <mark>{text}</mark>
      {:else}{text}{/if}
    {/each}
  {/each}
</Fuzzy>
