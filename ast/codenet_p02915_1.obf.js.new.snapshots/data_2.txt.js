function __STRING_ARRAY__() {
  var _0x382e76 = ['6947526PoxilT', '4cMLUBc', '458899oPyRCU', '1887219utYpqR', 'slice', 'prototype', 'utf8', 'map', 'string', '7894840NSQSBU', '3885940VCHMyO', '2KDimuq', ';})', '8DOHDMR', 'length', '1414017gZsZiv', ']).fill(0).map(x=>{return\x20', 'Array(a[', '/dev/stdin', 'split', 'log', 'reverse', '273849DRRczp'];
  __STRING_ARRAY__ = function () {
    return _0x382e76;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d6)) / 0x1 + parseInt(__DECODE_0__(0x1c7)) / 0x2 * (-parseInt(__DECODE_0__(0x1d2)) / 0x3) + -parseInt(__DECODE_0__(0x1d4)) / 0x4 * (-parseInt(__DECODE_0__(0x1dd)) / 0x5) + parseInt(__DECODE_0__(0x1d3)) / 0x6 + -parseInt(__DECODE_0__(0x1d5)) / 0x7 * (-parseInt(__DECODE_0__(0x1c9)) / 0x8) + parseInt(__DECODE_0__(0x1cb)) / 0x9 + parseInt(__DECODE_0__(0x1dc)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xec839);
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this['_s'] = s['trim']()['split']('\x0a');
    this['_y'] = 0x0;
  }
  g['prototype']['a'] = function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === __DECODE_0__(0x1db)) {
      s[y] = s[y][__DECODE_0__(0x1cf)]('\x20')[__DECODE_0__(0x1d1)]();
    }
    r = s[y]['pop']();
    if (!s[y][__DECODE_0__(0x1ca)]) {
      this['_y']++;
    }
    return f ? r : +r;
  };
  g[__DECODE_0__(0x1d8)]['l'] = function (f) {
    var s = this['_s'][this['_y']++][__DECODE_0__(0x1cf)]('\x20');
    return f ? s : s[__DECODE_0__(0x1da)](a => +a);
  };
  g[__DECODE_0__(0x1d8)]['m'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0x1d7)](this['_y'], this['_y'] += n)[__DECODE_0__(0x1da)](a => a[__DECODE_0__(0x1cf)]('\x20'));
    return f ? r : r[__DECODE_0__(0x1da)](a => a[__DECODE_0__(0x1da)](a => +a));
  };
  g[__DECODE_0__(0x1d8)]['r'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0x1d7)](this['_y'], this['_y'] += n);
    return f ? r : r[__DECODE_0__(0x1da)](a => +a);
  };
  return f;
}();
var o = GET(require('fs')['readFileSync'](__DECODE_0__(0x1ce), __DECODE_0__(0x1d9)));
function __DECODE_0__(IXmyoo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IXmyoo, key);
}
function xArray(v) {
  var a = arguments;
  var l = a[__DECODE_0__(0x1ca)];
  var r = __DECODE_0__(0x1cd) + --l + __DECODE_0__(0x1cc) + v + __DECODE_0__(0x1c8);
  while (--l) {
    r = __DECODE_0__(0x1cd) + l + ']).fill(0).map(x=>' + r + ')';
  }
  return eval(r);
}
console[__DECODE_0__(0x1d0)](main());
function main() {
  var n = o['a']();
  return n * n * n;
}
