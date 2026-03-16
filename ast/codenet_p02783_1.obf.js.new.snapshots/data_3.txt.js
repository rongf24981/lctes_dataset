function __STRING_ARRAY__() {
  const _0x23c711 = ["221696fchcwF", "562832FcJDfK", "180554SQADrY", "348RBziBa", "2241629FOWkZT", "95568QrNFdM", "209990swCVUM", "log", "2NFDECg", "utf8", "/dev/stdin", "ceil", "160BuvJXp", "9ltjHBx", "3FGhuXy", "126920OyWvQD", "77UlGGss"];
  __STRING_ARRAY__ = function () {
    return _0x23c711;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Ojxgem, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 356;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ojxgem, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2NFDECg") / 1 * (parseInt("221696fchcwF") / 2) + parseInt("3FGhuXy") / 3 * (-parseInt("562832FcJDfK") / 4) + parseInt("160BuvJXp") / 5 * (parseInt("95568QrNFdM") / 6) + -parseInt("77UlGGss") / 7 * (parseInt("126920OyWvQD") / 8) + parseInt("9ltjHBx") / 9 * (-parseInt("209990swCVUM") / 10) + parseInt("180554SQADrY") / 11 * (parseInt("348RBziBa") / 12) + -parseInt("2241629FOWkZT") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 255351);
function Main(input) {
  const args = input.split(" ");
  const H = parseInt(args[0], 10);
  const A = parseInt(args[1], 10);
  const ans = Math["ceil"](H / A);
  console["log"](ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
