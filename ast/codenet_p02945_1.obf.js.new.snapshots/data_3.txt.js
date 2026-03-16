'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1AehXKs") / 1 * (-parseInt("555932HEiYXP") / 2) + parseInt("915852dpUWQM") / 3 * (parseInt("4oZCfNd") / 4) + parseInt("245510yFOoZa") / 5 * (parseInt("18YQPEGU") / 6) + parseInt("77BTgpev") / 7 * (-parseInt("139192kUbgYA") / 8) + -parseInt("1026099jLOCeH") / 9 + -parseInt("3683860BkRneZ") / 10 + parseInt("1409551lyNspi") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 184911);
function __DECODE_0__(dqedYc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 402;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dqedYc, key);
}
function __STRING_ARRAY__() {
  const _0x248eb3 = ["915852dpUWQM", "4oZCfNd", "log", "139192kUbgYA", "3683860BkRneZ", "1409551lyNspi", "555932HEiYXP", "245510yFOoZa", "readFileSync", "77BTgpev", "1026099jLOCeH", "18YQPEGU", "1AehXKs"];
  __STRING_ARRAY__ = function () {
    return _0x248eb3;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const args = input.split("\n").map(arg => arg.split(" "));
  const A = parseInt(args[0][0], 10);
  const B = parseInt(args[0][1], 10);
  console["log"](Math.max(A + B, A - B, A * B) + 0);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
