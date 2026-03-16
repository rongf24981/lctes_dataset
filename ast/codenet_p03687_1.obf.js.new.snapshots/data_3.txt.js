function __STRING_ARRAY__() {
  const _0x40e97c = ["785601QGDBhF", "116750SljvgL", "8iWqNSd", "min", "map", "trim", "52118GjCRVd", "split", "2761630dBnJZU", "1203705HcXMkQ", "1168kqCCWW", "filter", "log", "891iSiiJC", "readFileSync", "/dev/stdin", "5634fSJiXC", "238VnnCUG"];
  __STRING_ARRAY__ = function () {
    return _0x40e97c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("116750SljvgL") / 1 + parseInt("52118GjCRVd") / 2 + -parseInt("891iSiiJC") / 3 * (-parseInt("1168kqCCWW") / 4) + -parseInt("1203705HcXMkQ") / 5 + -parseInt("5634fSJiXC") / 6 * (-parseInt("238VnnCUG") / 7) + -parseInt("8iWqNSd") / 8 * (-parseInt("785601QGDBhF") / 9) + parseInt("2761630dBnJZU") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 150670);
function __DECODE_0__(PpzibI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 163;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PpzibI, key);
}
console["log"]((args => {
  const S = args["trim"]()["split"]``["map"](c => c.charCodeAt() - 97);
  const N = S.length;
  const a = Array(26).fill(-1);
  for (let i = 0; i < 26; i++) {
    let d = 0;
    for (let j = 0; j < N; j++) {
      d = S[j] === i ? 0 : d + 1;
      if (a[i] < d) {
        a[i] = d;
      }
    }
  }
  return Math["min"](...a["filter"](v => v >= 0));
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
