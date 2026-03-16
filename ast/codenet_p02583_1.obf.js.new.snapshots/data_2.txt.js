'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x19d)) / 0x1 * (parseInt(__DECODE_0__(0x1a5)) / 0x2) + -parseInt(__DECODE_0__(0x198)) / 0x3 + parseInt(__DECODE_0__(0x19f)) / 0x4 + -parseInt(__DECODE_0__(0x1a6)) / 0x5 * (-parseInt(__DECODE_0__(0x1a7)) / 0x6) + -parseInt(__DECODE_0__(0x1a2)) / 0x7 + -parseInt(__DECODE_0__(0x1a9)) / 0x8 + parseInt(__DECODE_0__(0x196)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3d4af);
function __STRING_ARRAY__() {
  var _0x519bed = ['3198072VZAuAp', 'push', '4983939UTrNUt', 'readFileSync', '1242381lBzMyW', 'slice', '/dev/stdin', 'split', ']).fill().map(x=>{return\x20', '4343JtVcOG', 'sort', '406136dNseRE', ']).fill().map(x=>', 'map', '2085146lmFjkv', 'log', 'utf8', '190bkYPvx', '64115KSsWJA', '138xhjing', 'Array(a['];
  __STRING_ARRAY__ = function () {
    return _0x519bed;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x197)](__DECODE_0__(0x19a), __DECODE_0__(0x1a4));
var cin = input[__DECODE_0__(0x19b)](/ |\n/);
var cid = 0x0;
function next() {
  return +cin[cid++];
}
function __DECODE_0__(SMzdqQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SMzdqQ, key);
}
function nextstr() {
  return cin[cid++];
}
function nextbig() {
  return BigInt(cin[cid++]);
}
function nexts(n, a) {
  return a ? cin[__DECODE_0__(0x199)](cid, cid += n) : cin['slice'](cid, cid += n)[__DECODE_0__(0x1a1)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0x195)](cin[__DECODE_0__(0x199)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r['push'](cin['slice'](cid, cid += w)[__DECODE_0__(0x1a1)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a['length'];
  var r = 'Array(a[' + --l + __DECODE_0__(0x19c) + v + ';})';
  while (--l) {
    r = __DECODE_0__(0x1a8) + l + __DECODE_0__(0x1a0) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0x1a3)](String(myOut));
}
function main() {
  var n = next();
  var l = nexts(n)[__DECODE_0__(0x19e)]((a, b) => a - b);
  var ans = 0x0;
  for (var i = 0x0; i < n; i++) {
    for (var j = i + 0x1; j < n; j++) {
      for (var k = j + 0x1; k < n; k++) {
        if (l[i] === l[j] || l[j] === l[k]) {
          continue;
        }
        if (l[i] + l[j] > l[k]) {
          ans++;
        }
      }
    }
  }
  return ans;
}
