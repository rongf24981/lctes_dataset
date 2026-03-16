(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1549845cArMrV") / 1 + -parseInt("30wIEEao") / 2 * (-parseInt("299415ZwfPre") / 3) + -parseInt("562044wdXoss") / 4 + -parseInt("5HVVCHV") / 5 * (-parseInt("10236228QosdQL") / 6) + parseInt("6996913sOHsIZ") / 7 + -parseInt("11372816mSwrdW") / 8 + -parseInt("955872dmDcVq") / 9 * (parseInt("310KjZqMs") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 897956);
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
const reader = require("readline")["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
function __DECODE_0__(SiwiuQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 150;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SiwiuQ, key);
}
const lines = [];
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  let [top, back, right, left, front, bottom] = lines[0]["split"](" ")["map"](Number);
  const rs = lines[1];
  for (let i = 0; i < rs["length"]; i++) {
    switch (rs[i]) {
      case "N":
        [top, front, bottom, back] = [back, top, front, bottom];
        break;
      case "S":
        [top, front, bottom, back] = [front, bottom, back, top];
        break;
      case "W":
        [top, left, bottom, right] = [right, top, left, bottom];
        break;
      case "E":
        [top, left, bottom, right] = [left, bottom, right, top];
        break;
    }
  }
  console["log"](top);
});
function __STRING_ARRAY__() {
  const _0x19240c = ["1549845cArMrV", "utf8", "close", "log", "split", "setEncoding", "map", "5HVVCHV", "955872dmDcVq", "10236228QosdQL", "line", "562044wdXoss", "6996913sOHsIZ", "readline", "299415ZwfPre", "30wIEEao", "11372816mSwrdW", "stdout", "length", "createInterface", "stdin", "310KjZqMs", "resume"];
  __STRING_ARRAY__ = function () {
    return _0x19240c;
  };
  return __STRING_ARRAY__();
}
