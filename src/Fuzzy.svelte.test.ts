// tslint:disable-next-line: no-submodule-imports
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import SvelteFuzzy from './Fuzzy.svelte';

it('returns the correct result', () => {
  const result = render(SvelteFuzzy, {
    props: {
      query: 'old',
      data: [
        { title: "Old Man's War" },
        { title: 'The Lock Artist' },
        { title: 'HTML5' }
      ],
      options: { keys: ['title'] }
    }
  });

  // tslint:disable-next-line: no-string-literal
  expect(result.component['$$'].ctx.result).toEqual([
    {
      title: [
        { matches: true, text: 'Old' },
        { matches: false, text: " Man's War" }
      ]
    }
  ]);
});
