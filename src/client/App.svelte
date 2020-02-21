<script>
  import Fuzzy from '../Fuzzy.svelte';

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

<input bind:value={query} />

<Fuzzy {query} {data} {options} />
