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

<button
  on:click={() => {
    data = [...data, { title: 'Boulder' }];
  }}>
  Update data
</button>

<Fuzzy {query} {data} options={{ keys: ['title'] }} let:result>
  {#each result as { title }}
    {#each title as { text, matches }}
      {#if matches}
        <mark>{text}</mark>
      {:else}{text}{/if}
    {/each}
  {/each}
</Fuzzy>
