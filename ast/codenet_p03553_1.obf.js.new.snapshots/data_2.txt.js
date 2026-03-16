'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1f7)) / 0x1 * (-parseInt(__DECODE_0__(0x1f3)) / 0x2) + parseInt(__DECODE_0__(0x1f5)) / 0x3 + parseInt(__DECODE_0__(0x1ec)) / 0x4 + -parseInt(__DECODE_0__(0x1e6)) / 0x5 + -parseInt(__DECODE_0__(0x1ee)) / 0x6 + -parseInt(__DECODE_0__(0x1e7)) / 0x7 * (-parseInt(__DECODE_0__(0x1ef)) / 0x8) + -parseInt(__DECODE_0__(0x1e8)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x39ee2);
function __DECODE_0__(GQWQOw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GQWQOw, key);
}
var input = require('fs')[__DECODE_0__(0x1f0)](__DECODE_0__(0x1eb), 'utf8');
var cin = input[__DECODE_0__(0x1f8)](/ |\n/);
var cid = 0x0;
function next() {
  return +cin[cid++];
}
function __STRING_ARRAY__() {
  var _0x28b96a = ['7xFJqmB', '5896521vALrpc', 'log', 'map', '/dev/stdin', '1471876sOwxOc', 'Array(a[', '1996644nSPsQq', '2069832Uhihlb', 'readFileSync', 'push', ']).fill().map(x=>{return\x20', '2DYWxkF', ']).fill().map(x=>', '743991eZUYpQ', 'length', '422621cBHEdF', 'split', 'slice', '360455aheufJ'];
  __STRING_ARRAY__ = function () {
    return _0x28b96a;
  };
  return __STRING_ARRAY__();
}
function nextstr() {
  return cin[cid++];
}
function nextbig() {
  return BigInt(cin[cid++]);
}
function nexts(n, a) {
  return a ? cin[__DECODE_0__(0x1f9)](cid, cid += n) : cin[__DECODE_0__(0x1f9)](cid, cid += n)['map'](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0x1f1)](cin['slice'](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r['push'](cin[__DECODE_0__(0x1f9)](cid, cid += w)[__DECODE_0__(0x1ea)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a[__DECODE_0__(0x1f6)];
  var r = __DECODE_0__(0x1ed) + --l + __DECODE_0__(0x1f2) + v + ';})';
  while (--l) {
    r = __DECODE_0__(0x1ed) + l + __DECODE_0__(0x1f4) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0x1e9)](String(myOut));
}
function main() {
  var n = next();
  var a = [0x0]['concat'](nexts(n));
  for (var i = n; i >= 0x1; i--) {
    var sum = 0x0;
    for (var j = i; j <= n; j += i) {
      sum += a[j];
    }
    if (sum < 0x0) {
      for (var j = i; j <= n; j += i) {
        a[j] = 0x0;
      }
    }
  }
  return a['reduce']((a, b) => a + b);
}
