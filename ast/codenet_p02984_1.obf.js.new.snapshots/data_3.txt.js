'use strict';

function __STRING_ARRAY__() {
  const _0x433d60 = ["6xLQhfz", "37042iumPoR", "88891reDCan", "70UiWynn", "log", "map", "push", "1426475yJmUAV", "167316FPQSkd", "readFileSync", "/dev/stdin", "utf8", "618579YHzkbb", "6LtRoXa", "8mnOpFc", "trim", "join", "split", "143656GcAjDt", "2130611JBoXRH"];
  __STRING_ARRAY__ = function () {
    return _0x433d60;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("37042iumPoR") / 1 * (parseInt("6LtRoXa") / 2) + -parseInt("167316FPQSkd") / 3 + parseInt("143656GcAjDt") / 4 + parseInt("1426475yJmUAV") / 5 * (parseInt("6xLQhfz") / 6) + -parseInt("2130611JBoXRH") / 7 + parseInt("8mnOpFc") / 8 * (parseInt("618579YHzkbb") / 9) + -parseInt("70UiWynn") / 10 * (-parseInt("88891reDCan") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 197488);
function __DECODE_0__(evRnde, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 381;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(evRnde, key);
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = parseInt(arg[0]);
  const A = arg[1]["split"](" ")["map"](n => parseInt(n * 2));
  let offset = 0;
  for (let i = 0; i < N; i++) {
    offset = A[i] - offset;
  }
  let x = offset / 2;
  let cur = x;
  let answer = [];
  for (let i = 0; i < N; i++) {
    answer["push"](cur);
    cur = A[i] - cur;
  }
  console["log"](answer["join"](" "));
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
