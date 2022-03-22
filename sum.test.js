import sum from './sum';

test('2+2 equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data.two = 2;
  expect(data).toEqual({one: 1, two: 2});
});
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
