(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("89307Fqhara") / 1 * (-parseInt("26nUBEbJ") / 2) + parseInt("69579qPbSbV") / 3 * (-parseInt("4qKYtOx") / 4) + parseInt("4195700gzdEWY") / 5 + parseInt("644928ENkanI") / 6 + parseInt("4739wlKWjZ") / 7 * (parseInt("1864gpTKvO") / 8) + parseInt("1351134qxPoUO") / 9 + -parseInt("17413380fXsDfc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 650955);
function __STRING_ARRAY__() {
  const _0x1ea969 = ["log", "89307Fqhara", "4195700gzdEWY", "644928ENkanI", "17413380fXsDfc", "4739wlKWjZ", "1864gpTKvO", "map", "69579qPbSbV", "26nUBEbJ", "split", "1351134qxPoUO", "readFileSync", "4qKYtOx", "Yes"];
  __STRING_ARRAY__ = function () {
    return _0x1ea969;
  };
  return __STRING_ARRAY__();
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf-8").split("\n");
const [X, Y] = input[0]["split"](" ")["map"](Number);
let ans = "No";
if (X < Y) {
  const r = Y - X * 2;
  if (r % 2 === 0 && r / 2 <= X) {
    ans = "Yes";
  }
}
function __DECODE_0__(dPYyLD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 304;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dPYyLD, key);
}
console["log"](ans);
