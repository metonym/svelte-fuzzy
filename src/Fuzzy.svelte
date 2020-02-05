<script>
  export let query = '';
  export let data = [];
  export let options = {};

  import Fuse from './Fuse.ts';
  import format from 'format-fuse.js';

  options.shouldSort = true;
  options.includeMatches = true;

  const fuse = new Fuse(data, options);

  let result = [];

  $: if (data) {
    fuse.setCollection(data);
  }

  $: if (query || data) {
    result = format(fuse.search(query));
  }
</script>

<slot {result} results={result} />
