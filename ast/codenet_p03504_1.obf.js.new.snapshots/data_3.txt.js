function __STRING_ARRAY__() {
  const _0x272f13 = ["23958224VJSHLa", "4061680YdoLzK", "/dev/stdin", "1893598RApttc", "shift", "split", "1122432mweTFq", "utf8", "fill", "map", "4119666pPptUk", "882048YEfbAA", "1jCJurX", "9697401xFHkWJ", "log"];
  __STRING_ARRAY__ = function () {
    return _0x272f13;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ErZyGi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 335;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ErZyGi, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1jCJurX") / 1 * (-parseInt("1893598RApttc") / 2) + -parseInt("1122432mweTFq") / 3 + parseInt("882048YEfbAA") / 4 + -parseInt("4061680YdoLzK") / 5 + -parseInt("4119666pPptUk") / 6 + -parseInt("9697401xFHkWJ") / 7 + parseInt("23958224VJSHLa") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 903655);
function max(array) {
  var result = -1 * Infinity;
  for (num of array) {
    if (result < num) {
      result = num;
    }
  }
  return result;
}
function main(input) {
  const lines = input["split"]("\n");
  const nums = lines["map"](line => line["split"](" ").map(x => parseInt(x)));
  var n_c = nums["shift"]();
  const N = n_c[0];
  const C = n_c[1];
  const t = Array(200002);
  const max_recorders = Array(200002);
  max_recorders["fill"](0);
  for (var c = 1; c <= C; c++) {
    t["fill"](0);
    for (var n = 0; n < N; n++) {
      if (nums[n][2] == c) {
        t[nums[n][0] * 2 - 1]++;
        t[nums[n][1] * 2]--;
      }
    }
    for (var i = 1; i < 200002; i++) {
      t[i] += t[i - 1];
    }
    for (var i = 1; i < 200002; i++) {
      if (t[i] > 0) {
        max_recorders[i]++;
      }
    }
  }
  console["log"](max(max_recorders));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
