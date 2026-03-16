function __DECODE_0__(ElpHVR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 368;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ElpHVR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1DwiLIT") / 1 * (-parseInt("713026rHFFEy") / 2) + -parseInt("970431Hzhhvl") / 3 + parseInt("222048NcCyCU") / 4 + -parseInt("2895NJXOcA") / 5 * (parseInt("138KhOJKC") / 6) + parseInt("21aESMtl") / 7 * (parseInt("382968DFLhXr") / 8) + parseInt("1053bPtyPZ") / 9 * (parseInt("22490lOeCci") / 10) + parseInt("4507855yMsjbM") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 178756);
function Main(s) {
  s = s["split"]("\n")["map"](a => parseInt(a));
  const n = s[0];
  s = s[1];
  const sn = Math.ceil(Math.sqrt(n));
  if (s === n) {
    console["log"](n + 1);
    return;
  }
  for (var b = 2; b < sn; b++) {
    if (s === f(b, n)) {
      console.log(b);
      return;
    }
  }
  var p = Math.floor((n - s) / (sn - 1));
  for (; p > 0; p--) {
    b = Math["floor"]((n - s) / p + 1);
    if (s === f(b, n)) {
      console["log"](b);
      return;
    }
  }
  console["log"](-1);
}
function __STRING_ARRAY__() {
  const _0x3fb169 = ["floor", "4507855yMsjbM", "2895NJXOcA", "log", "22490lOeCci", "970431Hzhhvl", "/dev/stdin", "382968DFLhXr", "map", "138KhOJKC", "222048NcCyCU", "1DwiLIT", "1053bPtyPZ", "readFileSync", "split", "21aESMtl", "713026rHFFEy"];
  __STRING_ARRAY__ = function () {
    return _0x3fb169;
  };
  return __STRING_ARRAY__();
}
function f(b, n) {
  if (n < b) {
    return n;
  }
  return f(b, Math["floor"](n / b)) + n % b;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8").trim());
