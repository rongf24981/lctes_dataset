'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("6oXXgie") / 1 * (-parseInt("500494rsnoLR") / 2) + -parseInt("3IpDXAe") / 3 * (-parseInt("4489196YTyPUD") / 4) + parseInt("216645zYMPKI") / 5 * (-parseInt("6XQtVIs") / 6) + -parseInt("49bvIVbv") / 7 * (parseInt("1763896yrPZfU") / 8) + -parseInt("4611186pRBVWV") / 9 + -parseInt("872540ZMnADe") / 10 + parseInt("36857040JhWCpv") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 785111);
function main(input) {
  const inputRows = input["split"]("\n");
  const d = parseInt(inputRows[0]);
  let cStrArray = inputRows[1]["split"](" ");
  const c = cStrArray["map"](str => parseInt(str));
  let s = [];
  for (let i = 2; i < inputRows["length"]; i++) {
    s["push"]([]);
    const tmpRow = inputRows[i].split(" ");
    for (let j = 0; j < tmpRow["length"]; j++) {
      s[i - 2]["push"](parseInt(tmpRow[j]));
    }
  }
  let t = [];
  for (let i = 0; i < s.length; i++) {
    let tmpMax = s[i][0];
    let index = 0;
    for (let j = 1; j < s[i]["length"]; j++) {
      if (s[i][j] > tmpMax) {
        index = j;
        tmpMax = s[i][j];
      }
    }
    t.push(index + 1);
  }
  for (let i = 0; i < t["length"]; i++) {
    console.log(t[i]);
  }
}
function __STRING_ARRAY__() {
  const _0x13866f = ["500494rsnoLR", "49bvIVbv", "push", "length", "map", "872540ZMnADe", "6XQtVIs", "36857040JhWCpv", "split", "1763896yrPZfU", "3IpDXAe", "6oXXgie", "4489196YTyPUD", "216645zYMPKI", "4611186pRBVWV"];
  __STRING_ARRAY__ = function () {
    return _0x13866f;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __DECODE_0__(rmXjgW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 224;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rmXjgW, key);
}
main(input);
