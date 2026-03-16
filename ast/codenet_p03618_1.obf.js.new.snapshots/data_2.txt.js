'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe1)) / 0x1 * (-parseInt(__DECODE_0__(0xe4)) / 0x2) + parseInt(__DECODE_0__(0xe8)) / 0x3 * (-parseInt(__DECODE_0__(0xee)) / 0x4) + parseInt(__DECODE_0__(0xe5)) / 0x5 + -parseInt(__DECODE_0__(0xef)) / 0x6 + parseInt(__DECODE_0__(0xf3)) / 0x7 + parseInt(__DECODE_0__(0xec)) / 0x8 * (-parseInt(__DECODE_0__(0xf1)) / 0x9) + parseInt(__DECODE_0__(0xf2)) / 0xa * (-parseInt(__DECODE_0__(0xf4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xea606);
var input = require('fs')['readFileSync'](__DECODE_0__(0xf0), __DECODE_0__(0xe6));
var cin = input[__DECODE_0__(0xea)](/ |\n/);
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
  return a ? cin[__DECODE_0__(0xe2)](cid, cid += n) : cin['slice'](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r['push'](cin[__DECODE_0__(0xe2)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[__DECODE_0__(0xe3)](cin[__DECODE_0__(0xe2)](cid, cid += w)[__DECODE_0__(0xe0)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a[__DECODE_0__(0xeb)];
  var r = 'Array(a[' + --l + __DECODE_0__(0xf5) + v + __DECODE_0__(0xed);
  while (--l) {
    r = __DECODE_0__(0xf6) + l + __DECODE_0__(0xe7) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console['log'](String(myOut));
}
function __DECODE_0__(YJdooN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YJdooN, key);
}
function __STRING_ARRAY__() {
  var _0x5a7d3c = ['10035575yMMJXx', ']).fill().map(x=>{return\x20', 'Array(a[', 'map', '712186CgExHU', 'slice', 'push', '2KMYiEF', '7339030dwQBiP', 'utf8', ']).fill().map(x=>', '162273ezjQBZ', 'charCodeAt', 'split', 'length', '112ajwmgH', ';})', '28UUVfEx', '4486740VDsHqS', '/dev/stdin', '29115MOxKLT', '10pNgnMw', '6048392UmNamd'];
  __STRING_ARRAY__ = function () {
    return _0x5a7d3c;
  };
  return __STRING_ARRAY__();
}
function main() {
  var a = nextstr();
  var ans = 0x1;
  var c = xArray(0x0, 0x1a);
  for (var i = 0x0; i < a[__DECODE_0__(0xeb)]; i++) {
    var t = a[i][__DECODE_0__(0xe9)]() - 0x61;
    ans += i - c[t];
    c[t]++;
  }
  return ans;
}
