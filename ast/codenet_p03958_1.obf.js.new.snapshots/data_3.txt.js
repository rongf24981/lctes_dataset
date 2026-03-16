'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("135399zmwdZJ") / 1 + parseInt("299776tFTiCU") / 2 + -parseInt("173595lVkTbP") / 3 + parseInt("556616gZbOUg") / 4 + parseInt("1005705kpdchL") / 5 + parseInt("1106994gzqmzg") / 6 * (-parseInt("7rRLwln") / 7) + -parseInt("37936KXUWvd") / 8 * (parseInt("522NSsCOC") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 108182);
function __DECODE_0__(CsCulc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 446;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CsCulc, key);
}
function __STRING_ARRAY__() {
  const _0x13e14d = ["37936KXUWvd", "556616gZbOUg", "map", "reduce", "173595lVkTbP", "trim", "135399zmwdZJ", "1005705kpdchL", "split", "/dev/stdin", "522NSsCOC", "7rRLwln", "1106994gzqmzg", "299776tFTiCU", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x13e14d;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  input = input["trim"]()["split"]("\n");
  const K = parseInt(input[0]["split"](" ")[0]);
  const T = parseInt(input[0].split(" ")[1]);
  let a = input[1].split(" ")["map"](el => {
    return parseInt(el);
  });
  let max = a["reduce"](function (previous, current) {
    if (previous > current) {
      return previous;
    } else {
      return current;
    }
  });
  if (max - 1 - (K - max) > 0) {
    console.log(max - 1 - (K - max));
  } else {
    console.log(0);
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
