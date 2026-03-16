function __DECODE_0__(KLOoQw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 363;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KLOoQw, key);
}
function __STRING_ARRAY__() {
  const _0x51945e = ["1379UbSlrJ", "3359065xUMjBW", "1492312QtBqKh", "set", "10HCLadQ", "log", "3642930wjJMHe", "split", "63585401ZxYMQn", "130624qkxlnB", "1579741oBgUBP", "/dev/stdin", "utf8", "4BpSPMU", "push", "198wUDEzE", "12012UOIkxD"];
  __STRING_ARRAY__ = function () {
    return _0x51945e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1579741oBgUBP") / 1 + -parseInt("1492312QtBqKh") / 2 + -parseInt("3642930wjJMHe") / 3 + parseInt("4BpSPMU") / 4 * (-parseInt("3359065xUMjBW") / 5) + -parseInt("12012UOIkxD") / 6 * (parseInt("1379UbSlrJ") / 7) + parseInt("130624qkxlnB") / 8 * (-parseInt("198wUDEzE") / 9) + -parseInt("10HCLadQ") / 10 * (-parseInt("63585401ZxYMQn") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 814861);
console["log"]((args => {
  let [N, M] = args.trim()["split"]` `.map(v => v | 0);
  const MOD = 1000000007;
  const d = new Map();
  for (let i = 2; i <= M; i++) {
    if (M % i) {
      continue;
    }
    let k = 0;
    do {
      k++;
      M /= i;
    } while (M % i === 0);
    d["set"](i, k);
  }
  const mul = (a, b) => ((a >> 16) * b % MOD * 65536 + (a & 65535) * b) % MOD;
  const {
    fac: fac,
    finv: finv
  } = (max => {
    const fac = [1, 1];
    const inv = [0, 1];
    const finv = [1, 1];
    for (let i = 2; i < max; i++) {
      fac["push"](mul(fac[i - 1], i));
      inv["push"](MOD - mul(inv[MOD % i], MOD / i | 0));
      finv["push"](mul(finv[i - 1], inv[i]));
    }
    return {
      fac: fac,
      finv: finv
    };
  })(N + N);
  const nCr = (n, r) => mul(fac[n], mul(finv[r], finv[n - r]));
  let c = 1;
  for (const [, i] of d) {
    c = mul(c, nCr(i + N - 1, N - 1));
  }
  return "" + c;
})(require("fs").readFileSync("/dev/stdin", "utf8")));
