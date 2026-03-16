'use strict';

function __STRING_ARRAY__() {
  var _0x150709 = ['4jwbIuO', '6035320rlOxeM', '479740VnTjdS', '471wRFcqh', '2588460PMdnWa', 'utf8', 'readFileSync', 'split', '4348MOQItw', 'log', 'trim', '114492CCuKnl', '20180020lVRiHw', '7KZXKZE', '8832906jkOnxl', 'prototype', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x150709;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x174)) / 0x1 * (parseInt(__DECODE_0__(0x172)) / 0x2) + -parseInt(__DECODE_0__(0x175)) / 0x3 * (-parseInt(__DECODE_0__(0x169)) / 0x4) + -parseInt(__DECODE_0__(0x165)) / 0x5 + parseInt(__DECODE_0__(0x16c)) / 0x6 + parseInt(__DECODE_0__(0x16e)) / 0x7 * (parseInt(__DECODE_0__(0x173)) / 0x8) + -parseInt(__DECODE_0__(0x16f)) / 0x9 + parseInt(__DECODE_0__(0x16d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7af00);
function I(s, f) {
  this['_s'] = s[__DECODE_0__(0x168)]('\x0a');
  this['_c'] = 0x0;
  this['_l'] = 0x0;
  this['_f'] = f || Number;
}
I[__DECODE_0__(0x170)]['a'] = function () {
  var l = this['_s'][this['_l']];
  if (!l) {
    return;
  }
  var t = l[__DECODE_0__(0x16b)]()[__DECODE_0__(0x168)]('\x20');
  var a = t[this['_c']];
  this['_c']++;
  if (t[__DECODE_0__(0x171)] === this['_c']) {
    this['_c'] = 0x0;
    this['_l']++;
  }
  return this['_f'](a);
};
I[__DECODE_0__(0x170)]['l'] = function () {
  var l = this['_s'][this['_l']];
  if (!l) {
    return;
  }
  this['_c'] = 0x0;
  this['_l']++;
  return l['split']('\x20')['map'](this['_f']);
};
function __DECODE_0__(NJhZjv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x165;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NJhZjv, key);
}
function main(input) {
  var o = new I(input, String);
  var n = Number(o['a']());
  var s = o['a']();
  var white = 0x0;
  var black = 0x0;
  for (var i = 0x0; i < s[__DECODE_0__(0x171)]; i++) {
    if (s[i] === '.') {
      white += 0x1;
    }
  }
  let min = white;
  for (var i = 0x0; i < s[__DECODE_0__(0x171)]; i++) {
    if (s[i] === '#') {
      black += 0x1;
    } else {
      white -= 0x1;
    }
    if (black + white < min) {
      min = black + white;
    }
  }
  console[__DECODE_0__(0x16a)](min);
}
main(require('fs')[__DECODE_0__(0x167)]('/dev/stdin', __DECODE_0__(0x166)));
