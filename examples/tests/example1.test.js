const { argue, does, unite } = require("immunite");
const numberCheck = require("../src/example1");

unite("This test is for numbers", () => {
  does("it checks if the number is even of not", () => {
    argue(numberCheck.isEven(6));
  });

  does("it fails", () => {
    argue(123 === 321);
  });
});
