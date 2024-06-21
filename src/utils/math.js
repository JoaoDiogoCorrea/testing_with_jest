
function sum(a, b) {
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