<script lang="ts">
  import Fuzzy from "./types";
  import type { FormattedResult } from "./types/Fuzzy";

  let query = "old";

  // Fuse.js options
  let options = { keys: ["title"] };

  // Fuse.js data
  let data = [
    { title: "Old Man's War", author: "John" },
    { title: "The Lock Artist", author: "Steve" },
    { title: "Remy", author: "Remy" },
  ];

  let formatted: FormattedResult = [];
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
