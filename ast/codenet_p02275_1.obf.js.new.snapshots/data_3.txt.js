function __DECODE_0__(fsALND, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 322;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fsALND, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("40931jryZCC") / 1 * (parseInt("4lxuOnx") / 2) + parseInt("1588182BvdBRr") / 3 + parseInt("16YrUBBq") / 4 * (parseInt("675795wgXAfa") / 5) + parseInt("1273248HxUMpk") / 6 + -parseInt("3554509YdrQoH") / 7 + -parseInt("3181488ArbJVZ") / 8 + parseInt("3007764qhNiKD") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 629099);
(function main() {
  const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8").trim().split("\n");
  const n = Number(lines["shift"]());
  const arr = lines["shift"]().split(" ")["map"](Number);
  const k = 10000;
  let cnt_arr = [];
  for (let i = 0; i <= k; i++) {
    cnt_arr[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    cnt_arr[arr[i]]++;
  }
  for (let i = 1; i <= k; i++) {
    cnt_arr[i] += cnt_arr[i - 1];
  }
  let out_arr = [];
  for (let i = n - 1; i >= 0; i--) {
    out_arr[--cnt_arr[arr[i]]] = arr[i];
  }
  console["log"](out_arr["join"](" "));
})();
function __STRING_ARRAY__() {
  const _0x542035 = ["3007764qhNiKD", "map", "3554509YdrQoH", "utf8", "1588182BvdBRr", "3181488ArbJVZ", "log", "shift", "1273248HxUMpk", "readFileSync", "40931jryZCC", "16YrUBBq", "4lxuOnx", "join", "/dev/stdin", "675795wgXAfa"];
  __STRING_ARRAY__ = function () {
    return _0x542035;
  };
  return __STRING_ARRAY__();
}
