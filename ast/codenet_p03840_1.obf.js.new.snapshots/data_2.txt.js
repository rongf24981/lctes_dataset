'use strict';

function __STRING_ARRAY__() {
  var _0x1adec5 = ['length', '1146vdjFlN', 'utf8', '4826874vfQXiz', ']).fill().map(x=>{return\x20', '1850265oERWKr', 'split', 'log', '6293691XOXMsx', 'Array(a[', 'readFileSync', 'push', 'slice', ']).fill().map(x=>', '1321qAEiLs', '3915100ULGqMf', '46905tQZDhd', 'map', '6955000RRREIp', '32TkuhpG', ';})', '10yYgLhH'];
  __STRING_ARRAY__ = function () {
    return _0x1adec5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x9a)) / 0x1 * (-parseInt(__DECODE_0__(0xa3)) / 0x2) + parseInt(__DECODE_0__(0x9c)) / 0x3 * (parseInt(__DECODE_0__(0x9f)) / 0x4) + -parseInt(__DECODE_0__(0xa7)) / 0x5 + parseInt(__DECODE_0__(0xa5)) / 0x6 + -parseInt(__DECODE_0__(0x9b)) / 0x7 + parseInt(__DECODE_0__(0x9e)) / 0x8 + -parseInt(__DECODE_0__(0xaa)) / 0x9 * (-parseInt(__DECODE_0__(0xa1)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc63ab);
var input = require('fs')[__DECODE_0__(0xac)]('/dev/stdin', __DECODE_0__(0xa4));
var cin = input[__DECODE_0__(0xa8)](/ |\n/);
var cid = 0x0;
function __DECODE_0__(RLIRPI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x99;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RLIRPI, key);
}
function next(a) {
  return a ? cin[cid++] : +cin[cid++];
}
function nexts(n, a) {
  return a ? cin[__DECODE_0__(0xae)](cid, cid += n) : cin[__DECODE_0__(0xae)](cid, cid += n)[__DECODE_0__(0x9d)](a => +a);
}
function nextm(h, w, a) {
  var r = [];
  var i = 0x0;
  if (a) {
    for (; i < h; i++) {
      r[__DECODE_0__(0xad)](cin[__DECODE_0__(0xae)](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r[__DECODE_0__(0xad)](cin['slice'](cid, cid += w)[__DECODE_0__(0x9d)](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a[__DECODE_0__(0xa2)];
  var r = __DECODE_0__(0xab) + --l + __DECODE_0__(0xa6) + v + __DECODE_0__(0xa0);
  while (--l) {
    r = __DECODE_0__(0xab) + l + __DECODE_0__(0x99) + r + ')';
  }
  return eval(r);
}
var myOut = main();
if (myOut !== undefined) {
  console[__DECODE_0__(0xa9)](myOut);
}
function main() {
  var a = nexts(0x7);
  var ans = a[0x1] + ((a[0x0] / 0x2 | 0x0) + (a[0x3] / 0x2 | 0x0) + (a[0x4] / 0x2 | 0x0)) * 0x2;
  switch (a[0x0] % 0x2 + a[0x3] % 0x2 + a[0x4] % 0x2) {
    case 0x3:
      ans += 0x3;
      break;
    case 0x2:
      if (a[0x0] * a[0x3] * a[0x4]) {
        ans += 0x1;
      }
      break;
  }
  return ans;
}
