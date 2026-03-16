function __DECODE_0__(CzPFyj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CzPFyj, key);
}
function __STRING_ARRAY__() {
  const _0x5f536c = ["length", "7904322RQWGab", "readFileSync", "10003iNFmoF", "101330RBcFqr", "log", "222hPkPSS", "/dev/stdin", "4283792PoZzbc", "848692OjzzCm", "1088520wMRfJY", "1405erGeDt", "4364GaLhEI"];
  __STRING_ARRAY__ = function () {
    return _0x5f536c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("101330RBcFqr") / 1 + parseInt("848692OjzzCm") / 2 + parseInt("1088520wMRfJY") / 3 + parseInt("4364GaLhEI") / 4 * (-parseInt("1405erGeDt") / 5) + -parseInt("222hPkPSS") / 6 * (-parseInt("10003iNFmoF") / 7) + parseInt("4283792PoZzbc") / 8 + -parseInt("7904322RQWGab") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 292034);
console["log"]((args => {
  const [s, t] = args.trim().split`\n`;
  const sl = s["length"];
  const tl = t["length"];
  let i = -1;
  let cyc = 0;
  T: for (let j = 0; j < tl; j++) {
    for (let k = i + 1; k < sl; k++) {
      if (s[k] === t[j]) {
        i = k;
        continue T;
      }
    }
    if (i === -1) {
      return "-1";
    }
    cyc++;
    i = -1;
    j--;
  }
  return "" + (cyc * sl + i + 1);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
