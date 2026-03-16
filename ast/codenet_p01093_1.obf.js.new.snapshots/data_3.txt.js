(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1756GIKvxf") / 1 * (-parseInt("862WRIBYX") / 2) + -parseInt("83670CrVKbJ") / 3 * (parseInt("8yVhrXO") / 4) + -parseInt("5BVMrha") / 5 * (parseInt("4770324ODQJAU") / 6) + -parseInt("2204363NPgHqo") / 7 + parseInt("2412632WwQmMI") / 8 + -parseInt("5180085pFfGnW") / 9 + -parseInt("237210dytCJO") / 10 * (-parseInt("506fPWpmf") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 408273);
function __STRING_ARRAY__() {
  const _0x379b24 = ["readFileSync", "shift", "237210dytCJO", "trim", "split", "5180085pFfGnW", "1756GIKvxf", "4770324ODQJAU", "506fPWpmf", "8yVhrXO", "map", "862WRIBYX", "/dev/stdin", "5BVMrha", "2412632WwQmMI", "83670CrVKbJ", "2204363NPgHqo", "utf8", "length"];
  __STRING_ARRAY__ = function () {
    return _0x379b24;
  };
  return __STRING_ARRAY__();
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const lines = input["trim"]()["split"]("\n");
function __DECODE_0__(qQuCRJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 139;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qQuCRJ, key);
}
while (line = lines["shift"]()) {
  const numbers = line["split"](" ").map(Number);
  if (numbers["length"] > 1) {
    const diffList = [];
    numbers.map((num1, ind1) => {
      numbers["map"]((num2, ind2) => {
        if (ind1 !== ind2) {
          const diff = Math.abs(num1 - num2);
          const pair = num1 + " " + num2;
          diffList.push([pair, diff]);
        }
      });
    });
    const sorted = diffList.sort((p1, p2) => p1[1] - p2[1])[0];
    console.log(sorted[1]);
  }
}
