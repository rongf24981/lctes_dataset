(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("38tNiUFT") / 1 * (parseInt("18294ycbyqh") / 2) + parseInt("22947iSZiwc") / 3 * (-parseInt("452NiEPXa") / 4) + -parseInt("6615630pjSOGb") / 5 + -parseInt("2902620TCBlJZ") / 6 * (-parseInt("7JUlWLK") / 7) + parseInt("8NwHRYu") / 8 * (-parseInt("873927dIzOCS") / 9) + -parseInt("3205040fOaBim") / 10 + parseInt("6989224wedoIb") / 11 * (parseInt("48QnZhbu") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 767822);
function Main(input) {
  const numbers = input.split(" ")["map"](n => Number(n));
  const p1 = numbers[0] * numbers[1];
  const p2 = numbers[2];
  if (p1 > p2) {
    console["log"](p2);
  } else {
    console["log"](p1);
  }
}
function __STRING_ARRAY__() {
  const _0x44696c = ["873927dIzOCS", "8NwHRYu", "48QnZhbu", "452NiEPXa", "6989224wedoIb", "utf8", "2902620TCBlJZ", "6615630pjSOGb", "log", "7JUlWLK", "18294ycbyqh", "readFileSync", "3205040fOaBim", "38tNiUFT", "/dev/stdin", "22947iSZiwc", "map"];
  __STRING_ARRAY__ = function () {
    return _0x44696c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WMQiXk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 326;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WMQiXk, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
