# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0](https://github.com/metonym/svelte-fuzzy/tree/v2.1.0) - 2021-09-08

- add `Highlighter` component
- fix broken links in `README` API prop table

## [2.0.0](https://github.com/metonym/svelte-fuzzy/tree/v2.0.0) - 2021-09-05

- upgrade `fuse.js` version to 3.6.1
- use `.svelte.d.ts` extension for TypeScript definition

## [1.0.0](https://github.com/metonym/svelte-fuzzy/tree/v1.0.0) - 2020-12-18

- export `result`, `formatted` props
- remove all markup
- re-instantiate Fuse if `options` changes
- add TypeScript definitions

## [0.3.0](https://github.com/metonym/svelte-fuzzy/tree/v0.3.0) - 2020-03-06

- Add formatted results in `formatted` for easier iteration, especially when searching multiple keys

- Add default slot using `formatted` data

## [0.2.2](https://github.com/metonym/svelte-fuzzy/tree/v0.2.2) - 2020-02-05

- Fix Fuse.js result formatting bug by patching `format-fuse.js` to ^1.0.2

## [0.2.1](https://github.com/metonym/svelte-fuzzy/tree/v0.2.1) - 2019-11-09

- Fix broken `svelte` import by publishing `src` folder

## [0.2.0](https://github.com/metonym/svelte-fuzzy/tree/v0.2.0) - 2019-10-26

- Rename "results" to "result"

## [0.1.0](https://github.com/metonym/svelte-fuzzy/tree/v0.1.0) - 2019-10-26

- Initial release
