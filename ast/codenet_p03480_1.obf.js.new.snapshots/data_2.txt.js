function __STRING_ARRAY__() {
  var _0x1510ef = ['1114971JxzCsR', 'prototype', '4621855CCmHaJ', 'length', 'map', '4889508RUijGe', '9741876nUMhin', 'split', '58jIevJS', '142723ITXOsp', 'reverse', 'trim', '232rpaQDj', '3914595CVRnoy', 'slice', 'pop', '/dev/stdin', '54449RTDIOp', 'string'];
  __STRING_ARRAY__ = function () {
    return _0x1510ef;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x141)) / 0x1 * (parseInt(__DECODE_0__(0x138)) / 0x2) + -parseInt(__DECODE_0__(0x143)) / 0x3 + parseInt(__DECODE_0__(0x135)) / 0x4 + -parseInt(__DECODE_0__(0x132)) / 0x5 + parseInt(__DECODE_0__(0x136)) / 0x6 + parseInt(__DECODE_0__(0x139)) / 0x7 * (parseInt(__DECODE_0__(0x13c)) / 0x8) + parseInt(__DECODE_0__(0x13d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf375a);
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this['_s'] = s[__DECODE_0__(0x13b)]()['split']('\x0a');
    this['_y'] = 0x0;
  }
  g[__DECODE_0__(0x131)]['a'] = function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === __DECODE_0__(0x142)) {
      s[y] = s[y]['split']('\x20')[__DECODE_0__(0x13a)]();
    }
    r = s[y][__DECODE_0__(0x13f)]();
    if (!s[y][__DECODE_0__(0x133)]) {
      this['_y']++;
    }
    return f ? r : +r;
  };
  g[__DECODE_0__(0x131)]['l'] = function (f) {
    var s = this['_s'][this['_y']++]['split']('\x20');
    return f ? s : s[__DECODE_0__(0x134)](a => +a);
  };
  g[__DECODE_0__(0x131)]['m'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0x13e)](this['_y'], this['_y'] += n)['map'](a => a[__DECODE_0__(0x137)]('\x20'));
    return f ? r : r['map'](a => a[__DECODE_0__(0x134)](a => +a));
  };
  g[__DECODE_0__(0x131)]['r'] = function (n, f) {
    var r = this['_s'][__DECODE_0__(0x13e)](this['_y'], this['_y'] += n);
    return f ? r : r[__DECODE_0__(0x134)](a => +a);
  };
  return f;
}();
var o = GET(require('fs')['readFileSync'](__DECODE_0__(0x140), 'utf8'));
function __DECODE_0__(NdzEcJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x131;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NdzEcJ, key);
}
console['log'](main());
function main() {
  var s = o['a'](0x1);
  var n = s[__DECODE_0__(0x133)];
  var l = n + 0x1 >> 0x1;
  var u;
  var v = l;
  var f = s[l - 0x1];
  if (n & 0x1) {
    u = l - 0x2;
  } else {
    u = l - 0x1;
  }
  for (; u >= 0x0; u--, v++) {
    if (s[u] !== f || s[v] !== f) {
      break;
    }
    l++;
  }
  return l;
}
