function __STRING_ARRAY__() {
  const _0x33ab77 = ["5CsLhIF", "10wndwrB", "2200644VmPQvV", "243088eUpunb", "stdin", "74600DnCBWx", "20214036qJVymO", "3304432wqFbdW", "7xZKtaC", "Heisei", "line", "readline", "8CxUySc", "11546095GemhOS", "5519946jqkkok", "push", "108JVmkJF", "log", "stdout", "length"];
  __STRING_ARRAY__ = function () {
    return _0x33ab77;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("8CxUySc") / 1 * (parseInt("243088eUpunb") / 2) + -parseInt("108JVmkJF") / 3 * (-parseInt("74600DnCBWx") / 4) + -parseInt("5CsLhIF") / 5 * (-parseInt("5519946jqkkok") / 6) + parseInt("7xZKtaC") / 7 * (-parseInt("3304432wqFbdW") / 8) + -parseInt("2200644VmPQvV") / 9 + -parseInt("10wndwrB") / 10 * (parseInt("11546095GemhOS") / 11) + parseInt("20214036qJVymO") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 596327);
function __DECODE_0__(PKRRRC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 329;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PKRRRC, key);
}
let lines = [];
let reader = require("readline").createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
reader.on("line", function (line) {
  lines["push"](line);
});
reader.on("close", function () {
  if (lines["length"] === 1) {
    let date_int = lines[0].replace(/\//g, "");
    if (date_int <= 20190430) {
      console.log("Heisei");
      return;
    }
  }
  console["log"]("TBD");
});
