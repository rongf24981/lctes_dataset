'use strict';

function __DECODE_0__(dXUCRS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dXUCRS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x13c)) / 0x1 * (-parseInt(__DECODE_0__(0x13b)) / 0x2) + -parseInt(__DECODE_0__(0x134)) / 0x3 + parseInt(__DECODE_0__(0x145)) / 0x4 * (parseInt(__DECODE_0__(0x140)) / 0x5) + parseInt(__DECODE_0__(0x13d)) / 0x6 * (-parseInt(__DECODE_0__(0x141)) / 0x7) + parseInt(__DECODE_0__(0x138)) / 0x8 + -parseInt(__DECODE_0__(0x132)) / 0x9 * (parseInt(__DECODE_0__(0x131)) / 0xa) + -parseInt(__DECODE_0__(0x133)) / 0xb * (-parseInt(__DECODE_0__(0x13e)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf1f4d);
var input = require('fs')['readFileSync'](__DECODE_0__(0x13f), __DECODE_0__(0x139));
var cin = input[__DECODE_0__(0x135)](/ |\n/);
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
  return a ? cin['slice'](cid, cid += n) : cin[__DECODE_0__(0x142)](cid, cid += n)[__DECODE_0__(0x143)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0x144)](cin[__DECODE_0__(0x142)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[__DECODE_0__(0x144)](cin[__DECODE_0__(0x142)](cid, cid += w)['map'](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a['length'];
  var r = __DECODE_0__(0x13a) + --l + __DECODE_0__(0x130) + v + __DECODE_0__(0x12f);
  while (--l) {
    r = 'Array(a[' + l + __DECODE_0__(0x137) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0x136)](String(myOut));
}
function __STRING_ARRAY__() {
  var _0x548431 = ['590499KcGLav', 'slice', 'map', 'push', '12YdBucE', ';})', ']).fill().map(x=>{return\x20', '15534470FcNlTz', '9KwkXHa', '2857701aVBMQa', '3469242UBtCwI', 'split', 'log', ']).fill().map(x=>', '4166568kgQqbw', 'utf8', 'Array(a[', '716OmzgKp', '186RJWHHE', '138UYeTpn', '180nQLxwB', '/dev/stdin', '2150045vJacEz'];
  __STRING_ARRAY__ = function () {
    return _0x548431;
  };
  return __STRING_ARRAY__();
}
function main() {
  var n = next();
  var m = next();
  var ans = m * 0x708 + n * 0x64;
  return ans << m;
}
