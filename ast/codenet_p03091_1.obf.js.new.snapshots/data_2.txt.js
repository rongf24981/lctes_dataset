'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1cd)) / 0x1 * (parseInt(__DECODE_0__(0x1d8)) / 0x2) + -parseInt(__DECODE_0__(0x1c6)) / 0x3 + -parseInt(__DECODE_0__(0x1cb)) / 0x4 + -parseInt(__DECODE_0__(0x1d2)) / 0x5 * (parseInt(__DECODE_0__(0x1d0)) / 0x6) + parseInt(__DECODE_0__(0x1c9)) / 0x7 + parseInt(__DECODE_0__(0x1d9)) / 0x8 * (-parseInt(__DECODE_0__(0x1d6)) / 0x9) + parseInt(__DECODE_0__(0x1d7)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3b66e);
function __DECODE_0__(hbRwNm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hbRwNm, key);
}
function I(s, f) {
  this['_s'] = s[__DECODE_0__(0x1cf)]('\x0a');
  this['_c'] = 0x0;
  this['_l'] = 0x0;
  this['_f'] = f || Number;
}
I[__DECODE_0__(0x1d3)]['a'] = function () {
  var l = this['_s'][this['_l']];
  if (!l) {
    return;
  }
  var t = l[__DECODE_0__(0x1ce)]()[__DECODE_0__(0x1cf)]('\x20');
  var a = t[this['_c']];
  this['_c']++;
  if (t[__DECODE_0__(0x1d5)] === this['_c']) {
    this['_c'] = 0x0;
    this['_l']++;
  }
  return this['_f'](a);
};
function __STRING_ARRAY__() {
  const _0x1d98bb = ['66TsONKy', 'readFileSync', '178465gwznhT', 'prototype', 'log', 'length', '2556iPrBiy', '13112930JyucpR', '4wDCfJg', '3448IHNtkR', '/dev/stdin', '946515aPGupy', 'utf8', 'exports', '1669675ImQLcB', 'push', '388440vdNeIV', 'map', '189433GazMNR', 'trim', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x1d98bb;
  };
  return __STRING_ARRAY__();
}
I[__DECODE_0__(0x1d3)]['l'] = function () {
  var l = this['_s'][this['_l']];
  if (!l) {
    return;
  }
  this['_c'] = 0x0;
  this['_l']++;
  return l[__DECODE_0__(0x1cf)]('\x20')[__DECODE_0__(0x1cc)](this['_f']);
};
module[__DECODE_0__(0x1c8)] = I;
function main(input) {
  const o = new I(input);
  const N = o['a']();
  const M = o['a']();
  const adj = [];
  for (let i = 0x1; i <= N; i++) {
    adj[i] = [];
  }
  for (let i = 0x0; i < M; i++) {
    let ai = o['a']();
    let bi = o['a']();
    adj[ai]['push'](bi);
    adj[bi][__DECODE_0__(0x1ca)](ai);
  }
  let flag1 = ![];
  let flag2 = !![];
  for (let i = 0x1; i <= N; i++) {
    if (adj[i][__DECODE_0__(0x1d5)] === 0x6) {
      flag1 = !![];
    }
    if (adj[i][__DECODE_0__(0x1d5)] % 0x2 !== 0x0) {
      flag2 = ![];
    }
  }
  console[__DECODE_0__(0x1d4)](flag1 && flag2 ? 'Yes' : 'No');
}
main(require('fs')[__DECODE_0__(0x1d1)](__DECODE_0__(0x1da), __DECODE_0__(0x1c7)));
