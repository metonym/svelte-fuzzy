<script>
  import Fuse from './Fuse.ts';
  import format from 'format-fuse.js';
  export let query = '';
  export let data = [];
  export let options = {};

  options.shouldSort = true;
  options.includeMatches = true;

  let results = [];
  const fuse = new Fuse(data, options);

  $: if (data) {
    fuse.setCollection(data);
  }

  $: if (query || data) {
    results = fuse.search(query);
  }

  $: result = format(results);
</script>

<slot {result} results={result} />
