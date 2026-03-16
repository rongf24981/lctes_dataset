'use strict';

function __STRING_ARRAY__() {
  const _0x1d3e67 = ["map", "24YKQQSL", "42bsXsKf", "206710ktUQvy", "4013766bqhAjW", "1521562yrhEef", "1611OwWkrH", "split", "trim", "5622432XOSkgJ", "925722ZlvBtb", "876985goQFWN", "/dev/stdin", "137556vBnuGH", "log", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x1d3e67;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("925722ZlvBtb") / 1 + -parseInt("1521562yrhEef") / 2 + -parseInt("4013766bqhAjW") / 3 + -parseInt("24YKQQSL") / 4 * (-parseInt("876985goQFWN") / 5) + -parseInt("137556vBnuGH") / 6 * (parseInt("42bsXsKf") / 7) + -parseInt("5622432XOSkgJ") / 8 + parseInt("1611OwWkrH") / 9 * (parseInt("206710ktUQvy") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 887706);
function Main(input) {
  input = input["trim"]()["split"](" ")["map"](Number);
  let badKusuri = input[0];
  let goodKusuri = input[1];
  let goodPoison = input[2];
  while (goodKusuri > 0 && goodPoison > 0) {
    goodKusuri--;
    goodPoison--;
  }
  if (goodPoison == 0) {
    goodKusuri = 0;
  } else {
    while (badKusuri > 0 && goodPoison > 0) {
      badKusuri--;
      goodPoison--;
    }
  }
  if (goodPoison > 0) {
    goodPoison--;
  }
  console["log"](input[1] + input[2] - (goodKusuri + goodPoison));
}
function __DECODE_0__(slwJhb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(slwJhb, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
