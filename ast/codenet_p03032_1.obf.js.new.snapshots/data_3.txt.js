'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1UIjJZv") / 1 * (parseInt("1364074bjiwID") / 2) + -parseInt("517989xgxpuh") / 3 * (parseInt("4VOKabV") / 4) + parseInt("199270BTFKYO") / 5 + parseInt("1195758KaqqaD") / 6 + -parseInt("2525775lCbSyV") / 7 + parseInt("1430952siEZom") / 8 * (-parseInt("18VAXHsu") / 9) + parseInt("20OFBXZg") / 10 * (parseInt("2360754cklPdP") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 459186);
function __STRING_ARRAY__() {
  const _0x5a8ea1 = ["log", "2360754cklPdP", "slice", "trim", "18VAXHsu", "utf8", "shift", "199270BTFKYO", "max", "sort", "1430952siEZom", "517989xgxpuh", "4VOKabV", "2525775lCbSyV", "readFileSync", "1UIjJZv", "1364074bjiwID", "map", "1195758KaqqaD", "20OFBXZg", "split", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x5a8ea1;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input["trim"]().split("\n");
  const NK = input["shift"]().split(" ")["map"](val => Number(val));
  const count = Math.min(...NK);
  input = input[0]["split"](" ")["map"](val => Number(val));
  const ans = [];
  for (let l = 0; l <= count; l++) {
    for (let r = 0; r <= count - l; r++) {
      let temp = [...input["slice"](0, l), ...input["slice"](NK[0] - r)]["sort"]((a, b) => a - b);
      let remain = NK[1] - l - r;
      for (let i = 0; i < remain; i++) {
        if (temp[i] >= 0) {
          break;
        }
        temp[i] = 0;
      }
      ans.push(temp.reduce((p, c) => p + c, 0));
    }
  }
  console["log"](Math["max"](...ans));
}
function __DECODE_0__(yNdCBX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 464;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yNdCBX, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
