'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x135)) / 0x1 * (-parseInt(__DECODE_0__(0x141)) / 0x2) + -parseInt(__DECODE_0__(0x131)) / 0x3 * (parseInt(__DECODE_0__(0x13b)) / 0x4) + -parseInt(__DECODE_0__(0x140)) / 0x5 * (parseInt(__DECODE_0__(0x136)) / 0x6) + -parseInt(__DECODE_0__(0x13f)) / 0x7 + -parseInt(__DECODE_0__(0x143)) / 0x8 + parseInt(__DECODE_0__(0x13c)) / 0x9 * (parseInt(__DECODE_0__(0x130)) / 0xa) + parseInt(__DECODE_0__(0x12e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x50081);
function __STRING_ARRAY__() {
  var _0x3a49c7 = ['1182Sejswc', 'Array(a[', 'map', 'push', '17CEEhiu', '6qLLysB', 'Brown', ']).fill().map(x=>', 'utf8', 'Alice', '2596JyMWvO', '45nNgoEI', ']).fill().map(x=>{return\x20', ';})', '1065967vBYwen', '2533670fMfTMt', '19374VKlmxL', 'split', '2055000uIHscn', '16062794xyrPMY', 'slice', '407660TNoYGH'];
  __STRING_ARRAY__ = function () {
    return _0x3a49c7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(tzcorZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tzcorZ, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x139));
var cin = input[__DECODE_0__(0x142)](/ |\n/);
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
  return a ? cin['slice'](cid, cid += n) : cin[__DECODE_0__(0x12f)](cid, cid += n)[__DECODE_0__(0x133)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0x134)](cin[__DECODE_0__(0x12f)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[__DECODE_0__(0x134)](cin[__DECODE_0__(0x12f)](cid, cid += w)[__DECODE_0__(0x133)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a['length'];
  var r = __DECODE_0__(0x132) + --l + __DECODE_0__(0x13d) + v + __DECODE_0__(0x13e);
  while (--l) {
    r = __DECODE_0__(0x132) + l + __DECODE_0__(0x138) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console['log'](String(myOut));
}
function main() {
  var x = nextbig();
  var y = nextbig();
  if (x - y < 0x2 && y - x < 0x2) {
    return __DECODE_0__(0x137);
  }
  return __DECODE_0__(0x13a);
}
