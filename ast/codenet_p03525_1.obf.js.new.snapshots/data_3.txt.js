function __STRING_ARRAY__() {
  const _0x29dfbf = ["readFileSync", "44YUDcTg", "1136814ZdZMHP", "63HFiAYk", "2651795UIdhlK", "reduce", "442116lTHWrc", "7985432kXKEqY", "split", "208263ybWwZq", "map", "fill", "213383EzMZnG", "42QbEPcS", "min", "utf8", "/dev/stdin", "3886730anyOHl"];
  __STRING_ARRAY__ = function () {
    return _0x29dfbf;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(pCzChG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 460;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pCzChG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("213383EzMZnG") / 1 + parseInt("442116lTHWrc") / 2 + parseInt("208263ybWwZq") / 3 * (parseInt("44YUDcTg") / 4) + -parseInt("2651795UIdhlK") / 5 + parseInt("1136814ZdZMHP") / 6 * (-parseInt("42QbEPcS") / 7) + -parseInt("7985432kXKEqY") / 8 + parseInt("63HFiAYk") / 9 * (parseInt("3886730anyOHl") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 826665);
console.log((args => {
  const [[N], D] = args.trim()["split"]("\n")["map"](r => r["split"](" ")["map"](v => v | 0));
  if (N === 1) {
    return "" + D[0];
  }
  const q = Array(13)["fill"](0);
  let _s = 12;
  let s = 1;
  for (let i = 0; i < N; i++) {
    if (++q[D[i]] > 2) {
      return "0";
    }
    if (D[i] < _s) {
      _s = D[i];
    }
    if (q[D[i]] === 2) {
      _s = Math.min(_s, 24 - D[i] * 2);
    }
  }
  if (q[12] > 1 || q[0] > 0) {
    return "0";
  }
  const mask = q["reduce"]((a, b, i) => a | (b === 1 ? 0 : 1 << i), 1);
  for (let m = 0; m < 8192; m = m + 1 | mask) {
    let min = _s;
    for (let a = 1; a <= 12; a++) {
      if (!q[a]) {
        continue;
      }
      for (let b = a + 1; b <= 12; b++) {
        if (!q[b]) {
          continue;
        }
        let t = b - a;
        if (q[a] === 1 && q[b] === 1) {
          t = m >> a & 1 ^ m >> b & 1 ? 24 - a - b : t;
        }
        min = Math["min"](min, t);
      }
    }
    if (s < min) {
      s = min;
    }
  }
  return "" + s;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
