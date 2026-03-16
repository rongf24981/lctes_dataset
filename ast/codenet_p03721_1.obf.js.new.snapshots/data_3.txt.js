'use strict';

function __DECODE_0__(VCKPwH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 202;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VCKPwH, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("29817TtOadI") / 1 + parseInt("615286NoVrfk") / 2 + -parseInt("872760hssvwv") / 3 + parseInt("4VaGkRy") / 4 * (-parseInt("1691025AGXGVV") / 5) + parseInt("1624638ZKIrYY") / 6 + -parseInt("2287628pMPBQT") / 7 + -parseInt("16xmsSrH") / 8 * (-parseInt("2632203arOUDU") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 177604);
function main(input) {
  const args = input.trim()["split"]("\n")["map"](_ => _["split"](" ").map(x => parseInt(x, 10)));
  const k = args[0][1];
  const arr = args.slice(1);
  let cnt = 0;
  let i = 0;
  while (cnt < k) {
    cnt += arr[i][1];
    i++;
  }
  console["log"](arr[i - 1][0]);
}
function __STRING_ARRAY__() {
  const _0x2c05bd = ["log", "4VaGkRy", "16xmsSrH", "/dev/stdin", "map", "615286NoVrfk", "utf8", "readFileSync", "1624638ZKIrYY", "2287628pMPBQT", "1691025AGXGVV", "29817TtOadI", "872760hssvwv", "split", "2632203arOUDU"];
  __STRING_ARRAY__ = function () {
    return _0x2c05bd;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
