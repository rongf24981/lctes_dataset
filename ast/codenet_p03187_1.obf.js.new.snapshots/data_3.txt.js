function __DECODE_0__(OnVRtv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 169;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OnVRtv, key);
}
function __STRING_ARRAY__() {
  const _0x371e47 = ["6NuHNsU", "12010784OVhZBB", "3303sCfxBU", "4512361JBhfXE", "27597573hxRPLH", "log", "push", "apply", "utf8", "max", "concat", "1854560tiduSo", "/dev/stdin", "split", "filter", "slice", "1908PnzRZA", "map", "shift", "32060RwaVdC", "length", "2118492ZWlSLA"];
  __STRING_ARRAY__ = function () {
    return _0x371e47;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("32060RwaVdC") / 1 + -parseInt("2118492ZWlSLA") / 2 + -parseInt("3303sCfxBU") / 3 * (parseInt("1908PnzRZA") / 4) + parseInt("1854560tiduSo") / 5 * (parseInt("6NuHNsU") / 6) + parseInt("4512361JBhfXE") / 7 + -parseInt("12010784OVhZBB") / 8 + parseInt("27597573hxRPLH") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 964101);
function main(input) {
  'use strict';

  const lines = input["split"]("\n");
  const firstLine = lines[0].split(" ").map(value => +value);
  const L = firstLine[0];
  const N = firstLine[1];
  let xn = lines["slice"](1)["filter"](value => value)["map"](value => +value);
  let costs = [];
  const search = (x, xn, sum) => {
    if (xn["length"] === 0) {
      costs["push"](sum);
      return;
    }
    const leftDistance = xn[0] >= x ? xn[0] - x : L - x + xn[0];
    const rightDistance = xn[xn["length"] - 1] <= x ? x - xn[xn["length"] - 1] : x + (L - xn[xn["length"] - 1]);
    const left = xn["concat"]();
    const leftX = left["shift"]();
    const right = xn.concat();
    const rightX = right.pop();
    search(leftX, left, sum + leftDistance);
    search(rightX, right, sum + rightDistance);
  };
  search(0, xn, 0);
  console["log"](Math["max"]["apply"](null, costs));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
