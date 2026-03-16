'use strict';

function __DECODE_0__(nXCJgV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 165;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nXCJgV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("861173pKkcqS") / 1 + parseInt("1801250JcxMNr") / 2 + -parseInt("501288SOTorD") / 3 + -parseInt("16FAgFxT") / 4 * (-parseInt("563395RQZNMk") / 5) + -parseInt("3474732STMMuC") / 6 + parseInt("7IZQJML") / 7 * (-parseInt("2084872EjtrNa") / 8) + parseInt("9364383WWljsy") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 523828);
const main = input => {
  input = input["split"](" ")["map"](v => parseInt(v));
  const W = input[0];
  const a = input[1];
  const b = input[2];
  const aw = a + W;
  const bw = b + W;
  let arr = [];
  if (a <= b) {
    arr = [a, aw, b, bw];
  } else {
    arr = [b, bw, a, aw];
  }
  if (arr[1] < arr[2]) {
    console.log(arr[2] - arr[1]);
  } else {
    console["log"](0);
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
function __STRING_ARRAY__() {
  const _0x370aeb = ["563395RQZNMk", "9364383WWljsy", "/dev/stdin", "501288SOTorD", "3474732STMMuC", "16FAgFxT", "1801250JcxMNr", "log", "readFileSync", "map", "2084872EjtrNa", "utf-8", "861173pKkcqS", "split", "7IZQJML"];
  __STRING_ARRAY__ = function () {
    return _0x370aeb;
  };
  return __STRING_ARRAY__();
}
