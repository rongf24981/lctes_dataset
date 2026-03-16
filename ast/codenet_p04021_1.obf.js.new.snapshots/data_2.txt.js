'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x6c)) / 0x1 * (-parseInt(__DECODE_0__(0x69)) / 0x2) + parseInt(__DECODE_0__(0x6b)) / 0x3 * (-parseInt(__DECODE_0__(0x70)) / 0x4) + -parseInt(__DECODE_0__(0x78)) / 0x5 + parseInt(__DECODE_0__(0x67)) / 0x6 * (-parseInt(__DECODE_0__(0x79)) / 0x7) + -parseInt(__DECODE_0__(0x72)) / 0x8 + parseInt(__DECODE_0__(0x6e)) / 0x9 + parseInt(__DECODE_0__(0x6d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe387c);
var input = require('fs')[__DECODE_0__(0x6f)](__DECODE_0__(0x7a), 'utf8');
var cin = input[__DECODE_0__(0x68)](/ |\n/);
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
  return a ? cin[__DECODE_0__(0x71)](cid, cid += n) : cin[__DECODE_0__(0x71)](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0x66)](cin[__DECODE_0__(0x71)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r['push'](cin[__DECODE_0__(0x71)](cid, cid += w)[__DECODE_0__(0x73)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a[__DECODE_0__(0x75)];
  var r = __DECODE_0__(0x74) + --l + ']).fill().map(x=>{return\x20' + v + __DECODE_0__(0x77);
  while (--l) {
    r = __DECODE_0__(0x74) + l + ']).fill().map(x=>' + r + ')';
  }
  return eval(r);
}
function __DECODE_0__(wkVJfk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x66;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wkVJfk, key);
}
var myOut = main();
function __STRING_ARRAY__() {
  var _0x90d72a = ['push', '10930530hcsmRj', 'split', '3345468dMRPZR', 'sort', '3AtdbUw', '1PGJSVq', '56463070enFEhy', '16262163JsbAEF', 'readFileSync', '7136392DJQiuI', 'slice', '4037728VkRIKW', 'map', 'Array(a[', 'length', 'log', ';})', '3689735CsrLTS', '7rhiWeH', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x90d72a;
  };
  return __STRING_ARRAY__();
}
if (myOut !== undefined) {
  console[__DECODE_0__(0x76)](String(myOut));
}
function main() {
  var n = next();
  var a = [];
  for (var i = 0x0; i < n; i++) {
    a[__DECODE_0__(0x66)]([next(), i & 0x1]);
  }
  a[__DECODE_0__(0x6a)]((a, b) => a[0x0] - b[0x0]);
  var ans = 0x0;
  for (var i = 0x0; i < n; i += 0x2) {
    if (a[i][0x1] === 0x1) {
      ans++;
    }
  }
  return ans;
}
