function __STRING_ARRAY__() {
  var _0x344f75 = ['trim', '1880710egIGRn', '409840tysNQz', 'reverse', 'length', 'utf8', '1861242DBgBws', '10aaxKzW', '12410607opoGdt', '83496PqTGAw', 'pop', '39244MODWmb', 'split', 'map', 'slice', 'log', 'join', '9966NVQWyz', '128dYrldS', '81ydlRZY', 'string', 'push', 'prototype', '328uqvlZz', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x344f75;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x99)) / 0x1 * (-parseInt(__DECODE_0__(0x9d)) / 0x2) + -parseInt(__DECODE_0__(0xa3)) / 0x3 * (-parseInt(__DECODE_0__(0x90)) / 0x4) + parseInt(__DECODE_0__(0x93)) / 0x5 + parseInt(__DECODE_0__(0x98)) / 0x6 + parseInt(__DECODE_0__(0x9b)) / 0x7 * (-parseInt(__DECODE_0__(0xa4)) / 0x8) + -parseInt(__DECODE_0__(0xa5)) / 0x9 * (-parseInt(__DECODE_0__(0x94)) / 0xa) + -parseInt(__DECODE_0__(0x9a)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x31fc8);
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this['_s'] = s[__DECODE_0__(0x92)]()[__DECODE_0__(0x9e)]('\x0a');
    this['_y'] = 0x0;
  }
  g[__DECODE_0__(0x8f)]['a'] = function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === __DECODE_0__(0xa6)) {
      s[y] = s[y][__DECODE_0__(0x9e)]('\x20')[__DECODE_0__(0x95)]();
    }
    r = s[y][__DECODE_0__(0x9c)]();
    if (!s[y][__DECODE_0__(0x96)]) {
      this['_y']++;
    }
    return f ? r : +r;
  };
  g['prototype']['l'] = function (f) {
    var s = this['_s'][this['_y']++][__DECODE_0__(0x9e)]('\x20');
    return f ? s : s['map'](a => +a);
  };
  g['prototype']['m'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0xa0)](this['_y'], this['_y'] += n)[__DECODE_0__(0x9f)](a => a['split']('\x20'));
    return f ? r : r[__DECODE_0__(0x9f)](a => a['map'](a => +a));
  };
  g[__DECODE_0__(0x8f)]['r'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0xa0)](this['_y'], this['_y'] += n);
    return f ? r : r['map'](a => +a);
  };
  return f;
}();
var o = GET(require('fs')['readFileSync'](__DECODE_0__(0x91), __DECODE_0__(0x97)));
function __DECODE_0__(SHEUZl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SHEUZl, key);
}
console[__DECODE_0__(0xa1)](main());
function main() {
  var n = o['a']();
  var ans = [];
  for (var i = 0x1; i <= n; i++) {
    for (var j = i + 0x1; j <= n; j++) {
      if (n % 0x2 && i + j === n) {
        continue;
      }
      if (n % 0x2 === 0x0 && i + j === n + 0x1) {
        continue;
      }
      ans[__DECODE_0__(0x8e)](i + '\x20' + j);
    }
  }
  console['log'](ans[__DECODE_0__(0x96)]);
  return ans[__DECODE_0__(0xa2)]('\x0a');
}
