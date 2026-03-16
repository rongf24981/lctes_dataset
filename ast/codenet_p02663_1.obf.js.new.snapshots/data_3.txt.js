function __DECODE_0__(BZjBQI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 400;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BZjBQI, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("10734qyiBFZ") / 1 * (parseInt("94YyzDFr") / 2) + -parseInt("10359QVMBTa") / 3 * (parseInt("172pENMEx") / 4) + parseInt("1430475qXBDYY") / 5 + parseInt("12oYgZLr") / 6 * (-parseInt("1209803nzCPvN") / 7) + parseInt("1032dxMQUj") / 8 * (parseInt("24822krNLTH") / 9) + parseInt("20LFihod") / 10 * (-parseInt("1241383WOlARb") / 11) + parseInt("92316tyAnCs") / 12 * (parseInt("1443mPdahe") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 271459);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
let cin = input["split"](/ |\n/);
let cid = 0;
const next = () => cin[cid++];
const nexts = n => cin["slice"](cid, cid += n)["map"](i => parseInt(i));
const [H1, M1, H2, M2, K] = nexts(5);
const time = H2 * 60 + M2 - (H1 * 60 + M1) - K;
function __STRING_ARRAY__() {
  const _0x3b8c47 = ["1209803nzCPvN", "10359QVMBTa", "94YyzDFr", "92316tyAnCs", "1430475qXBDYY", "12oYgZLr", "1241383WOlARb", "172pENMEx", "readFileSync", "1443mPdahe", "slice", "20LFihod", "1032dxMQUj", "/dev/stdin", "log", "24822krNLTH", "map", "10734qyiBFZ", "utf8", "split"];
  __STRING_ARRAY__ = function () {
    return _0x3b8c47;
  };
  return __STRING_ARRAY__();
}
if (time > 0) {
  console["log"](time);
} else {
  console["log"](0);
}
