'use strict';

function __DECODE_0__(vYfPEu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 258;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vYfPEu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1144416QJseLi") / 1 + parseInt("433526vkigiz") / 2 + parseInt("225048EWptis") / 3 + -parseInt("3760456nyGxSd") / 4 + parseInt("6179800uKqpfJ") / 5 + parseInt("438dBnpob") / 6 * (parseInt("110621MPwqHT") / 7) + -parseInt("372920WnqnhO") / 8 * (-parseInt("18tYjstM") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 690058);
function __STRING_ARRAY__() {
  const _0x3ad3b2 = ["433526vkigiz", "3760456nyGxSd", "6179800uKqpfJ", "readFileSync", "1144416QJseLi", "18tYjstM", "110621MPwqHT", "utf8", "438dBnpob", "225048EWptis", "log", "trim", "split", "/dev/stdin", "372920WnqnhO"];
  __STRING_ARRAY__ = function () {
    return _0x3ad3b2;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0].split(" ")[0]);
  const A = arg[1]["split"]("");
  const Rsum = A.filter(n => n === "E").length;
  const Lsum = N - Rsum;
  let Rcnt = 0;
  let Lcnt = 0;
  let answer = Infinity;
  for (let i = 0; i < N; i++) {
    const needMoveLeft = Lcnt;
    let needMoveRight = Rsum - Rcnt;
    if (A[i] === "E") {
      needMoveRight--;
    }
    answer = Math.min(answer, needMoveLeft + needMoveRight);
    if (A[i] === "W") {
      Lcnt++;
    } else {
      Rcnt++;
    }
  }
  console["log"](answer);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
