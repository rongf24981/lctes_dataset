(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb4)) / 0x1 * (parseInt(__DECODE_0__(0xb1)) / 0x2) + parseInt(__DECODE_0__(0xc3)) / 0x3 * (parseInt(__DECODE_0__(0xc6)) / 0x4) + -parseInt(__DECODE_0__(0xc7)) / 0x5 + -parseInt(__DECODE_0__(0xb0)) / 0x6 * (parseInt(__DECODE_0__(0xbe)) / 0x7) + parseInt(__DECODE_0__(0xb6)) / 0x8 * (-parseInt(__DECODE_0__(0xb8)) / 0x9) + parseInt(__DECODE_0__(0xb2)) / 0xa + -parseInt(__DECODE_0__(0xb3)) / 0xb * (-parseInt(__DECODE_0__(0xc1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x55d13);
function __DECODE_0__(rTRZyM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rTRZyM, key);
}
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this['_s'] = s[__DECODE_0__(0xbd)]()[__DECODE_0__(0xc5)]('\x0a');
    this['_y'] = 0x0;
  }
  g[__DECODE_0__(0xbb)]['a'] = function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === 'string') {
      s[y] = s[y][__DECODE_0__(0xc5)]('\x20')[__DECODE_0__(0xc2)]();
    }
    r = s[y][__DECODE_0__(0xaf)]();
    if (!s[y][__DECODE_0__(0xc4)]) {
      this['_y']++;
    }
    return f ? r : +r;
  };
  g[__DECODE_0__(0xbb)]['l'] = function (f) {
    var s = this['_s'][this['_y']++]['split']('\x20');
    return f ? s : s[__DECODE_0__(0xb9)](a => +a);
  };
  g[__DECODE_0__(0xbb)]['m'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0xb7)](this['_y'], this['_y'] += n)[__DECODE_0__(0xb9)](a => a['split']('\x20'));
    return f ? r : r['map'](a => a[__DECODE_0__(0xb9)](a => +a));
  };
  g[__DECODE_0__(0xbb)]['r'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0xb7)](this['_y'], this['_y'] += n);
    return f ? r : r['map'](a => +a);
  };
  return f;
}();
var o = GET(require('fs')[__DECODE_0__(0xbc)](__DECODE_0__(0xb5), __DECODE_0__(0xc0)));
console[__DECODE_0__(0xba)](main());
function __STRING_ARRAY__() {
  var _0x130529 = ['Yes', 'utf8', '48UweHQD', 'reverse', '3216dobVjp', 'length', 'split', '1616iOscpl', '2283125MBVUrO', 'abs', 'pop', '747462OpHWtZ', '348EnnBda', '4128930KaYjdo', '246224zQPTJM', '2717tuPtwB', '/dev/stdin', '8hwtQyx', 'slice', '3158901Vpihln', 'map', 'log', 'prototype', 'readFileSync', 'trim', '14Assxia'];
  __STRING_ARRAY__ = function () {
    return _0x130529;
  };
  return __STRING_ARRAY__();
}
function main() {
  var n = o['a']();
  var m = o['m'](n);
  var t = 0x0;
  var x = 0x0;
  var y = 0x0;
  for (var i = 0x0; i < n; i++) {
    var dxy = Math[__DECODE_0__(0xae)](x - m[i][0x1]);
    dxy += Math[__DECODE_0__(0xae)](y - m[i][0x2]);
    var dt = m[i][0x0] - t;
    if (dxy > dt || dxy % 0x2 !== dt % 0x2) {
      return 'No';
    }
    x = m[i][0x1];
    y = m[i][0x2];
    t = m[i][0x0];
  }
  return __DECODE_0__(0xbf);
}
