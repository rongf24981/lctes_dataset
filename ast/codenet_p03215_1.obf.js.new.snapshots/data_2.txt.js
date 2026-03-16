'use strict';

function __DECODE_0__(SWFozP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SWFozP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd9)) / 0x1 + -parseInt(__DECODE_0__(0xd7)) / 0x2 * (parseInt(__DECODE_0__(0xdc)) / 0x3) + parseInt(__DECODE_0__(0xe3)) / 0x4 * (-parseInt(__DECODE_0__(0xce)) / 0x5) + -parseInt(__DECODE_0__(0xd6)) / 0x6 * (parseInt(__DECODE_0__(0xda)) / 0x7) + parseInt(__DECODE_0__(0xd8)) / 0x8 * (parseInt(__DECODE_0__(0xcc)) / 0x9) + -parseInt(__DECODE_0__(0xe0)) / 0xa + parseInt(__DECODE_0__(0xe2)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x463c4);
function __STRING_ARRAY__() {
  const _0x309a3e = ['72447jUhHTl', '465479dKbQPf', 'pop', '10899iJUnIR', 'ints', 'strn', '/dev/stdin', '5030070DwhpuE', 'slice', '12561879vMqUJh', '353516yeCjcl', 'sort', '306DdmBFS', 'utf8', '25VFauQC', 'filter', 'strv', 'prototype', 'log', 'length', 'map', 'split', '6rOooLO', '98dxHjAK', '95896YEAlug'];
  __STRING_ARRAY__ = function () {
    return _0x309a3e;
  };
  return __STRING_ARRAY__();
}
function _(s) {
  let l = s['split']('\x0a');
  if (l[l[__DECODE_0__(0xd3)] - 0x1] == '') {
    l[__DECODE_0__(0xdb)]();
  }
  this['l'] = l;
  this['y'] = 0x0;
}
_['prototype'][__DECODE_0__(0xdd)] = function () {
  return this['l'][this['y']++][__DECODE_0__(0xd5)]('\x20')[__DECODE_0__(0xd4)](v => +v);
};
_[__DECODE_0__(0xd1)]['intv'] = function () {
  const y = this['y'];
  this['y'] = this['l'][__DECODE_0__(0xd3)];
  return this['l'][__DECODE_0__(0xe1)](y)[__DECODE_0__(0xd4)](v => +v);
};
_[__DECODE_0__(0xd1)][__DECODE_0__(0xd0)] = function () {
  const y = this['y'];
  this['y'] = this['l'][__DECODE_0__(0xd3)];
  return this['l'][__DECODE_0__(0xe1)](y);
};
_[__DECODE_0__(0xd1)][__DECODE_0__(0xde)] = function (n) {
  const y = this['y'];
  this['y'] += n;
  return this['l'][__DECODE_0__(0xe1)](y, y + n);
};
const $ = new _(require('fs')['readFileSync'](__DECODE_0__(0xdf), __DECODE_0__(0xcd)));
(() => {
  const nk = $[__DECODE_0__(0xdd)]();
  const n = nk[0x0];
  const k = nk[0x1];
  const a = $[__DECODE_0__(0xdd)]();
  const rr = [];
  for (let i = 0x0; i < n; i++) {
    let s = 0x0;
    for (let j = i; j < n; j++) {
      s += a[j];
      rr['push'](s);
    }
  }
  rr[__DECODE_0__(0xe4)]((a, b) => b - a);
  let res = 0x0;
  for (let d = 0x29; d >= 0x0; d--) {
    let border = 0x1 << d;
    let num = rr[__DECODE_0__(0xcf)](e => (e & res + border) === res + border)[__DECODE_0__(0xd3)];
    if (num >= k) {
      res += border;
    }
  }
  console[__DECODE_0__(0xd2)](res);
})();
