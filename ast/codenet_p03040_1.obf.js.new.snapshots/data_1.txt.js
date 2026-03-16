'use strict';

var a0_0x8cef2b = __DECODE_0__;
function __DECODE_0__(Oserix, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x167;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Oserix, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x5acd30 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x5acd30(0x16b)) / 0x1 + parseInt(_0x5acd30(0x16c)) / 0x2 + -parseInt(_0x5acd30(0x172)) / 0x3 * (parseInt(_0x5acd30(0x16a)) / 0x4) + -parseInt(_0x5acd30(0x170)) / 0x5 * (-parseInt(_0x5acd30(0x168)) / 0x6) + -parseInt(_0x5acd30(0x16e)) / 0x7 * (-parseInt(_0x5acd30(0x169)) / 0x8) + -parseInt(_0x5acd30(0x16d)) / 0x9 + parseInt(_0x5acd30(0x175)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3858a);
function I(t, i) {
  var _0x1633c9 = __DECODE_0__;
  this['_s'] = t[_0x1633c9(0x174)]('\x0a');
  this['_c'] = 0x0;
  this['_l'] = 0x0;
  this['_f'] = i || Number;
}
I[a0_0x8cef2b(0x17a)]['a'] = function (t) {
  var _0x4108c1 = a0_0x8cef2b;
  var i = this['_s'][this['_l']];
  if (i) {
    var s = i['trim']()['split']('\x20');
    var h = s[this['_c']];
    this['_c']++;
    s[_0x4108c1(0x167)] === this['_c'] && (this['_c'] = 0x0, this['_l']++);
    return t ? t(h) : this['_f'](h);
  }
};
I[a0_0x8cef2b(0x17a)]['l'] = function (t) {
  var _0x21e521 = a0_0x8cef2b;
  var i = this['_s'][this['_l']];
  if (i) {
    this['_c'] = 0x0;
    this['_l']++;
    return i[_0x21e521(0x174)]('\x20')['map'](t || this['_f']);
  }
};
module[a0_0x8cef2b(0x16f)] = I;
function __STRING_ARRAY__() {
  var _0x11d222 = ['sort', '1261059QOyiWZ', 'map', 'split', '5563450wFribB', 'readFileSync', 'utf8', 'push', 'abs', 'prototype', 'length', '826782IlTawZ', '331696mSQuQs', '4qnxviu', '251204FeMjxi', '424056DzifHM', '3886650hUSvCu', '49QXfxpp', 'exports', '10dBSXmJ'];
  __STRING_ARRAY__ = function () {
    return _0x11d222;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var _0x5af3f0 = a0_0x8cef2b;
  var o = new I(input);
  var q = o['a']();
  var c = 0x0;
  var sorted = [];
  for (var i = 0x0; i < q; i++) {
    var q1 = o['a']();
    if (q1 === 0x1) {
      var a = o['a']();
      var b = o['a']();
      c += b;
      sorted[_0x5af3f0(0x178)](a);
    } else {
      sorted = sorted[_0x5af3f0(0x171)]((a, b) => a - b);
      var mid = sorted[Math['floor']((sorted['length'] - 0x1) / 0x2)];
      var ans = sorted[_0x5af3f0(0x173)](x => Math[_0x5af3f0(0x179)](x - mid))['reduce']((acc, cur) => acc + cur) + c;
      console['log'](mid, ans);
    }
  }
}
main(require('fs')[a0_0x8cef2b(0x176)]('/dev/stdin', a0_0x8cef2b(0x177)));
