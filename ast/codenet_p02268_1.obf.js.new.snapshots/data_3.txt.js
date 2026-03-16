(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("850867zWhDWC") / 1 + parseInt("1467304HHScUk") / 2 + -parseInt("51GqCWEq") / 3 * (parseInt("117664GIWsQM") / 4) + parseInt("683815xnGPGB") / 5 + parseInt("4263636lpSaJE") / 6 * (parseInt("7nfwpNy") / 7) + -parseInt("12776176cfvYUA") / 8 + parseInt("1773bvODbf") / 9 * (parseInt("23980JihKpS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 807200);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(JVTkzh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 398;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JVTkzh, key);
}
function __STRING_ARRAY__() {
  const _0x3032e0 = ["23980JihKpS", "117664GIWsQM", "1467304HHScUk", "1773bvODbf", "51GqCWEq", "12776176cfvYUA", "log", "850867zWhDWC", "683815xnGPGB", "/dev/stdin", "map", "floor", "reduce", "4263636lpSaJE", "split", "utf8", "readFileSync", "7nfwpNy"];
  __STRING_ARRAY__ = function () {
    return _0x3032e0;
  };
  return __STRING_ARRAY__();
}
var Arr = input.trim()["split"]("\n");
const binarySearch = (key, arr, N) => {
  let mid;
  let left = 0;
  let right = N;
  while (left < right) {
    mid = Math["floor"]((left + right) / 2);
    if (key < arr[mid]) {
      right = mid;
    } else if (key > arr[mid]) {
      left = mid + 1;
    } else {
      return 1;
    }
  }
  return 0;
};
(function () {
  const N1 = Number(Arr[0]);
  const arr1 = Arr[1].split(" ")["map"](Number);
  const arr2 = Arr[3]["split"](" ")["map"](Number);
  console["log"](arr2.map(e => binarySearch(e, arr1, N1))["reduce"]((a, b) => a + b, 0));
})();
