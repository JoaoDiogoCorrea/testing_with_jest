const { sum, sumValues } = require('../src/utils/math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum the values', () => {
  expect(sumValues([10,20,30,40])).toBe(100)
})

test('throws error when first argument is not a number', () => {
  expect(() => sum('1', 2)).toThrow('Both arguments must be numbers');
});

test('throws error when first argument is not a number', () => {
  expect(() => sum('1', undefined)).toThrow('Both arguments must be numbers');
});