const { argue, does } = require("immunity");
const numberCheck = require("../src/example1");

does("it checks if the number is even of not", () => {
  argue(numberCheck.isEven(6));
});

does("it fails", () => {
  argue(123 === 321);
});
