'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11a)) / 0x1 * (-parseInt(__DECODE_0__(0x124)) / 0x2) + parseInt(__DECODE_0__(0x127)) / 0x3 * (parseInt(__DECODE_0__(0x12b)) / 0x4) + parseInt(__DECODE_0__(0x126)) / 0x5 * (-parseInt(__DECODE_0__(0x122)) / 0x6) + parseInt(__DECODE_0__(0x129)) / 0x7 * (parseInt(__DECODE_0__(0x121)) / 0x8) + parseInt(__DECODE_0__(0x11c)) / 0x9 + -parseInt(__DECODE_0__(0x12c)) / 0xa * (parseInt(__DECODE_0__(0x117)) / 0xb) + -parseInt(__DECODE_0__(0x11e)) / 0xc * (parseInt(__DECODE_0__(0x120)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x24486);
var input = require('fs')[__DECODE_0__(0x118)](__DECODE_0__(0x125), __DECODE_0__(0x119));
var cin = input[__DECODE_0__(0x12a)](/ |\n/);
var cid = 0x0;
function __DECODE_0__(Ygadhn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x117;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ygadhn, key);
}
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
  return a ? cin[__DECODE_0__(0x12d)](cid, cid += n) : cin[__DECODE_0__(0x12d)](cid, cid += n)[__DECODE_0__(0x11f)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r['push'](cin[__DECODE_0__(0x12d)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r['push'](cin[__DECODE_0__(0x12d)](cid, cid += w)[__DECODE_0__(0x11f)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a[__DECODE_0__(0x11b)];
  var r = 'Array(a[' + --l + __DECODE_0__(0x128) + v + ';})';
  while (--l) {
    r = 'Array(a[' + l + __DECODE_0__(0x123) + r + ')';
  }
  return eval(r);
}
function __STRING_ARRAY__() {
  var _0x4f695f = ['1253XRAdxl', 'split', '1155204doKivt', '70brIyvq', 'slice', '280412IUkxSb', 'readFileSync', 'utf8', '2143QTzORw', 'length', '782748SDPrLw', 'log', '36CoELve', 'map', '1108913rqZOSu', '11912pEjppK', '6iKNDqD', ']).fill().map(x=>', '4BFcMOj', '/dev/stdin', '275285lJGZlP', '3pLwEal', ']).fill().map(x=>{return\x20'];
  __STRING_ARRAY__ = function () {
    return _0x4f695f;
  };
  return __STRING_ARRAY__();
}
var tm = +new Date() + 0x384;
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0x11d)](String(myOut));
}
function main() {
  var [a, b, c] = nexts(0x3);
  var cnt = 0x0;
  while (new Date() < tm) {
    if (a % 0x2 || b % 0x2 || c % 0x2) {
      return cnt;
    }
    var a2 = b + c >> 0x1;
    var b2 = a + c >> 0x1;
    var c2 = a + b >> 0x1;
    a = a2;
    b = b2;
    c = c2;
    cnt++;
  }
  return -0x1;
}
