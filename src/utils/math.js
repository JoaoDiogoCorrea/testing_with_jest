
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function sumValues(obj) {
  if (obj.leght === 0) {
    throw new Error('The object is empty');
  }
  const value = obj.reduce((result, amount) => {
    return (result + amount);
  }, 0);
  return value
}

module.exports = {
  sum,
  sumValues
}