function __STRING_ARRAY__() {
  const _0x1541de = ["log", "17562AGlssE", "3235830PJeqYp", "52457CScbCu", "37612QkRjtp", "4OXOMKz", "87JsZtAu", "130FctPCx", "119820SEkEOA", "352yLyBht", "readFileSync", "split", "/dev/stdin", "2733516ShiBVN", "16KFzSAh", "Yes", "409213edkEea", "10hPkMun", "length"];
  __STRING_ARRAY__ = function () {
    return _0x1541de;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cqMdqz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 216;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cqMdqz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("52457CScbCu") / 1 * (parseInt("4OXOMKz") / 2) + -parseInt("87JsZtAu") / 3 * (parseInt("37612QkRjtp") / 4) + -parseInt("130FctPCx") / 5 * (-parseInt("17562AGlssE") / 6) + -parseInt("409213edkEea") / 7 * (parseInt("16KFzSAh") / 8) + -parseInt("2733516ShiBVN") / 9 * (-parseInt("10hPkMun") / 10) + -parseInt("352yLyBht") / 11 * (-parseInt("119820SEkEOA") / 12) + -parseInt("3235830PJeqYp") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 165745);
function Main(input) {
  let Red = 0;
  let Blue = 0;
  const input_line = input["split"]("\n");
  inputS = input_line[1]["split"]("");
  for (i = 0; i < inputS["length"]; i++) {
    if (inputS[i] === "R") {
      Red++;
    } else {
      Blue++;
    }
  }
  console["log"](Red > Blue ? "Yes" : "No");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
