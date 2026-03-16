'use strict';

function __STRING_ARRAY__() {
  const _0x2af84b = ["utf8", "split", "2420472DNJnfv", "3249967OcjYkE", "8PQLkse", "log", "872136eCLGWb", "18843QIoktE", "180xlANTS", "79YVdaUe", "925580RzpFNm", "21442qdEQeb", "24DEHBTU", "845009hLadpG"];
  __STRING_ARRAY__ = function () {
    return _0x2af84b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("79YVdaUe") / 1 * (-parseInt("21442qdEQeb") / 2) + parseInt("18843QIoktE") / 3 + -parseInt("2420472DNJnfv") / 4 + -parseInt("925580RzpFNm") / 5 * (parseInt("24DEHBTU") / 6) + parseInt("3249967OcjYkE") / 7 * (-parseInt("8PQLkse") / 8) + parseInt("872136eCLGWb") / 9 + parseInt("180xlANTS") / 10 * (parseInt("845009hLadpG") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 523023);
function Main(inputs) {
  const input = inputs["split"]("\n");
  const a = Number(input[0]["split"](" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const k = Number(input[0]["split"](" ")[2]);
  console["log"](a > k ? a - k : 0, a + b > k ? a + b - k : 0);
}
function __DECODE_0__(ufIjfZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 129;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ufIjfZ, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
