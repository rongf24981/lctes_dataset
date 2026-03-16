'use strict';

function __STRING_ARRAY__() {
  const _0x10ee83 = ["18966gHRjAy", "2845650VgIPLQ", "14TyljDU", "233478aBdgzb", "147648oSRXRm", "4XhFlka", "utf8", "10zyhzfF", "44fFdUIb", "/dev/stdin", "split", "165sWeuWJ", "1141256OueGej", "48018brozNz", "25791gOsKWu"];
  __STRING_ARRAY__ = function () {
    return _0x10ee83;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(eURqEZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eURqEZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("10zyhzfF") / 1 * (-parseInt("48018brozNz") / 2) + parseInt("25791gOsKWu") / 3 * (-parseInt("4XhFlka") / 4) + -parseInt("165sWeuWJ") / 5 * (-parseInt("18966gHRjAy") / 6) + parseInt("14TyljDU") / 7 * (-parseInt("1141256OueGej") / 8) + -parseInt("233478aBdgzb") / 9 + parseInt("2845650VgIPLQ") / 10 + -parseInt("44fFdUIb") / 11 * (parseInt("147648oSRXRm") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 259899);
const main = arg => {
  const input = arg.trim()["split"]("\n");
  let N = Number(input[0]["split"](" ")[0]);
  let x = Number(input[0]["split"](" ")[1]);
  let As = input[1]["split"](" ").map(n => Number(n));
  let manip = 0;
  for (let i = 0; i < N; i++) {
    let exceed = As[i] - x;
    if (exceed > 0) {
      As[i] = x;
      manip += exceed;
    }
  }
  for (let i = 1; i < N - 1; i++) {
    let left = As[i - 1];
    let current = As[i];
    let right = As[i + 1];
    if (left + current > x && current + right > x) {
      As[i] = x - left;
      manip += current - (x - left);
    }
  }
  for (let i = 0; i < N - 1; i++) {
    let current = As[i];
    let right = As[i + 1];
    if (current + right > x) {
      As[i] = x - right;
      manip += current - (x - right);
    }
  }
  console.log(manip);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
