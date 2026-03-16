(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("232648WFUmyP") / 1 + -parseInt("250970LyrFMq") / 2 * (parseInt("15ozcwTd") / 3) + -parseInt("5103996CfUrhi") / 4 * (-parseInt("5xWOonP") / 5) + -parseInt("21198NZmich") / 6 * (-parseInt("742hQUEXf") / 7) + -parseInt("200epoLaE") / 8 * (-parseInt("4761KAxXWM") / 9) + -parseInt("8157720IyGYAa") / 10 + parseInt("8973657FrxHKe") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 803664);
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input["split"]("\n");
let [X, K, D] = lines[0]["split"](" ")["map"](Number);
X = Math["abs"](X);
const div = Math["min"](Math["floor"](X / D), K);
let x = X - div * D;
function __STRING_ARRAY__() {
  const _0xa136d0 = ["200epoLaE", "split", "8157720IyGYAa", "250970LyrFMq", "5103996CfUrhi", "map", "5xWOonP", "utf8", "232648WFUmyP", "8973657FrxHKe", "floor", "742hQUEXf", "15ozcwTd", "abs", "min", "21198NZmich", "4761KAxXWM"];
  __STRING_ARRAY__ = function () {
    return _0xa136d0;
  };
  return __STRING_ARRAY__();
}
let k = K - div;
for (let i = 0; i < k; i++) {
  x -= D;
  if (x <= 0) {
    if (!((k - i) % 2)) {
      x += D;
    }
    break;
  }
}
function __DECODE_0__(Pbspxb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 214;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Pbspxb, key);
}
console.log(Math["abs"](x));
