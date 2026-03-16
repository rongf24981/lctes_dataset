function __DECODE_0__(PlkUxU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PlkUxU, key);
}
function __STRING_ARRAY__() {
  var _0x9cd3e2 = ['2114cZVNie', '518627MNNslh', '/dev/stdin', '4758485SjvQGk', '42595820swpfdC', 'map', 'pop', '2598noQpgg', 'max', 'readFileSync', '2869264eJYmQo', '18wsbGDS', '6903MwhCRa', '2439032mxfTdA', 'reverse', 'length', 'utf8', 'split', '782hAXUpy', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x9cd3e2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb0)) / 0x1 + parseInt(__DECODE_0__(0xad)) / 0x2 * (-parseInt(__DECODE_0__(0xbb)) / 0x3) + -parseInt(__DECODE_0__(0xb9)) / 0x4 + -parseInt(__DECODE_0__(0xb2)) / 0x5 + -parseInt(__DECODE_0__(0xb6)) / 0x6 * (-parseInt(__DECODE_0__(0xaf)) / 0x7) + -parseInt(__DECODE_0__(0xa8)) / 0x8 * (parseInt(__DECODE_0__(0xba)) / 0x9) + parseInt(__DECODE_0__(0xb3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa940b);
function gets(str) {
  this['_s'] = str['split']('\x0a');
  this['_y'] = 0x0;
}
;
gets['prototype'] = {
  'a': function (f) {
    var s = this['_s'];
    var y = this['_y'];
    var r;
    if (typeof s[y] === 'string') {
      s[y] = s[y][__DECODE_0__(0xac)]('\x20')[__DECODE_0__(0xa9)]();
    }
    r = s[y][__DECODE_0__(0xb5)]();
    if (!s[y]['length']) {
      this['_y']++;
    }
    return f ? r : +r;
  },
  'l': function (f) {
    var s = this['_s'][this['_y']++]['split']('\x20');
    return f ? s : s['map'](a => +a);
  },
  'm': function (n, f) {
    var s = this['_s'];
    var y = this['_y'];
    var r = [];
    var i = 0x0;
    if (f) {
      for (; i < n; i++) {
        r[i] = s[y + i][__DECODE_0__(0xac)]('\x20');
      }
    } else {
      for (; i < n; i++) {
        r[i] = s[y + i][__DECODE_0__(0xac)]('\x20')[__DECODE_0__(0xb4)](a => +a);
      }
    }
    this['_y'] += n;
    return r;
  }
};
var o = new gets(require('fs')[__DECODE_0__(0xb8)](__DECODE_0__(0xb1), __DECODE_0__(0xab)));
console['log'](main());
function main() {
  var n = o['a']();
  var a = o['l']();
  var b = [];
  if (n <= 0x2) {
    return Math[__DECODE_0__(0xb7)](...a);
  }
  for (var i = 0x0; i < n - 0x1; i++) {
    a[n + i] = Math[__DECODE_0__(0xb7)](a[i], a[i + 0x1]);
  }
  return middle(a);
  function middle(a) {
    a[__DECODE_0__(0xae)]((a, b) => a - b);
    return a[a[__DECODE_0__(0xaa)] >> 0x1];
  }
}
