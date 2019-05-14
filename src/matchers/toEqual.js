module.exports = (value1, value2) => {
  if (value1 === value2) return true;

  throw new Error(
    `The values are not the same.\n\nFound: ${value1}\nWanted: ${value2}`
  );
};
