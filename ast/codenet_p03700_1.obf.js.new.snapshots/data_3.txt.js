(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("57586WTsNiR") / 1 + parseInt("334244FyozEZ") / 2 + -parseInt("3nNqJKW") / 3 * (parseInt("455788TaJYot") / 4) + -parseInt("7400dYaAEF") / 5 * (-parseInt("978FqlWtG") / 6) + parseInt("14IiWchs") / 7 * (parseInt("1409568atyUZn") / 8) + -parseInt("2748285jJRyxj") / 9 + parseInt("729580MYEaoA") / 10 * (-parseInt("33cLnKuB") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 180154);
function __DECODE_0__(euTFdx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 116;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(euTFdx, key);
}
console.log((args => {
  const [[N, A, B], ...h] = args.trim()["split"]`\n`["map"](r => r.split` `["map"](v => v | 0));
  let ok = Math["ceil"](1000000000 / B);
  let ng = 0;
  bisect: while (ok > ng + 1) {
    let m = ok + ng >> 1;
    let k = m;
    for (let i = 0; i < N; i++) {
      let r = h[i] - m * B;
      if (r <= 0) {
        continue;
      }
      k -= Math["ceil"](r / (A - B));
    }
    if (k >= 0) {
      ok = m;
    } else {
      ng = m;
    }
  }
  return "" + ok;
})(require("fs").readFileSync("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x462788 = ["3nNqJKW", "7400dYaAEF", "/dev/stdin", "729580MYEaoA", "utf8", "14IiWchs", "2748285jJRyxj", "33cLnKuB", "57586WTsNiR", "map", "split", "978FqlWtG", "334244FyozEZ", "455788TaJYot", "1409568atyUZn", "ceil"];
  __STRING_ARRAY__ = function () {
    return _0x462788;
  };
  return __STRING_ARRAY__();
}
