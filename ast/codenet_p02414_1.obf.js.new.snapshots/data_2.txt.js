(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x75)) / 0x1 * (parseInt(__DECODE_0__(0x88)) / 0x2) + -parseInt(__DECODE_0__(0x87)) / 0x3 + -parseInt(__DECODE_0__(0x83)) / 0x4 + parseInt(__DECODE_0__(0x77)) / 0x5 + -parseInt(__DECODE_0__(0x82)) / 0x6 * (parseInt(__DECODE_0__(0x7e)) / 0x7) + parseInt(__DECODE_0__(0x7b)) / 0x8 + parseInt(__DECODE_0__(0x79)) / 0x9 * (parseInt(__DECODE_0__(0x73)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2b9de);
function __STRING_ARRAY__() {
  var _0x5441f5 = ['push', 'slice', 'log', '295710cLlrYp', '28JQbzfT', '111750DsFyWn', 'length', '20751FyvcuN', 'map', '1720920wwvHkn', 'join', '54BaqRuE', 'ascii', '323536kzlMSk', 'stdin', 'end', '2215164HUdTGG', 'setEncoding', 'toString', 'split', '6YcXYsW', '594056xummuw'];
  __STRING_ARRAY__ = function () {
    return _0x5441f5;
  };
  return __STRING_ARRAY__();
}
var n;
var m;
var l;
var a;
var b;
var bt;
function __DECODE_0__(fFKDIG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x73;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fFKDIG, key);
}
process[__DECODE_0__(0x7c)][__DECODE_0__(0x7f)](__DECODE_0__(0x7a));
process[__DECODE_0__(0x7c)]['on']('data', function (chunk) {
  var line;
  var ary;
  line = chunk[__DECODE_0__(0x80)]()[__DECODE_0__(0x81)](/\r?\n/);
  for (i in line) {
    ary = line[i][__DECODE_0__(0x81)]('\x20');
    if (ary[__DECODE_0__(0x74)] !== 0x0) {
      line[i] = ary[__DECODE_0__(0x76)](Number);
    }
  }
  n = line[0x0][0x0];
  m = line[0x0][0x1];
  l = line[0x0][0x2];
  a = line[__DECODE_0__(0x85)](0x1, n + 0x1);
  b = line[__DECODE_0__(0x85)](n + 0x1, n + m + 0x1);
});
process[__DECODE_0__(0x7c)]['on'](__DECODE_0__(0x7d), function () {
  var i;
  var j;
  var ci;
  make_b_transpose();
  for (i in a) {
    ci = [];
    for (j in bt) {
      ci[__DECODE_0__(0x84)](inner_product(a[i], bt[j]));
    }
    console[__DECODE_0__(0x86)](ci[__DECODE_0__(0x78)]('\x20'));
  }
});
function make_b_transpose() {
  var j;
  var k;
  var bj;
  bt = [];
  for (j = 0x0; j < l; j++) {
    bj = [];
    for (k = 0x0; k < m; k++) {
      bj['push'](b[k][j]);
    }
    bt[__DECODE_0__(0x84)](bj);
  }
}
function inner_product(a, b) {
  var res = 0x0;
  for (var i in a) {
    res += a[i] * b[i];
  }
  return res;
}
