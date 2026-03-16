'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("31186GDapxT") / 1 * (-parseInt("44uGNQOf") / 2) + parseInt("128604NJDXwR") / 3 * (parseInt("12LJZVBv") / 4) + -parseInt("42095odIuPg") / 5 * (-parseInt("234IZBihg") / 6) + -parseInt("42903MkcYUw") / 7 * (-parseInt("928WvePdH") / 8) + parseInt("132768ABcyrN") / 9 * (parseInt("430RAwlMk") / 10) + parseInt("5298689tfIOcL") / 11 + -parseInt("14810784CJhNfp") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 363620);
function __DECODE_0__(PdDOld, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 226;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PdDOld, key);
}
function Main(input) {
  const params = input["split"]("\n");
  const n = Number(params[0]);
  let max = 0;
  let min = Math["pow"](10, 10);
  params[1]["split"](" ")["forEach"](val => {
    max = Math.max(max, Number(val));
    min = Math["min"](min, Number(val));
  });
  console.log(max - min);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x203f6a = ["utf8", "31186GDapxT", "928WvePdH", "128604NJDXwR", "forEach", "min", "14810784CJhNfp", "42903MkcYUw", "5298689tfIOcL", "readFileSync", "44uGNQOf", "pow", "42095odIuPg", "430RAwlMk", "split", "132768ABcyrN", "234IZBihg", "12LJZVBv", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x203f6a;
  };
  return __STRING_ARRAY__();
}
