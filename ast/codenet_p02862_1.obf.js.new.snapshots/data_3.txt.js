'use strict';

function __STRING_ARRAY__() {
  const _0x2e468f = ["961624TFHSMn", "1661828HmNnAi", "135PUAXfw", "677010yEPtWJ", "6822aOlaYp", "trim", "109859girztB", "2AAqGRM", "104cTGgWE", "log", "utf8", "split", "max", "778971JvrryT", "148059YiJSpe", "min", "floor"];
  __STRING_ARRAY__ = function () {
    return _0x2e468f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("109859girztB") / 1 * (parseInt("2AAqGRM") / 2) + -parseInt("778971JvrryT") / 3 + parseInt("961624TFHSMn") / 4 + parseInt("135PUAXfw") / 5 * (parseInt("6822aOlaYp") / 6) + -parseInt("1661828HmNnAi") / 7 + -parseInt("104cTGgWE") / 8 * (-parseInt("148059YiJSpe") / 9) + parseInt("677010yEPtWJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 165467);
const ncr = (n, r, mod) => {
  mod = mod || 1000000007;
  const a = Math["max"](n, r);
  const b = Math.min(n, r);
  const p = Math["min"](b, a - b);
  const nu = new Array(p + 1);
  const de = new Array(p + 1);
  let dest = 1;
  if (p > 0) {
    for (let i = 1; i <= p; i++) {
      nu[i] = a - p + i;
      de[i] = i;
    }
    for (let k = 2; k <= p; k++) {
      const piv = de[k];
      const j = piv > 1 ? -((a - p) % k) : 0;
      for (let i = k; i <= p; i += k) {
        nu[i + j] /= piv;
        de[i] /= piv;
      }
    }
    for (let i = 1; i <= p; i++) {
      if (nu[i] > 1) {
        dest = dest * nu[i] % mod;
      }
    }
  }
  return dest;
};
function __DECODE_0__(PBclVm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 406;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PBclVm, key);
}
function main(inp) {
  inp = inp["trim"]()["split"](" ");
  const x = Number(inp[0]);
  const y = Number(inp[1]);
  let sum = 0;
  for (let i = Math["floor"](x / 2); i >= 0; i--) {
    const a = x - i * 2;
    if (a * 2 + i === y) {
      sum = ncr(i + a, i);
    }
  }
  console["log"](sum);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
