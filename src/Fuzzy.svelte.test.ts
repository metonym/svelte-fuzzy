// tslint:disable-next-line: no-submodule-imports
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import SvelteFuzzy from './Fuzzy.svelte';

const data = [
  { title: "Old Man's War", author: 'John' },
  { title: 'The Lock Artist', author: 'Steve' },
  { title: 'Remy', author: 'Remy' }
];
const options = { keys: ['title', 'author'] };

test('query "old"', () => {
  const { container, component } = render(SvelteFuzzy, {
    props: { query: 'old', data, options }
  });

  expect(container.innerHTML).toMatchSnapshot();
  expect(component.$$.ctx[2]).toEqual([
    {
      author: 'John',
      title: [
        { matches: true, text: 'Old' },
        { matches: false, text: " Man's War" }
      ]
    }
  ]);
  expect(component.$$.ctx[3]).toEqual([
    [
      [
        { key: 'title', matches: true, text: 'Old' },
        { key: 'title', matches: false, text: " Man's War" }
      ],
      [{ key: 'author', matches: false, text: 'John' }]
    ]
  ]);
});

test('query "remy"', () => {
  const { container, component } = render(SvelteFuzzy, {
    props: { query: 'remy', data, options }
  });

  expect(container.innerHTML).toMatchSnapshot();
  expect(component.$$.ctx[2]).toEqual([
    {
      author: [{ matches: true, text: 'Remy' }],
      title: [{ matches: true, text: 'Remy' }]
    }
  ]);
  expect(component.$$.ctx[3]).toEqual([
    [
      [{ key: 'title', matches: true, text: 'Remy' }],
      [{ key: 'author', matches: true, text: 'Remy' }]
    ]
  ]);
});
