(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("486699AecpkT") / 1 + -parseInt("18940tqvRRP") / 2 * (parseInt("36snZXfj") / 3) + parseInt("2776248UHRVwm") / 4 + -parseInt("1576535bagVAX") / 5 + parseInt("1051416NAQMWk") / 6 + -parseInt("240821aXTKlc") / 7 * (-parseInt("152wskEfK") / 8) + -parseInt("2190177eORyCY") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 363956);
function Main(inputData) {
  init(inputData);
  var a = inI();
  var b = inI();
  outln((a * b / (a + b))["toFixed"](10));
}
var input;
var inputCnt;
function debug() {
  Main(document["getElementById"]("input")["value"]);
}
function init(inputData) {
  input = inputData["replace"](/\n/g, " ");
  input = input["split"](" ");
  inputCnt = 0;
}
const out = output => {
  console["log"](output);
};
const outln = output => {
  console["log"](output + "\n");
};
const inS = () => {
  return input[inputCnt++];
};
const inI = () => {
  return parseInt(inS(), 10);
};
function __STRING_ARRAY__() {
  const _0x5594ca = ["240821aXTKlc", "value", "replace", "2776248UHRVwm", "split", "getElementById", "36snZXfj", "log", "utf8", "1576535bagVAX", "input", "486699AecpkT", "152wskEfK", "toFixed", "1051416NAQMWk", "2190177eORyCY", "/dev/stdin", "18940tqvRRP"];
  __STRING_ARRAY__ = function () {
    return _0x5594ca;
  };
  return __STRING_ARRAY__();
}
const inF = () => {
  return parseFloat(inS());
};
function __DECODE_0__(zhQoOg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 219;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zhQoOg, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
