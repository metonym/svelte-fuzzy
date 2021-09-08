<script>
  /** @type {{ text: string; matches: boolean; key: string }[]} */
  export let line = [];
</script>

{#each line as { matches, text }}
  {#if matches}
    <mark>{text}</mark>
  {:else}
    {text}
  {/if}
{/each}
