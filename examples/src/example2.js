const stringCheck = {};

stringCheck.startsWith = (str, item) => {
  return str.indexOf(item) === 0;
};

module.exports = stringCheck;
