(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("844948MWYUjN") / 1 + -parseInt("1939432HgLjGt") / 2 + -parseInt("33UViVoG") / 3 * (-parseInt("246268XmVNFV") / 4) + -parseInt("5748505QjdMbg") / 5 + -parseInt("9606nzanzM") / 6 * (parseInt("2303dhqipK") / 7) + parseInt("219280Ldmrqn") / 8 * (-parseInt("297GFpJBl") / 9) + parseInt("43252880hSHSRX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 606901);
function main(input) {
  function dist(a, b) {
    return Math["min"](b - a, Math["abs"](x - a) + Math["abs"](y - b) + 1);
  }
  const inp = input["split"](" ");
  const n = inp[0];
  const x = inp[1];
  const y = inp[2];
  for (var i = 1; i < n; i++) {
    var cnt = 0;
    for (var a = 1; a < n; a++) {
      for (var b = a + 1; b <= n; b++) {
        if (dist(a, b) == i) {
          cnt++;
        }
      }
    }
    console["log"](cnt);
  }
}
function __DECODE_0__(jkJcNb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 244;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jkJcNb, key);
}
function __STRING_ARRAY__() {
  const _0x113d25 = ["246268XmVNFV", "5748505QjdMbg", "43252880hSHSRX", "split", "9606nzanzM", "2303dhqipK", "readFileSync", "/dev/stdin", "219280Ldmrqn", "utf8", "297GFpJBl", "log", "1939432HgLjGt", "844948MWYUjN", "33UViVoG", "min", "abs"];
  __STRING_ARRAY__ = function () {
    return _0x113d25;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
