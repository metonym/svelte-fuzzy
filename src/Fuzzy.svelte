<script>
  import Fuse from 'fuse.js';
  import format from 'format-fuse.js';
  export let query = '';
  export let data = [];
  export let options = {};

  options.shouldSort = true;
  options.includeMatches = true;

  let fuseResults = [];
  const fuse = new Fuse(data, options);

  $: if (data) {
    fuse.setCollection(data);
  }

  $: if (query || data) {
    fuseResults = fuse.search(query);
  }

  $: results = format(fuseResults);
</script>

<slot {results} />
