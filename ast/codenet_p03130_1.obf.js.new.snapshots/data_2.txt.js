'use strict';

function __DECODE_0__(BpDdbS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BpDdbS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x160)) / 0x1 + parseInt(__DECODE_0__(0x15f)) / 0x2 * (parseInt(__DECODE_0__(0x164)) / 0x3) + -parseInt(__DECODE_0__(0x16e)) / 0x4 * (parseInt(__DECODE_0__(0x15e)) / 0x5) + parseInt(__DECODE_0__(0x16b)) / 0x6 + -parseInt(__DECODE_0__(0x170)) / 0x7 + parseInt(__DECODE_0__(0x161)) / 0x8 + -parseInt(__DECODE_0__(0x16d)) / 0x9 * (parseInt(__DECODE_0__(0x165)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdfc43);
function I(s, f) {
  this['_s'] = s;
  this['_c'] = 0x0;
  this['_l'] = 0x0;
  this['_f'] = f || Number;
}
I[__DECODE_0__(0x163)]['a'] = function () {
  var l = this['_s'][__DECODE_0__(0x168)]('\x0a')[this['_l']];
  if (!l) {
    return;
  }
  var t = l['trim']()['split']('\x20');
  var a = t[this['_c']];
  this['_c']++;
  if (t[__DECODE_0__(0x167)] === this['_c']) {
    this['_c'] = 0x0;
    this['_l']++;
  }
  return this['_f'](a);
};
function __STRING_ARRAY__() {
  var _0x11e8b3 = ['39jjWlxA', '8750obEzCz', '/dev/stdin', 'length', 'split', 'readFileSync', 'log', '3748254DyfKHu', 'fill', '23778UyILVk', '118076LPvnFV', 'YES', '1546188VXtiLX', 'join', '110OqwpIs', '264810Lfuvlt', '1667823mmOoVe', '678416PJjXOc', 'sort', 'prototype'];
  __STRING_ARRAY__ = function () {
    return _0x11e8b3;
  };
  return __STRING_ARRAY__();
}
I[__DECODE_0__(0x163)]['l'] = function () {
  var l = this['_s'][__DECODE_0__(0x168)]('\x0a')[this['_l']];
  this['_c'] = 0x0;
  this['_l']++;
  return l[__DECODE_0__(0x168)]('\x20')['map'](this['_f']);
};
function main(input) {
  const o = new I(input);
  const arr = Array(0x4)[__DECODE_0__(0x16c)](0x0);
  for (let i = 0x0; i < 0x3; i++) {
    let a = o['a']();
    let b = o['a']();
    arr[a - 0x1]++;
    arr[b - 0x1]++;
  }
  if (arr[__DECODE_0__(0x162)]((a, b) => a - b)[__DECODE_0__(0x15d)]('\x20') === '1\x201\x202\x202') {
    console[__DECODE_0__(0x16a)](__DECODE_0__(0x16f));
  } else {
    console[__DECODE_0__(0x16a)]('NO');
  }
}
main(require('fs')[__DECODE_0__(0x169)](__DECODE_0__(0x166), 'utf8'));
