'use strict';

function __STRING_ARRAY__() {
  const _0x2e468f = ['961624TFHSMn', '1661828HmNnAi', '135PUAXfw', '677010yEPtWJ', '6822aOlaYp', 'trim', '109859girztB', '2AAqGRM', '104cTGgWE', 'log', 'utf8', 'split', 'max', '778971JvrryT', '148059YiJSpe', 'min', 'floor'];
  __STRING_ARRAY__ = function () {
    return _0x2e468f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a1)) / 0x1 * (parseInt(__DECODE_0__(0x1a2)) / 0x2) + -parseInt(__DECODE_0__(0x197)) / 0x3 + parseInt(__DECODE_0__(0x19b)) / 0x4 + parseInt(__DECODE_0__(0x19d)) / 0x5 * (parseInt(__DECODE_0__(0x19f)) / 0x6) + -parseInt(__DECODE_0__(0x19c)) / 0x7 + -parseInt(__DECODE_0__(0x1a3)) / 0x8 * (-parseInt(__DECODE_0__(0x198)) / 0x9) + parseInt(__DECODE_0__(0x19e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2865b);
const ncr = (n, r, mod) => {
  mod = mod || 0x3b9aca00 + 0x7;
  const a = Math[__DECODE_0__(0x196)](n, r);
  const b = Math['min'](n, r);
  const p = Math[__DECODE_0__(0x199)](b, a - b);
  const nu = new Array(p + 0x1);
  const de = new Array(p + 0x1);
  let dest = 0x1;
  if (p > 0x0) {
    for (let i = 0x1; i <= p; i++) {
      nu[i] = a - p + i;
      de[i] = i;
    }
    for (let k = 0x2; k <= p; k++) {
      const piv = de[k];
      const j = piv > 0x1 ? -((a - p) % k) : 0x0;
      for (let i = k; i <= p; i += k) {
        nu[i + j] /= piv;
        de[i] /= piv;
      }
    }
    for (let i = 0x1; i <= p; i++) {
      if (nu[i] > 0x1) {
        dest = dest * nu[i] % mod;
      }
    }
  }
  return dest;
};
function __DECODE_0__(PBclVm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x196;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PBclVm, key);
}
function main(inp) {
  inp = inp[__DECODE_0__(0x1a0)]()[__DECODE_0__(0x1a6)]('\x20');
  const x = Number(inp[0x0]);
  const y = Number(inp[0x1]);
  let sum = 0x0;
  for (let i = Math[__DECODE_0__(0x19a)](x / 0x2); i >= 0x0; i--) {
    const a = x - i * 0x2;
    if (a * 0x2 + i === y) {
      sum = ncr(i + a, i);
    }
  }
  console[__DECODE_0__(0x1a4)](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1a5)));
