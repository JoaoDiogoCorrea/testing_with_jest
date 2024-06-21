
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function sumValues(obj) {
  const value = obj.reduce((result, amount) => {
    return (result + amount);
  }, 0);
  return value
}

module.exports = {
  sum,
  sumValues
}