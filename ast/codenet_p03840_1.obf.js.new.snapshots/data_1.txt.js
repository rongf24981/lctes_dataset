'use strict';

function __STRING_ARRAY__() {
  var _0x1adec5 = ['length', '1146vdjFlN', 'utf8', '4826874vfQXiz', ']).fill().map(x=>{return\x20', '1850265oERWKr', 'split', 'log', '6293691XOXMsx', 'Array(a[', 'readFileSync', 'push', 'slice', ']).fill().map(x=>', '1321qAEiLs', '3915100ULGqMf', '46905tQZDhd', 'map', '6955000RRREIp', '32TkuhpG', ';})', '10yYgLhH'];
  __STRING_ARRAY__ = function () {
    return _0x1adec5;
  };
  return __STRING_ARRAY__();
}
var a0_0x224a2b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xe0165d = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xe0165d(0x9a)) / 0x1 * (-parseInt(_0xe0165d(0xa3)) / 0x2) + parseInt(_0xe0165d(0x9c)) / 0x3 * (parseInt(_0xe0165d(0x9f)) / 0x4) + -parseInt(_0xe0165d(0xa7)) / 0x5 + parseInt(_0xe0165d(0xa5)) / 0x6 + -parseInt(_0xe0165d(0x9b)) / 0x7 + parseInt(_0xe0165d(0x9e)) / 0x8 + -parseInt(_0xe0165d(0xaa)) / 0x9 * (-parseInt(_0xe0165d(0xa1)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc63ab);
var input = require('fs')[a0_0x224a2b(0xac)]('/dev/stdin', a0_0x224a2b(0xa4));
var cin = input[a0_0x224a2b(0xa8)](/ |\n/);
var cid = 0x0;
function __DECODE_0__(RLIRPI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x99;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RLIRPI, key);
}
function next(a) {
  return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
  var _0x32018d = a0_0x224a2b;
  return a ? cin[_0x32018d(0xae)](cid, cid += n) : cin[_0x32018d(0xae)](cid, cid += n)[_0x32018d(0x9d)](a => +a);
}
function nextm(h, w, a) {
  var _0x12c551 = a0_0x224a2b;
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[_0x12c551(0xad)](cin[_0x12c551(0xae)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[_0x12c551(0xad)](cin['slice'](cid, cid += w)[_0x12c551(0x9d)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var _0x4827a5 = a0_0x224a2b;
  var a = arguments;
  var l = a[_0x4827a5(0xa2)];
  var r = _0x4827a5(0xab) + --l + _0x4827a5(0xa6) + v + _0x4827a5(0xa0);
  while (--l) {
    r = _0x4827a5(0xab) + l + _0x4827a5(0x99) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console[a0_0x224a2b(0xa9)](myOut);
}
function main() {
  var a = nexts(0x7);
  var ans = a[0x1] + ((a[0x0] / 0x2 | 0x0) + (a[0x3] / 0x2 | 0x0) + (a[0x4] / 0x2 | 0x0)) * 0x2;
  switch (a[0x0] % 0x2 + a[0x3] % 0x2 + a[0x4] % 0x2) {
    case 0x3:
      ans += 0x3;
      break;
    case 0x2:
      if (a[0x0] * a[0x3] * a[0x4]) {
        ans += 0x1;
      }
      break;
  }
  return ans;
}
