function __STRING_ARRAY__() {
  var _0xa61d0a = ['reverse', '4GjiGAH', '4124527MDJKxd', '10zzyagp', 'slice', '8KwdFnw', 'prototype', 'readFileSync', 'trim', 'split', 'log', '321000qpibqU', '554286luPTLy', 'length', '2804389vdPsES', '/dev/stdin', '361652UsRaSh', 'pop', '210807SiIDOK', '643292xnAUoC', 'map', 'string', '15usqmSi'];
  __STRING_ARRAY__ = function () {
    return _0xa61d0a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd3)) / 0x1 + -parseInt(__DECODE_0__(0xbf)) / 0x2 + -parseInt(__DECODE_0__(0xce)) / 0x3 * (parseInt(__DECODE_0__(0xc4)) / 0x4) + -parseInt(__DECODE_0__(0xc2)) / 0x5 * (-parseInt(__DECODE_0__(0xcf)) / 0x6) + -parseInt(__DECODE_0__(0xd1)) / 0x7 * (-parseInt(__DECODE_0__(0xc8)) / 0x8) + parseInt(__DECODE_0__(0xd5)) / 0x9 * (-parseInt(__DECODE_0__(0xc6)) / 0xa) + -parseInt(__DECODE_0__(0xc5)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x33dac);
function __DECODE_0__(YEJYbg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YEJYbg, key);
}
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this['_s'] = s[__DECODE_0__(0xcb)]()['split']('\x0a');
    this['_y'] = 0x0;
  }
  g['prototype']['a'] = function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === __DECODE_0__(0xc1)) {
      s[y] = s[y]['split']('\x20')[__DECODE_0__(0xc3)]();
    }
    r = s[y][__DECODE_0__(0xd4)]();
    if (!s[y][__DECODE_0__(0xd0)]) {
      this['_y']++;
    }
    return f ? r : +r;
  };
  g[__DECODE_0__(0xc9)]['l'] = function (f) {
    var s = this['_s'][this['_y']++][__DECODE_0__(0xcc)]('\x20');
    return f ? s : s[__DECODE_0__(0xc0)](a => +a);
  };
  g[__DECODE_0__(0xc9)]['m'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0xc7)](this['_y'], this['_y'] += n)[__DECODE_0__(0xc0)](a => a['split']('\x20'));
    return f ? r : r[__DECODE_0__(0xc0)](a => a[__DECODE_0__(0xc0)](a => +a));
  };
  g['prototype']['r'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0xc7)](this['_y'], this['_y'] += n);
    return f ? r : r[__DECODE_0__(0xc0)](a => +a);
  };
  return f;
}();
var o = GET(require('fs')[__DECODE_0__(0xca)](__DECODE_0__(0xd2), 'utf8'));
console[__DECODE_0__(0xcd)](main());
function main() {
  var s = o['a'](0x1);
  var ans = 0x3e7;
  for (var i = 0x2; i < s[__DECODE_0__(0xd0)]; i++) {
    var t = s[i - 0x2] + s[i - 0x1] + s[i];
    t = Math['abs'](t - 0x2f1);
    if (ans > t) {
      ans = t;
    }
  }
  return ans;
}
