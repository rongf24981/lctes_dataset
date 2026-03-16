(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1cIjiyA") / 1 * (parseInt("154574anvUur") / 2) + parseInt("1517514SwPnEH") / 3 + -parseInt("1299048xDLjqa") / 4 + -parseInt("5prVDaw") / 5 * (parseInt("1862538BEcKUe") / 6) + parseInt("7TzSuNU") / 7 * (-parseInt("804144rGlklL") / 8) + parseInt("4367529gxgQLe") / 9 + parseInt("2388760aRtitY") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 417005);
function __DECODE_0__(NJeSfS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 369;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NJeSfS, key);
}
function __STRING_ARRAY__() {
  const _0x2af680 = ["154574anvUur", "floor", "readFileSync", "4367529gxgQLe", "1862538BEcKUe", "1517514SwPnEH", "804144rGlklL", "1cIjiyA", "map", "2388760aRtitY", "7TzSuNU", "ceil", "trim", "1299048xDLjqa", "split", "/dev/stdin", "5prVDaw"];
  __STRING_ARRAY__ = function () {
    return _0x2af680;
  };
  return __STRING_ARRAY__();
}
console.log((args => {
  const [[K], A] = args["trim"]()["split"]`\n`["map"](r => r.split` `["map"](v => v | 0));
  let min = 2;
  let max = 3;
  for (let i = K - 2; i >= 0; i--) {
    if (max + A[i + 1] - 1 < A[i]) {
      return "-1";
    }
    min = Math["ceil"](min / A[i]) * A[i];
    max = Math["floor"](max / A[i]) * A[i] + A[i] - 1;
  }
  return min + " " + max;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
