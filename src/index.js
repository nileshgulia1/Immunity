const colors = require("colors");
const matchers = require("./matchers");
const results = { passed: 0, failed: 0 };

const unite = (title, callback) => {
  console.log(`\n⇨ ${title}`.yellow);
  callback();
};

const does = (title, callback) => {
  try {
    callback();
    console.log(`${"OK".bgGreen.black} ${title.green}`);
    results.passed++;
  } catch (e) {
    console.log(`${"FAIL".bgRed.black} ${title.red}`);
    console.log(e.stack.red);
    results.failed++;
  }
};

const argue = val => {
  if (val) return true;

  throw new Error("Assertion failed.");
};
Object.assign(argue, matchers);

const summary = () => {
  console.log(`\n.......\n`);
  console.log("Test results:\n");
  console.log(`  Success: ${results.passed}`.green);
  console.log(`  Fail: ${results.failed}`.red);
  if (results.failed > 0) process.exit(1);
  process.exit(0);
};

module.exports = { argue, does, summary, unite };
