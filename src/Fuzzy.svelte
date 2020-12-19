<script>
  /**
   * @typedef {Array<{ text: string; matches: boolean; key: string }[][]>} FormattedResult
   */

  /** Fuse.js search query */
  export let query = "";

  /**
   * Fuse.js data
   * @type {Array<{ [key: string]: any; }>}
   */
  export let data = [];

  /**
   * Fuse.js options
   * @type {{ keys: string[]; [key: string]: any; }}
   */
  export let options = {};

  /**
   * Raw Fuse.js search result
   * @type {Array<{ [key: string]: string | Array<{ text: string; matches: boolean; }>; }>}
   */
  export let result = [];

  /**
   * Formatted Fuse.js results for easier syntax highlighting
   * @type FormattedResult
   */
  export let formatted = [];

  import Fuse from "fuse.js";
  import format from "format-fuse.js";

  $: fuse = new Fuse(data, {
    ...options,
    shouldSort: true,
    includeMatches: true,
  });
  $: if (data) fuse.setCollection(data);
  $: if (query || data) {
    result = format(fuse.search(query));
    formatted = result.map((item) => {
      return options.keys.map((key) => {
        return typeof item[key] === "string"
          ? [{ key, text: item[key], matches: false }]
          : item[key].map((field) => ({ ...field, key }));
      });
    });
  }
</script>
