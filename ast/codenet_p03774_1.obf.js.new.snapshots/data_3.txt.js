'use strict';

function __STRING_ARRAY__() {
  const _0x30f0aa = ["6094110iKAphk", "13610sWONId", "push", "1020355BVvCcE", "map", "split", "slice", "/dev/stdin", "8hHfTsr", "179036HymGGn", "utf-8", "log", "16138PcvDap", "forEach", "14NmzMFT", "138975Rjnkmq", "390vmntVC", "549540ZmGwbz"];
  __STRING_ARRAY__ = function () {
    return _0x30f0aa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("16138PcvDap") / 1 * (-parseInt("14NmzMFT") / 2) + parseInt("138975Rjnkmq") / 3 + -parseInt("179036HymGGn") / 4 + parseInt("13610sWONId") / 5 * (-parseInt("390vmntVC") / 6) + -parseInt("1020355BVvCcE") / 7 + -parseInt("8hHfTsr") / 8 * (parseInt("549540ZmGwbz") / 9) + parseInt("6094110iKAphk") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 114256);
function __DECODE_0__(djqJRp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(djqJRp, key);
}
const main = input => {
  input = input["split"]("\n");
  const N = parseInt(input[0]["split"](" ")[0]);
  const M = parseInt(input[0].split(" ")[1]);
  let arr = input["slice"](1, N + 1);
  let points = input.slice(N + 1, M + N + 1);
  const parse = v => {
    let temp = v["split"](" ")["map"](vv => parseInt(vv));
    return {
      x: temp[0],
      y: temp[1]
    };
  };
  arr = arr.map(parse);
  points = points["map"](parse);
  let indexArr = [];
  arr["forEach"]((v, i) => {
    let minDist = 1000000000;
    let index = 0;
    points["forEach"]((w, j) => {
      let dist = Math.abs(v.x - w.x) + Math.abs(v.y - w.y);
      if (dist < minDist) {
        minDist = dist;
        index = j;
      }
    });
    indexArr["push"](index);
  });
  indexArr["forEach"](v => console["log"](v + 1));
};
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
