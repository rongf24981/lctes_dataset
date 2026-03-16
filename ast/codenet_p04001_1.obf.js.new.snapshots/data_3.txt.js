(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1861880GftSPl") / 1 + parseInt("2583660Eiyrbi") / 2 + -parseInt("5122788XWqMGF") / 3 + -parseInt("99408NWXrFy") / 4 * (parseInt("15fSUlsO") / 5) + parseInt("474AmHQhK") / 6 * (-parseInt("146951BgWRfk") / 7) + parseInt("227832MlCmWX") / 8 * (-parseInt("495CvRpAH") / 9) + parseInt("65127640iQnJNl") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 935770);
function __DECODE_0__(UQDGwg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 158;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UQDGwg, key);
}
function __STRING_ARRAY__() {
  const _0x27c9d8 = ["length", "495CvRpAH", "log", "146951BgWRfk", "99408NWXrFy", "15fSUlsO", "1861880GftSPl", "227832MlCmWX", "/dev/stdin", "5122788XWqMGF", "65127640iQnJNl", "readFileSync", "2583660Eiyrbi", "474AmHQhK"];
  __STRING_ARRAY__ = function () {
    return _0x27c9d8;
  };
  return __STRING_ARRAY__();
}
console["log"]((args => {
  const S = args.trim();
  const L = S["length"];
  let total = 0;
  for (let bit = 0; bit < 1 << L - 1; bit++) {
    let st = S[0] | 0;
    let t = 0;
    for (let i = 0; i < L - 1; i++) {
      if (1 << i & bit) {
        t += st;
        st = S[i + 1] | 0;
      } else {
        st = st * 10 + (S[i + 1] | 0);
      }
    }
    total += t + st;
  }
  return total.toString();
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
