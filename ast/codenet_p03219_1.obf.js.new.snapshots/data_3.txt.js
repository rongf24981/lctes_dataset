(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("413653tWkKPj") / 1 * (-parseInt("6GXQaHb") / 2) + parseInt("1698504wqAZuM") / 3 + -parseInt("60idPswW") / 4 * (parseInt("220700PHPNjj") / 5) + -parseInt("36996iUZepn") / 6 * (parseInt("1309NibGDz") / 7) + -parseInt("9492496LDhndp") / 8 * (parseInt("9buZYzL") / 9) + -parseInt("7613500lJnCXz") / 10 + parseInt("57679864GzcLhG") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 805779);
const rl = require("readline")["createInterface"]({
  input: process.stdin
});
rl.on("line", line => {
  const param = line["split"](" ");
  solve(Number(param[0]), Number(param[1]));
  rl.close();
});
function __STRING_ARRAY__() {
  const _0x56098c = ["36996iUZepn", "log", "220700PHPNjj", "413653tWkKPj", "split", "1698504wqAZuM", "line", "7613500lJnCXz", "60idPswW", "9buZYzL", "createInterface", "1309NibGDz", "57679864GzcLhG", "6GXQaHb", "9492496LDhndp", "readline"];
  __STRING_ARRAY__ = function () {
    return _0x56098c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(mduhaR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 462;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mduhaR, key);
}
function solve(x, y) {
  console["log"](x + y / 2);
}
