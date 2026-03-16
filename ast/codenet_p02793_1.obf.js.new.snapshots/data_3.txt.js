(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("387733IUmEBz") / 1 + -parseInt("91534IsAbXR") / 2 * (parseInt("3dzEtWX") / 3) + parseInt("93016tgFWuf") / 4 + -parseInt("2463945rPttDY") / 5 + -parseInt("185796qHWEgV") / 6 + -parseInt("3438904mGzMbR") / 7 * (parseInt("8uhfxPS") / 8) + parseInt("8419347AMnYzR") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 285676);
console["log"]((args => {
  const [[N], A] = args.trim().split`\n`["map"](r => r["split"]` `["map"](v => v | 0));
  const MOD = 1000000007;
  const MAX = Math["max"](...A);
  const mul = (a, b) => ((a >> 16) * b % MOD * 65536 + (a & 65535) * b) % MOD;
  const isP = Array(1000001)["fill"](true);
  const px = new Map();
  for (let p = 2; p <= MAX; p++) {
    if (!isP[p]) {
      continue;
    }
    for (let i = p + p; i <= MAX; i = i + p) {
      isP[i] = false;
    }
    px["set"](p, 0);
  }
  const ap = [];
  for (let i = 0; i < N; i++) {
    let a = A[i];
    ap["push"](new Map());
    for (const [p, x] of px) {
      if (a === 1) {
        break;
      }
      let s = 0;
      while (a % p === 0) {
        a /= p;
        s++;
      }
      if (s) {
        ap[i].set(p, s);
      }
      if (s > x) {
        px["set"](p, s);
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < N; i++) {
    let B = 1;
    for (const [p, q] of px) {
      if (!q) {
        continue;
      }
      B = mul(B, p ** (q - (ap[i]["get"](p) | 0)));
    }
    sum = (sum + B) % MOD;
  }
  return sum;
})(require("fs").readFileSync("/dev/stdin", "utf8")));
function __DECODE_0__(UhlTbU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 319;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UhlTbU, key);
}
function __STRING_ARRAY__() {
  const _0x43e85b = ["2463945rPttDY", "log", "3438904mGzMbR", "387733IUmEBz", "93016tgFWuf", "3dzEtWX", "get", "8uhfxPS", "/dev/stdin", "fill", "split", "91534IsAbXR", "8419347AMnYzR", "utf8", "set", "map", "max", "push", "185796qHWEgV"];
  __STRING_ARRAY__ = function () {
    return _0x43e85b;
  };
  return __STRING_ARRAY__();
}
