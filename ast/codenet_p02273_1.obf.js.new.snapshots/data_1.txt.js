function __STRING_ARRAY__() {
  const _0x3eb3e7 = ['2204510LnEnSN', '8FXXuZu', 'utf8', 'readFileSync', '1098757FMzsQc', '1736815TVvHdv', '714426VNelzQ', '12yxLGMK', 'cos', '6delLJa', '/dev/stdin', '20awAsCA', '2239752tbaRfU', 'trim', 'toFixed', '9391311WURqSe', '1453084KqznsD', 'print'];
  __STRING_ARRAY__ = function () {
    return _0x3eb3e7;
  };
  return __STRING_ARRAY__();
}
const a0_0x538622 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x302365 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x302365(0x19f)) / 0x1 + parseInt(_0x302365(0x1a8)) / 0x2 * (-parseInt(_0x302365(0x1a7)) / 0x3) + -parseInt(_0x302365(0x19b)) / 0x4 + -parseInt(_0x302365(0x1a6)) / 0x5 * (-parseInt(_0x302365(0x1aa)) / 0x6) + -parseInt(_0x302365(0x1a1)) / 0x7 + -parseInt(_0x302365(0x1a2)) / 0x8 * (-parseInt(_0x302365(0x19e)) / 0x9) + parseInt(_0x302365(0x19a)) / 0xa * (parseInt(_0x302365(0x1a5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb4a8c);
function __DECODE_0__(nTQmcp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x199;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nTQmcp, key);
}
class Point {
  constructor(x, y) {
    this['x'] = x;
    this['y'] = y;
  }
  [a0_0x538622(0x1a0)]() {
    const _0xca2710 = a0_0x538622;
    console['log'](this['x'][_0xca2710(0x19d)](0x8) + '\x20' + this['y'][_0xca2710(0x19d)](0x8));
  }
}
(function main() {
  const _0x2be015 = a0_0x538622;
  const n = Number(require('fs')[_0x2be015(0x1a4)](_0x2be015(0x199), _0x2be015(0x1a3))[_0x2be015(0x19c)]());
  let p1 = new Point(0x0, 0x0);
  let p2 = new Point(0x64, 0x0);
  p1['print']();
  kock(n, p1, p2);
  p2['print']();
})();
function kock(n, p1, p2) {
  const _0x2429f6 = a0_0x538622;
  const sin60 = Math['sin'](0x3c * Math['PI'] / 0xb4);
  const cos60 = Math[_0x2429f6(0x1a9)](0x3c * Math['PI'] / 0xb4);
  function innerFunc(n, p1, p2) {
    const _0xa64208 = _0x2429f6;
    if (!n) {
      return;
    }
    xDiff = p2['x'] - p1['x'];
    yDiff = p2['y'] - p1['y'];
    let s = new Point(p1['x'] + xDiff / 0x3, p1['y'] + yDiff / 0x3);
    let t = new Point(s['x'] + xDiff / 0x3, s['y'] + yDiff / 0x3);
    let u = new Point((t['x'] - s['x']) * cos60 - (t['y'] - s['y']) * sin60 + s['x'], (t['x'] - s['x']) * sin60 + (t['y'] - s['y']) * cos60 + s['y']);
    kock(n - 0x1, p1, s);
    s[_0xa64208(0x1a0)]();
    kock(n - 0x1, s, u);
    u[_0xa64208(0x1a0)]();
    kock(n - 0x1, u, t);
    t[_0xa64208(0x1a0)]();
    kock(n - 0x1, t, p2);
  }
  kock = innerFunc;
  innerFunc(n, p1, p2);
}
