function __DECODE_0__(DxxUEz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DxxUEz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1db)) / 0x1 * (parseInt(__DECODE_0__(0x1d7)) / 0x2) + parseInt(__DECODE_0__(0x1e8)) / 0x3 + parseInt(__DECODE_0__(0x1e7)) / 0x4 + -parseInt(__DECODE_0__(0x1d8)) / 0x5 * (-parseInt(__DECODE_0__(0x1d9)) / 0x6) + parseInt(__DECODE_0__(0x1e9)) / 0x7 * (parseInt(__DECODE_0__(0x1e3)) / 0x8) + parseInt(__DECODE_0__(0x1ea)) / 0x9 + parseInt(__DECODE_0__(0x1e1)) / 0xa * (-parseInt(__DECODE_0__(0x1ec)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2cdb9);
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this['_s'] = s[__DECODE_0__(0x1dc)]()['split']('\x0a');
    this['_y'] = 0x0;
  }
  g[__DECODE_0__(0x1df)]['a'] = function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === __DECODE_0__(0x1e4)) {
      s[y] = s[y][__DECODE_0__(0x1eb)]('\x20')[__DECODE_0__(0x1dd)]();
    }
    r = s[y][__DECODE_0__(0x1da)]();
    if (!s[y][__DECODE_0__(0x1de)]) {
      this['_y']++;
    }
    return f ? r : +r;
  };
  g['prototype']['l'] = function (f) {
    var s = this['_s'][this['_y']++][__DECODE_0__(0x1eb)]('\x20');
    return f ? s : s[__DECODE_0__(0x1e0)](a => +a);
  };
  g[__DECODE_0__(0x1df)]['m'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0x1d6)](this['_y'], this['_y'] += n)[__DECODE_0__(0x1e0)](a => a[__DECODE_0__(0x1eb)]('\x20'));
    return f ? r : r[__DECODE_0__(0x1e0)](a => a[__DECODE_0__(0x1e0)](a => +a));
  };
  g['prototype']['r'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0x1d6)](this['_y'], this['_y'] += n);
    return f ? r : r[__DECODE_0__(0x1e0)](a => +a);
  };
  return f;
}();
var o = GET(require('fs')[__DECODE_0__(0x1e5)](__DECODE_0__(0x1e6), 'utf8'));
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
console[__DECODE_0__(0x1e2)](main());
function main() {
  var n = o['a']();
  var a = o['l']();
  var ans = a[0x0];
  for (var i = 0x1; i < n; i++) {
    ans = gcd(ans, a[i]);
  }
  return ans;
}
function __STRING_ARRAY__() {
  var _0x22dd0c = ['string', 'readFileSync', '/dev/stdin', '279904alGOQG', '233547uFbQjq', '4487bHKsUz', '532476nfxkRI', 'split', '11fEKrmL', 'slice', '8TTfTnH', '5oakvJX', '107730QIvVZg', 'pop', '45259IibAhn', 'trim', 'reverse', 'length', 'prototype', 'map', '5017190YfWgtM', 'log', '3488KnHBjn'];
  __STRING_ARRAY__ = function () {
    return _0x22dd0c;
  };
  return __STRING_ARRAY__();
}
