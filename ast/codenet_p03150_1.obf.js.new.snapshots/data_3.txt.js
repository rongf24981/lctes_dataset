'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("17813FpeiaR") / 1 + parseInt("4546QQChzs") / 2 * (parseInt("774BiSSKw") / 3) + -parseInt("4KVfGzE") / 4 * (parseInt("5145680yqJhSA") / 5) + parseInt("9149388vhRkTa") / 6 + -parseInt("76223zbIXRm") / 7 * (parseInt("512PWPMIG") / 8) + parseInt("23733zaOIBK") / 9 * (parseInt("6050oGcUKg") / 10) + parseInt("715qHTNud") / 11 * (-parseInt("220548XnTdJr") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 803863);
function __DECODE_0__(XqDZjG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 153;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XqDZjG, key);
}
function __STRING_ARRAY__() {
  const _0x33950e = ["stdin", "stdout", "774BiSSKw", "512PWPMIG", "line", "keyence", "slice", "4KVfGzE", "log", "4546QQChzs", "createInterface", "76223zbIXRm", "220548XnTdJr", "23733zaOIBK", "indexOf", "9149388vhRkTa", "shift", "17813FpeiaR", "YES", "6050oGcUKg", "5145680yqJhSA", "715qHTNud"];
  __STRING_ARRAY__ = function () {
    return _0x33950e;
  };
  return __STRING_ARRAY__();
}
process["stdin"].resume();
process["stdin"].setEncoding("utf8");
var reader = require("readline")["createInterface"]({
  input: process.stdin,
  output: process["stdout"]
});
reader.on("line", line => {
  let word = line;
  let arr = ["k", "e", "y", "e", "n", "c", "e"];
  let keyence = "keyence";
  if (word["indexOf"]("keyence") != -1) {
    console["log"]("YES");
    return;
  }
  let str = "";
  let ans = false;
  for (let i = 0; i < 6; i++) {
    str += arr["shift"]();
    let tmp = keyence["slice"](i + 1);
    if (word["indexOf"](str) != -1 && word.indexOf(tmp) != -1) {
      ans = true;
      break;
    }
  }
  if (ans) {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
});
