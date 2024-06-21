const { sum, sumValues } = require('../src/utils/math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum the values', () => {
  expect(sumValues([10,20,30,40])).toBe(100)
})
