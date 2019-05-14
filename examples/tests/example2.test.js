const { argue, does, unite } = require("immunite");
const stringCheck = require("../src/example2");

unite("This test is for strings", () => {
  does("it check if the string starts with given string", () => {
    argue(!stringCheck.startsWith("This is my Girl", "Jaqueline"));
  });
});
