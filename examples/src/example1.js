// tyrion/playground/src/number-utils.js

const numberCheck = {};

numberCheck.isEven = n => {
  if (n % 2 === 0) return true;
  return false;
};

module.exports = numberCheck;
