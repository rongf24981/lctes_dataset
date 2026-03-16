function __DECODE_0__(QtKkIa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 234;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QtKkIa, key);
}
function __STRING_ARRAY__() {
  const _0x5b95c4 = ["19590OVVzfY", "18627kLLAgO", "Balanced", "Left", "8jBygAr", "247398DbVNGs", "map", "readFileSync", "log", "1328751jTWprT", "utf8", "670oirEAb", "50iHnmKm", "Right", "/dev/stdin", "120VwCMoB", "489863pjvgGh", "4710209OcpMzV", "1869828badjNS"];
  __STRING_ARRAY__ = function () {
    return _0x5b95c4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("18627kLLAgO") / 1 * (parseInt("50iHnmKm") / 2) + -parseInt("247398DbVNGs") / 3 + parseInt("1869828badjNS") / 4 + parseInt("670oirEAb") / 5 * (-parseInt("19590OVVzfY") / 6) + parseInt("4710209OcpMzV") / 7 * (-parseInt("8jBygAr") / 8) + parseInt("1328751jTWprT") / 9 + -parseInt("120VwCMoB") / 10 * (-parseInt("489863pjvgGh") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 422304);
function Main(input) {
  const numbers = input.split(" ")["map"](n => Number(n));
  const l = numbers[0] + numbers[1];
  const r = numbers[2] + numbers[3];
  if (l > r) {
    console["log"]("Left");
  } else if (l < r) {
    console.log("Right");
  } else {
    console["log"]("Balanced");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
