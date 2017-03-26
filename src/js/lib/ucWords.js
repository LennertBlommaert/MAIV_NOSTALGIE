import ucFirst from './ucFirst';

export default value => (
  value
    .split(` `)
    .map(w => ucFirst(w))
    .join(` `)
);
