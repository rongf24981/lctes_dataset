function __STRING_ARRAY__() {
  const _0x32c4c9 = ["3BUvPOY", "6fUSptL", "7312280JftHqJ", "53996734CHbjyD", "push", "4xwWCye", "readline", "12670ATyhXb", "9315UobQqu", "stdin", "log", "Yes", "1607887JSKxMI", "split", "3907166gFoYlo", "line", "1090070qzLyfi", "stdout", "6789559doegfR", "createInterface", "12IcgaGX", "close"];
  __STRING_ARRAY__ = function () {
    return _0x32c4c9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(qAjHOp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 336;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qAjHOp, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1607887JSKxMI") / 1 + parseInt("3907166gFoYlo") / 2 * (-parseInt("3BUvPOY") / 3) + parseInt("4xwWCye") / 4 * (parseInt("1090070qzLyfi") / 5) + -parseInt("6fUSptL") / 6 * (parseInt("6789559doegfR") / 7) + -parseInt("7312280JftHqJ") / 8 + -parseInt("9315UobQqu") / 9 * (-parseInt("12670ATyhXb") / 10) + -parseInt("53996734CHbjyD") / 11 * (-parseInt("12IcgaGX") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 992711);
let lines = [];
let reader = require("readline")["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
reader.on("line", function (line) {
  lines.push(line);
});
reader.on("close", function () {
  let d1 = [];
  let d2 = [];
  const n = lines[0];
  let zorome = "No";
  for (let i = 1; i < n; i++) {
    d1["push"](lines[i]["split"](" ")[0]);
    d2["push"](lines[i]["split"](" ")[1]);
  }
  for (let i = 0; i < n - 2; i++) {
    if (d1[i] == d2[i]) {
      if (d1[i + 1] == d2[i + 1]) {
        if (d1[i + 2] == d2[i + 2]) {
          zorome = "Yes";
          break;
        }
      }
    }
  }
  console["log"](zorome);
});
