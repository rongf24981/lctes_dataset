'use strict';

var a0_0x27d25a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x43ae2a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x43ae2a(0x16d)) / 0x1 + -parseInt(_0x43ae2a(0x16b)) / 0x2 * (-parseInt(_0x43ae2a(0x167)) / 0x3) + parseInt(_0x43ae2a(0x16c)) / 0x4 + parseInt(_0x43ae2a(0x171)) / 0x5 + -parseInt(_0x43ae2a(0x173)) / 0x6 * (-parseInt(_0x43ae2a(0x174)) / 0x7) + parseInt(_0x43ae2a(0x170)) / 0x8 + -parseInt(_0x43ae2a(0x16f)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x39a62);
var input = require('fs')['readFileSync'](a0_0x27d25a(0x169), 'utf8');
var cin = input['split'](/ |\n/);
var cid = 0x0;
function next() {
  return +cin[cid++];
}
function nextstr() {
  return cin[cid++];
}
function nextbig() {
  return BigInt(cin[cid++]);
}
function nexts(n, a) {
  var _0x15b0fa = a0_0x27d25a;
  return a ? cin[_0x15b0fa(0x168)](cid, cid += n) : cin[_0x15b0fa(0x168)](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
  var _0x2b073b = a0_0x27d25a;
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[_0x2b073b(0x16a)](cin[_0x2b073b(0x168)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[_0x2b073b(0x16a)](cin['slice'](cid, cid += w)[_0x2b073b(0x172)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var _0x1c8271 = a0_0x27d25a;
  var a = arguments;
  var l = a[_0x1c8271(0x16e)];
  var r = 'Array(a[' + --l + ']).fill().map(x=>{return\x20' + v + ';})';
  while (--l) {
    r = 'Array(a[' + l + _0x1c8271(0x176) + r + ')';
  }
  return eval(r);
}
var myOut = main();
function __STRING_ARRAY__() {
  var _0xa233b6 = ['463833npKCUg', 'length', '18726804JaoUWB', '3613224lrYASH', '1945370JIUyNE', 'map', '139014gbXXjv', '63HBsLbc', 'log', ']).fill().map(x=>', '33582VrfJck', 'slice', '/dev/stdin', 'push', '80hDrqpC', '1424180WPALdx'];
  __STRING_ARRAY__ = function () {
    return _0xa233b6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DssHcP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x167;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DssHcP, key);
}
if (myOut !== undefined) {
  console[a0_0x27d25a(0x175)](String(myOut));
}
function main() {
  var [q, h, s, d] = nexts(0x4);
  var n = next();
  if (q * 0x2 < h) {
    h = q * 0x2;
  }
  if (h * 0x2 < s) {
    s = h * 0x2;
  }
  if (s * 0x2 < d) {
    d = s * 0x2;
  }
  return BigInt(n / 0x2 | 0x0) * BigInt(d) + BigInt((n & 0x1) * s);
}
