'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb7)) / 0x1 + parseInt(__DECODE_0__(0xb3)) / 0x2 * (parseInt(__DECODE_0__(0xc0)) / 0x3) + parseInt(__DECODE_0__(0xc3)) / 0x4 + -parseInt(__DECODE_0__(0xaf)) / 0x5 * (parseInt(__DECODE_0__(0xb6)) / 0x6) + -parseInt(__DECODE_0__(0xba)) / 0x7 + parseInt(__DECODE_0__(0xc2)) / 0x8 * (parseInt(__DECODE_0__(0xb0)) / 0x9) + parseInt(__DECODE_0__(0xbc)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd4459);
function __DECODE_0__(CdIVvt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xaf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CdIVvt, key);
}
var input = require('fs')[__DECODE_0__(0xc5)](__DECODE_0__(0xb9), __DECODE_0__(0xbf));
var cin = input[__DECODE_0__(0xbe)](/ |\n/);
var cid = 0x0;
function next() {
  return +cin[cid++];
}
function nextstr() {
  return cin[cid++];
}
function __STRING_ARRAY__() {
  var _0xca6082 = [']).fill().map(x=>{return\x20', 'map', '2nlEyDM', ';})', ']).fill().map(x=>', '12iDAuEb', '471253xOozLG', 'push', '/dev/stdin', '6778373egKBXj', 'log', '6759020ThHiXl', 'max', 'split', 'utf8', '3601833bOLamp', 'Array(a[', '7472PgMKKy', '819880GfKvux', 'slice', 'readFileSync', '1247695NLmieP', '7002sEUKPQ'];
  __STRING_ARRAY__ = function () {
    return _0xca6082;
  };
  return __STRING_ARRAY__();
}
function nextbig() {
  return BigInt(cin[cid++]);
}
function nexts(n, a) {
  return a ? cin[__DECODE_0__(0xc4)](cid, cid += n) : cin[__DECODE_0__(0xc4)](cid, cid += n)[__DECODE_0__(0xb2)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r['push'](cin[__DECODE_0__(0xc4)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[__DECODE_0__(0xb8)](cin[__DECODE_0__(0xc4)](cid, cid += w)['map'](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a['length'];
  var r = __DECODE_0__(0xc1) + --l + __DECODE_0__(0xb1) + v + __DECODE_0__(0xb4);
  while (--l) {
    r = 'Array(a[' + l + __DECODE_0__(0xb5) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0xbb)](String(myOut));
}
function main() {
  var n = next();
  var ans = 0x0;
  var mn = 0x1;
  for (var i = 0x0; i < n; i++) {
    var t = next() - 0x1;
    if (t < mn) {
      mn = Math['max'](mn, t + 0x2);
    } else {
      ans += t / mn | 0x0;
      mn = Math[__DECODE_0__(0xbd)](0x2, mn);
    }
  }
  return ans;
}
