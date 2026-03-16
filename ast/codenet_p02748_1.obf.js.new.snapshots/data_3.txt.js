'use strict';

function __DECODE_0__(ADvfxa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 339;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ADvfxa, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("449452qyEkHr") / 1 + -parseInt("2261618NZxzqM") / 2 + parseInt("1849050VGvONP") / 3 + -parseInt("12akIzgr") / 4 * (parseInt("1629445VsQHrw") / 5) + parseInt("1329024UeBtuW") / 6 + -parseInt("2330244UOsvRM") / 7 + parseInt("14932648MtLzVo") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 712519);
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const A = parseInt(arg[0]["split"](" ")[0]);
  const B = parseInt(arg[0]["split"](" ")[0]);
  const M = parseInt(arg[0]["split"](" ")[0]);
  const freezer = arg[1].split(" ")["map"](n => parseInt(n));
  const renzi = arg[2]["split"](" ").map(n => parseInt(n));
  const xyc = arg["slice"](3, M + 4);
  const minFreeze = Math["min"](...freezer);
  const minRenzi = Math["min"](...renzi);
  let temp = minFreeze + minRenzi;
  for (let i in xyc) {
    let x = parseInt(xyc[i]["split"](" ")[0]);
    let y = parseInt(xyc[i]["split"](" ")[1]);
    let c = parseInt(xyc[i]["split"](" ")[2]);
    let cost = freezer[x - 1] + renzi[y - 1] - c;
    if (cost <= temp) {
      temp = cost;
    }
  }
  console["log"](temp);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x10578a = ["log", "/dev/stdin", "2261618NZxzqM", "12akIzgr", "449452qyEkHr", "slice", "split", "1849050VGvONP", "min", "1629445VsQHrw", "trim", "1329024UeBtuW", "2330244UOsvRM", "14932648MtLzVo", "map"];
  __STRING_ARRAY__ = function () {
    return _0x10578a;
  };
  return __STRING_ARRAY__();
}
