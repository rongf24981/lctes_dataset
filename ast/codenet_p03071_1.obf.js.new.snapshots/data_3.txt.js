'use strict';

function __STRING_ARRAY__() {
  const _0x352416 = ["220Oxltgd", "26DSqTLB", "1856239DztTsd", "log", "6ScTdEm", "9204kwQdFB", "889470fUlvqb", "11IYJRjM", "27nwEzib", "/dev/stdin", "678234pGYERK", "split", "map", "readFileSync", "6395772RDgKSz", "285752cTcPmZ", "12026BxjQFU"];
  __STRING_ARRAY__ = function () {
    return _0x352416;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(iQlVeL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iQlVeL, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("26DSqTLB") / 1 * (parseInt("12026BxjQFU") / 2) + parseInt("678234pGYERK") / 3 + parseInt("9204kwQdFB") / 4 * (parseInt("220Oxltgd") / 5) + -parseInt("6ScTdEm") / 6 * (parseInt("1856239DztTsd") / 7) + -parseInt("285752cTcPmZ") / 8 + parseInt("27nwEzib") / 9 * (-parseInt("889470fUlvqb") / 10) + -parseInt("11IYJRjM") / 11 * (-parseInt("6395772RDgKSz") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 136228);
function Main(input) {
  input = input["split"]("\n")[0];
  const numbers = input["split"](" ")["map"](i => {
    return parseInt(i, 10);
  });
  const a = numbers[0];
  const b = numbers[1];
  let result = 0;
  if (a > b) {
    result = a * 2 - 1;
  } else if (b > a) {
    result = b * 2 - 1;
  } else {
    result = a * 2;
  }
  console["log"](result);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
