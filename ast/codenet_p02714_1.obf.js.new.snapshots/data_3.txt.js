(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("547560jjBoLt") / 1 + -parseInt("45282DkDMpr") / 2 * (-parseInt("27EiTUxw") / 3) + parseInt("274628yxPxhw") / 4 + -parseInt("2217810JGeXkE") / 5 + parseInt("1314714RWCfBN") / 6 * (parseInt("28dWKZVK") / 7) + parseInt("151168viUrxW") / 8 + -parseInt("6604704lqTITx") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 537940);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __STRING_ARRAY__() {
  const _0x578839 = ["28dWKZVK", "log", "stdin", "27EiTUxw", "45282DkDMpr", "resume", "line", "1314714RWCfBN", "split", "6604704lqTITx", "push", "547560jjBoLt", "setEncoding", "filter", "151168viUrxW", "2217810JGeXkE", "close", "utf8", "274628yxPxhw", "length"];
  __STRING_ARRAY__ = function () {
    return _0x578839;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BkEkZR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 127;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BkEkZR, key);
}
const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", line => {
  lines["push"](line);
});
reader.on("close", () => {
  const inputLength = Number(lines[0]);
  const inputString = lines[1];
  const inputArray = inputString["split"]("");
  const rArray = inputArray.filter(element => element === "R");
  const gArray = inputArray.filter(element => element === "G");
  const bArray = inputArray["filter"](element => element === "B");
  let sum = 0;
  for (let i = 1; i < Number(inputLength) + 1; i++) {
    for (let j = i + 1; j < Number(inputLength) + 1; j++) {
      const k = j + j - i;
      if (k <= inputLength && inputArray[i - 1] !== inputArray[j - 1] && inputArray[j - 1] !== inputArray[k - 1] && inputArray[i - 1] !== inputArray[k - 1]) {
        sum = sum + 1;
      }
    }
  }
  console["log"](rArray["length"] * gArray["length"] * bArray["length"] - sum);
});
