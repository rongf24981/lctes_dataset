'use strict';

function __DECODE_0__(PyEUok, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PyEUok, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("489997QodEaO") / 1 * (parseInt("2cbjBWQ") / 2) + -parseInt("266523dzUWgI") / 3 + parseInt("4GUbwJG") / 4 * (parseInt("941670WMLnmW") / 5) + parseInt("807336GWkgYa") / 6 + -parseInt("2752358iuTdPe") / 7 + -parseInt("1029720kjetHN") / 8 * (parseInt("18uQTBVx") / 9) + parseInt("1855990WdUopX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 259021);
function __STRING_ARRAY__() {
  const _0x512667 = ["266523dzUWgI", "2cbjBWQ", "941670WMLnmW", "4GUbwJG", "489997QodEaO", "1029720kjetHN", "trim", "807336GWkgYa", "2752358iuTdPe", "18uQTBVx", "length", "1855990WdUopX", "sqrt", "indexOf", "shift", "log", "push", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x512667;
  };
  return __STRING_ARRAY__();
}
function arrayOfDivisors(n) {
  const divisor = new Array();
  divisor[0] = 1;
  for (let i = 2; i <= Math["sqrt"](n); i++) {
    if (n % i === 0) {
      divisor["push"](i);
    }
  }
  const p = divisor["length"];
  if (Math["sqrt"](n) !== divisor[p - 1]) {
    divisor.push(n / divisor[p - 1]);
  }
  for (let i = p - 2; i >= 0; i--) {
    divisor["push"](n / divisor[i]);
  }
  return divisor;
}
(function main(input) {
  const n = Number(input["trim"]());
  const subOnly = arrayOfDivisors(n - 1)["length"] - 1;
  let divIncluded = 0;
  const divOfN = arrayOfDivisors(n);
  divOfN["shift"]();
  for (let d of divOfN) {
    let n1 = n;
    do {
      n1 /= d;
    } while (n1 % d === 0);
    if (n1 === 1) {
      divIncluded++;
    } else if (arrayOfDivisors(n1 - 1)["indexOf"](d) > -1) {
      divIncluded++;
    }
  }
  console["log"](subOnly + divIncluded);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
