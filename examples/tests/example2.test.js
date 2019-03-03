const { argue, does } = require("immunity");
const stringCheck = require("../src/example2");

does("it check if the string starts with given string", () => {
  argue(!stringCheck.startsWith("This is my Girl", "Jaqueline"));
});
