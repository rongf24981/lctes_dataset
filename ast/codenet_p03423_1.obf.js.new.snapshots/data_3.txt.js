function __STRING_ARRAY__() {
  const _0x33740c = ["384568kLPGKy", "6624460BirNke", "2qDBNbZ", "/dev/stdin", "645144fGkPdQ", "9WNtoef", "132tNiBKI", "6PwvJgI", "601485JrCNqE", "floor", "5uMnODr", "2471602mjABXC", "2140707wphMAa", "split", "142888gYMKhb", "log"];
  __STRING_ARRAY__ = function () {
    return _0x33740c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EEdTaG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 463;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EEdTaG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("601485JrCNqE") / 1 + -parseInt("2qDBNbZ") / 2 * (-parseInt("2140707wphMAa") / 3) + -parseInt("142888gYMKhb") / 4 * (parseInt("5uMnODr") / 5) + parseInt("6PwvJgI") / 6 * (parseInt("2471602mjABXC") / 7) + -parseInt("384568kLPGKy") / 8 + -parseInt("9WNtoef") / 9 * (-parseInt("6624460BirNke") / 10) + -parseInt("132tNiBKI") / 11 * (parseInt("645144fGkPdQ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 398679);
function main(input) {
  input = input.trim();
  const a = parseInt(input["split"](" ")[0], 10);
  console["log"](Math["floor"](a / 3));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
