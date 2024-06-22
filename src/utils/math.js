
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error('Both arguments must be numbers');

  return a + b;
}

function sumValues(obj) {

  if (obj === undefined || obj.length === 0)
    throw new Error('The object is undefined or is empty');

  if (obj.every(i => typeof i === "number") === false)
    throw new Error('In the object there is string');

  const value = obj.reduce((result, amount) => {
    return (result + amount);
  }, 0);

  return value
}

module.exports = {
  sum,
  sumValues
}