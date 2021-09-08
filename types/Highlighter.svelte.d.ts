/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type HighlighterLine = { text: string; matches: boolean; key: string }[];

export interface HighlighterProps {
  /**
   * @default []
   */
  line?: HighlighterLine;
}

export default class Highlighter extends SvelteComponentTyped<
  HighlighterProps,
  {},
  {}
> {}
