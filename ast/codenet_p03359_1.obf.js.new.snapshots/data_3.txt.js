(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("295316RYauex") / 1 + parseInt("4PdfePe") / 2 * (parseInt("226509jEWxfg") / 3) + parseInt("1361920WJhobN") / 4 + parseInt("579165RYkmkh") / 5 + -parseInt("795600bRAnbH") / 6 + -parseInt("120855GhMvWl") / 7 * (parseInt("144FhqeSG") / 8) + parseInt("3045114iocHbV") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 206979);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(XcSjCS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 377;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XcSjCS, key);
}
const list = input["split"](" ");
const a = Number(list[0]);
function __STRING_ARRAY__() {
  const _0x36e58d = ["split", "120855GhMvWl", "226509jEWxfg", "/dev/stdin", "readFileSync", "579165RYkmkh", "4PdfePe", "3045114iocHbV", "log", "1361920WJhobN", "795600bRAnbH", "144FhqeSG", "295316RYauex", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x36e58d;
  };
  return __STRING_ARRAY__();
}
const b = Number(list[1]);
if (a > b) {
  console["log"](a - 1);
} else {
  console["log"](a);
}
