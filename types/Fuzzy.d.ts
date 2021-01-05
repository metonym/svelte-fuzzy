/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type FormattedResult = Array<
  { text: string; matches: boolean; key: string }[][]
>;

export interface FuzzyProps {
  /**
   * Fuse.js search query
   * @default ""
   */
  query?: string;

  /**
   * Fuse.js data
   * @default []
   */
  data?: Array<{ [key: string]: any }>;

  /**
   * Fuse.js options
   * @default {}
   */
  options?: { keys: string[]; [key: string]: any };

  /**
   * Raw Fuse.js search result
   * @default []
   */
  result?: Array<{
    [key: string]: string | Array<{ text: string; matches: boolean }>;
  }>;

  /**
   * Formatted Fuse.js results for easier syntax highlighting
   * @default []
   */
  formatted?: FormattedResult;
}

export default class Fuzzy extends SvelteComponentTyped<FuzzyProps, {}, {}> {}
