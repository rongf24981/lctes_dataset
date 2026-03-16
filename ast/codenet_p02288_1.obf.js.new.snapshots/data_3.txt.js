function __STRING_ARRAY__() {
  const _0x807b55 = ["/dev/stdin", "4930788WJCdGE", "14EXYpXY", "floor", "utf8", "937383jLBByo", "trim", "map", "35959995CIwidh", "reduce", "length", "4809000mGXLdA", "split", "3dbYZZB", "2386438oyixde", "10041978FWQTgj", "log", "5672608qsNwtG", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x807b55;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("937383jLBByo") / 1 + -parseInt("2386438oyixde") / 2 * (-parseInt("3dbYZZB") / 3) + -parseInt("4930788WJCdGE") / 4 + parseInt("4809000mGXLdA") / 5 + parseInt("10041978FWQTgj") / 6 + -parseInt("14EXYpXY") / 7 * (-parseInt("5672608qsNwtG") / 8) + -parseInt("35959995CIwidh") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 955965);
function __DECODE_0__(RYSfbX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 260;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RYSfbX, key);
}
(function main() {
  const lines = require("fs").readFileSync("/dev/stdin", "utf8")["trim"]().split("\n");
  lines["shift"]();
  const arr = lines["shift"]()["split"](" ")["map"](Number);
  buildMaxHeap(arr);
  console["log"](arr["reduce"]((s, e) => s += " " + e, ""));
})();
function buildMaxHeap(arr) {
  const n = arr.length;
  const maxHeapify = i => {
    let left;
    let right;
    let largest;
    left = i * 2 + 1;
    right = i * 2 + 2;
    largest = left < n && arr[left] > arr[i] ? left : i;
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest != i) {
      arr[largest] = [arr[i], arr[i] = arr[largest]][0];
      maxHeapify(largest);
    }
  };
  for (let i = Math["floor"](arr["length"] / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}
