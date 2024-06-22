const { sum, sumValues } = require('../src/utils/math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum the values', () => {
  expect(sumValues([10, 20, 30, 40])).toBe(100)
})

test('throws error when first argument is not a number', () => {
  expect(() => sum('1', 2)).toThrow('Both arguments must be numbers');
});

test('throws error when first argument is not a number', () => {
  expect(() => sum('1', undefined)).toThrow('Both arguments must be numbers');
});

test('throws error when the object is undefined', () => {
  expect(() => sumValues()).toThrow('The object is undefined or is empty');
});

test('throws error when the object is empty', () => {
  expect(() => sumValues([])).toThrow('The object is undefined or is empty');
});

test('throws error when in the object there is string', () => {
  expect(() => sumValues([1, 12, '3'])).toThrow('In the object there is string');
});