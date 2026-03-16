(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("972189GnOCqO") / 1 + -parseInt("679342Qlptgy") / 2 * (parseInt("12szTtyS") / 3) + -parseInt("5126516DaJcUy") / 4 + -parseInt("6886665OgaIsw") / 5 + -parseInt("4208208OMFCwk") / 6 * (-parseInt("7inYMge") / 7) + parseInt("11087064pUAgYb") / 8 + parseInt("41787YpOaSs") / 9 * (parseInt("3590JNuKFZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 708631);
let fs = require("fs");
function __DECODE_0__(VSWWan, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 299;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VSWWan, key);
}
function __STRING_ARRAY__() {
  const _0x3d7f3a = ["argv", "12szTtyS", "7inYMge", "11087064pUAgYb", "/dev/stdin", "readFile", "679342Qlptgy", "readFileSync", "6886665OgaIsw", "utf8", "log", "length", "4208208OMFCwk", "5126516DaJcUy", "3590JNuKFZ", "972189GnOCqO", "map", "41787YpOaSs"];
  __STRING_ARRAY__ = function () {
    return _0x3d7f3a;
  };
  return __STRING_ARRAY__();
}
const fuga = data => {
  lines = data.split("\n");
  lines = lines["map"](line => line.split(" "));
  lines = lines["map"](line => line["map"](elem => parseInt(elem)));
  for (let i = 0; i < lines["length"]; i++) {
    let str = "";
    if (!lines[i][0]) {
      return;
    }
    for (let j = 0; j < lines[i][0]; j++) {
      for (let k = 0; k < lines[i][1]; k++) {
        str += "#";
      }
      console.log(str);
      str = "";
    }
    console["log"]("");
  }
};
const readFile = route => {
  fs["readFile"](route, "utf8", (err, data) => {
    fuga(data);
  });
};
const readFileWithoutArg = () => {
  const data = require("fs")["readFileSync"]("/dev/stdin", "utf8");
  fuga(data);
};
let sampleInputPath = "";
if (process.argv["length"] > 2) {
  sampleInputPath = process["argv"][2];
  readFile(sampleInputPath);
} else {
  readFileWithoutArg();
}
