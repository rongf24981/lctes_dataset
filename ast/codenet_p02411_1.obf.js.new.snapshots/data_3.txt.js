function __DECODE_0__(iazjtb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 187;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iazjtb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("25474haaNNs") / 1 * (-parseInt("48hduBNZ") / 2) + parseInt("282864xzEJxJ") / 3 + parseInt("1869988VJyfma") / 4 * (parseInt("5IjrIVy") / 5) + -parseInt("4138926lENXcB") / 6 + parseInt("3500602UaQDUD") / 7 * (-parseInt("8mdsvOa") / 8) + -parseInt("1638XsDueh") / 9 * (-parseInt("20630eEuwQK") / 10) + parseInt("68178aTqiqK") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 364918);
let input = require("fs").readFileSync("/dev/stdin", "UTF-8");
function __STRING_ARRAY__() {
  const _0x1e0fe4 = ["split", "25474haaNNs", "1869988VJyfma", "UTF-8", "1638XsDueh", "48hduBNZ", "5IjrIVy", "/dev/stdin", "8mdsvOa", "68178aTqiqK", "282864xzEJxJ", "map", "20630eEuwQK", "3500602UaQDUD", "4138926lENXcB"];
  __STRING_ARRAY__ = function () {
    return _0x1e0fe4;
  };
  return __STRING_ARRAY__();
}
let array = input["split"]("\n");
let result = "";
for (let i = 0; i < array.length; i++) {
  let data = array[i].split(" ")["map"](Number);
  let fScore = data[0];
  let lScore = data[1];
  let retest = data[2];
  if (fScore === -1 && lScore === -1 && retest === -1) {
    break;
  }
  if (i !== 0) {
    result += "\n";
  }
  if (fScore === -1 || lScore === -1) {
    result += "F";
  } else {
    let sum = fScore + lScore;
    switch (true) {
      case sum >= 80:
        result += "A";
        break;
      case sum >= 65 && sum < 80:
        result += "B";
        break;
      case sum >= 50 && sum < 65:
        result += "C";
        break;
      case sum >= 30 && sum < 50:
        result += retest >= 50 ? "C" : "D";
        break;
      default:
        result += "F";
    }
    ;
  }
}
console.log(result);
