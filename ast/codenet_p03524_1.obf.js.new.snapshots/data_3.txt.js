function __STRING_ARRAY__() {
  const _0x9d620c = ["min", "reduce", "split", "1259748rJJUlm", "3416038WCpXAF", "5735124Azubrm", "readFileSync", "log", "max", "464814IKBeOF", "1737768BCLoWh", "/dev/stdin", "85442fkunqb", "5haAzaV", "2293120mOpSpX", "1bMpJFL", "trim", "608mizYsG"];
  __STRING_ARRAY__ = function () {
    return _0x9d620c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bxYDrt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 169;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bxYDrt, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1bMpJFL") / 1 * (parseInt("3416038WCpXAF") / 2) + parseInt("1259748rJJUlm") / 3 + parseInt("1737768BCLoWh") / 4 + parseInt("5haAzaV") / 5 * (-parseInt("464814IKBeOF") / 6) + -parseInt("85442fkunqb") / 7 * (-parseInt("608mizYsG") / 8) + parseInt("5735124Azubrm") / 9 + parseInt("2293120mOpSpX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 863074);
function main(input) {
  const s = input["trim"]();
  let array = s["split"]("")["reduce"]((a, c) => {
    a[c.charCodeAt() - "a".charCodeAt()]++;
    return a;
  }, [0, 0, 0]);
  if (Math["max"](...array) - Math["min"](...array) >= 2) {
    console["log"]("NO");
  } else {
    console["log"]("YES");
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
