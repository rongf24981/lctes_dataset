'use strict';

function __DECODE_0__(XldbWP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XldbWP, key);
}
function __STRING_ARRAY__() {
  var _0x1c02ad = ['length', '112ZjVrKK', '5697qUPSjv', 'readFileSync', ';})', ']).fill().map(x=>', ']).fill().map(x=>{return\x20', '1754694AkBvds', '/dev/stdin', '3577975WHKNzA', '72KMLZbA', 'Array(a[', 'push', 'split', '849981YFIHZk', '3460ztMJVZ', 'utf8', '12581160gWasQd', 'slice', '497903fTDGbF', 'map', '710370oUrsKe', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x1c02ad;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d9)) / 0x1 + parseInt(__DECODE_0__(0x1d2)) / 0x2 + parseInt(__DECODE_0__(0x1cd)) / 0x3 * (-parseInt(__DECODE_0__(0x1da)) / 0x4) + -parseInt(__DECODE_0__(0x1d4)) / 0x5 + parseInt(__DECODE_0__(0x1d5)) / 0x6 * (parseInt(__DECODE_0__(0x1c7)) / 0x7) + -parseInt(__DECODE_0__(0x1cc)) / 0x8 * (-parseInt(__DECODE_0__(0x1c9)) / 0x9) + parseInt(__DECODE_0__(0x1dc)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd843c);
var input = require('fs')[__DECODE_0__(0x1ce)](__DECODE_0__(0x1d3), __DECODE_0__(0x1db));
var cin = input[__DECODE_0__(0x1d8)](/ |\n/);
var cid = 0x0;
function next(a) {
  return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
  return a ? cin[__DECODE_0__(0x1c6)](cid, cid += n) : cin[__DECODE_0__(0x1c6)](cid, cid += n)[__DECODE_0__(0x1c8)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0x1d7)](cin[__DECODE_0__(0x1c6)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r['push'](cin['slice'](cid, cid += w)[__DECODE_0__(0x1c8)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a['length'];
  var r = __DECODE_0__(0x1d6) + --l + __DECODE_0__(0x1d1) + v + __DECODE_0__(0x1cf);
  while (--l) {
    r = __DECODE_0__(0x1d6) + l + __DECODE_0__(0x1d0) + r + ')';
  }
  return eval(r);
}
var mod = 0x3b9aca00 + 0x7;
function mul() {
  for (var a = arguments, r = a[0x0], i = a[__DECODE_0__(0x1cb)]; --i;) {
    r = ((r >> 0x10) * a[i] % mod * 0x10000 + (r & 0xffff) * a[i]) % mod;
  }
  return r;
}
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0x1ca)](myOut);
}
function main() {
  var n = next();
  var x = nexts(n);
  var ans = 0x1;
  var id = 0x1;
  var rem = 0x0;
  for (var i = 0x0; i < n; i++) {
    rem++;
    ans = mul(ans, rem);
    if (x[i] < id) {
      rem--;
    } else {
      id += 0x2;
    }
  }
  return ans;
}
