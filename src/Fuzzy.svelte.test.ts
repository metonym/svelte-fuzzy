// tslint:disable-next-line: no-submodule-imports
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import SvelteFuzzy from './Fuzzy.svelte';

it('returns the correct result', () => {
  const data = [
    { title: "Old Man's War" },
    { title: 'The Lock Artist' },
    { title: 'HTML5' }
  ];
  const options = { keys: ['title'] };

  const { container, component, rerender } = render(SvelteFuzzy, {
    props: {
      query: 'old',
      data,
      options
    }
  });

  expect(component.$$.ctx.result).toEqual([
    {
      title: [
        { matches: true, text: 'Old' },
        { matches: false, text: " Man's War" }
      ]
    }
  ]);

  rerender({ props: { query: '' } });
  expect(container.firstChild).toHaveTextContent('');
});
