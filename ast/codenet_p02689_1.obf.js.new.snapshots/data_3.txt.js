'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("121715yBALTb") / 1 + parseInt("6960zQTAeE") / 2 + -parseInt("2955QZhQRL") / 3 * (-parseInt("204PixaFA") / 4) + parseInt("15SCJeBi") / 5 * (parseInt("348276rLytmX") / 6) + parseInt("1654121fFWSPx") / 7 * (parseInt("8lVNYwZ") / 8) + parseInt("171KcvGja") / 9 * (parseInt("85210ZTjvnz") / 10) + parseInt("6578429dtibRG") / 11 * (-parseInt("12alrmwh") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 149731);
function __STRING_ARRAY__() {
  const _0x4a17a5 = ["204PixaFA", "push", "length", "/dev/stdin", "map", "121715yBALTb", "15SCJeBi", "forEach", "6578429dtibRG", "171KcvGja", "1654121fFWSPx", "348276rLytmX", "8lVNYwZ", "6960zQTAeE", "2955QZhQRL", "shift", "split", "12alrmwh", "utf8", "85210ZTjvnz", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4a17a5;
  };
  return __STRING_ARRAY__();
}
const inputs = require("fs").readFileSync("/dev/stdin", "utf8")["split"]("\n");
inputs["shift"]();
const heights = inputs["shift"]()["split"](" ")["map"](v => parseInt(v, 10));
const towers = new Array(heights["length"]).fill()["map"](_ => new Array());
inputs["forEach"](v => {
  const splited = v["split"](" ").map(w => parseInt(w, 10) - 1);
  towers[splited[0]]["push"](splited[1]);
  towers[splited[1]]["push"](splited[0]);
});
let result = 0;
function __DECODE_0__(lAXnqe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 249;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lAXnqe, key);
}
towers["forEach"]((t, i) => {
  let good = true;
  if (t["length"]) {
    t.forEach(t2 => {
      if (heights[i] <= heights[t2]) {
        good = false;
      }
    });
  }
  if (good) {
    ++result;
  }
});
console["log"](result);
