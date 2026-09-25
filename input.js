const readline = require("readline-sync");

module.exports = {
  input: function () {
    return readline.question();
  }
};