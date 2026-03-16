(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("347698uVmljE") / 1 + parseInt("1001214NUNKGZ") / 2 + -parseInt("27YBToqk") / 3 * (parseInt("11332mAIDJG") / 4) + parseInt("1075620AUzzXz") / 5 + parseInt("373770MTkiyM") / 6 + -parseInt("6923322NZfdNH") / 7 + parseInt("3830864DMLgIX") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 590039);
function __STRING_ARRAY__() {
  const _0x33982b = ["11332mAIDJG", "utf8", "shift", "/dev/stdin", "6923322NZfdNH", "3830864DMLgIX", "split", "1075620AUzzXz", "27YBToqk", "1001214NUNKGZ", "373770MTkiyM", "trim", "readFileSync", "map", "347698uVmljE"];
  __STRING_ARRAY__ = function () {
    return _0x33982b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PVwoZB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 179;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PVwoZB, key);
}
(function main() {
  let lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n");
  let [n, k] = lines["shift"]()["split"](" ")["map"](Number);
  let w = lines.map(Number);
  const canAllStack = p => {
    let cnt = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
      for (sum = 0; sum + w[cnt] <= p;) {
        sum += w[cnt++];
        if (cnt === n) {
          return n;
        }
      }
    }
    return cnt;
  };
  let mid;
  let left = 0;
  let right = 1000000000;
  while (right - left > 1) {
    mid = (right + left) / 2;
    if (canAllStack(mid) >= n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  console.log(Math.floor(right));
})();
