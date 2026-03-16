(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("3xFbqvx") / 1 * (parseInt("842234LdUGiR") / 2) + parseInt("972330bbWwNW") / 3 + -parseInt("28988dLpiKX") / 4 * (parseInt("305Eivrjp") / 5) + parseInt("940980TlLQee") / 6 + -parseInt("667933LSLbQo") / 7 * (parseInt("16OBjOLC") / 8) + parseInt("3240aKLbgr") / 9 * (parseInt("23770MZWBWB") / 10) + parseInt("1048927wBMrwX") / 11 * (-parseInt("132sILrXK") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 918179);
const config = {
  input: "/dev/stdin",
  newline: "\n"
};
const line = require("fs")["readFileSync"](config["input"], "utf-8")["split"](config.newline);
function __DECODE_0__(TVWBNT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 302;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TVWBNT, key);
}
let cnt = 0;
const isort = (arr, g) => {
  for (let i = g; i < arr.length; i++) {
    let v = arr[i];
    let j = i - g;
    while (j >= 0 && arr[j] > v) {
      arr[j + g] = arr[j];
      j = j - g;
      cnt++;
    }
    arr[j + g] = v;
  }
  return arr;
};
const shellSort = arr => {
  const g = arr["map"]((_, i) => i * 3 + 1).filter(x => x <= arr["length"])["reverse"]();
  console.log(g["length"]);
  console["log"](g["map"](x => x["toString"]())["join"](" "));
  for (i = 0; i < arr["length"]; i++) {
    arr = isort(arr, g[i]);
  }
  return arr;
};
const n = parseInt(line[0]);
const data = line["slice"](1, n + 1)["map"](x => parseInt(x));
const sorted = shellSort(data);
function __STRING_ARRAY__() {
  const _0x6f2501 = ["1048927wBMrwX", "28988dLpiKX", "readFileSync", "16OBjOLC", "842234LdUGiR", "join", "305Eivrjp", "map", "reverse", "132sILrXK", "input", "toString", "972330bbWwNW", "length", "3xFbqvx", "940980TlLQee", "23770MZWBWB", "3240aKLbgr", "/dev/stdin", "log", "slice", "split", "667933LSLbQo"];
  __STRING_ARRAY__ = function () {
    return _0x6f2501;
  };
  return __STRING_ARRAY__();
}
console.log(cnt);
console["log"](sorted.map(x => x["toString"]())["join"]("\n"));
