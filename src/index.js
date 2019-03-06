const colors = require("colors");

const does = (title, callback) => {
  try {
    callback();
    console.log(`${"OK".bgGreen.black} ${title.green}`);
  } catch (e) {
    console.log(`${"FAIL".bgRed.black} ${title.red}`);
    console.log(e.stack.red);
  }
};

const argue = val => {
  if (val) return true;

  throw new Error("Assertion failed.");
};

module.exports = { argue, does };
