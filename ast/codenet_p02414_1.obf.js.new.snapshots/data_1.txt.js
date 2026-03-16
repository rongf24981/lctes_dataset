var a0_0xa33362 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x2fcbba = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x2fcbba(0x75)) / 0x1 * (parseInt(_0x2fcbba(0x88)) / 0x2) + -parseInt(_0x2fcbba(0x87)) / 0x3 + -parseInt(_0x2fcbba(0x83)) / 0x4 + parseInt(_0x2fcbba(0x77)) / 0x5 + -parseInt(_0x2fcbba(0x82)) / 0x6 * (parseInt(_0x2fcbba(0x7e)) / 0x7) + parseInt(_0x2fcbba(0x7b)) / 0x8 + parseInt(_0x2fcbba(0x79)) / 0x9 * (parseInt(_0x2fcbba(0x73)) / 0xa);
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
process[a0_0xa33362(0x7c)][a0_0xa33362(0x7f)](a0_0xa33362(0x7a));
process[a0_0xa33362(0x7c)]['on']('data', function (chunk) {
  var _0x1e006b = a0_0xa33362;
  var line;
  var ary;
  line = chunk[_0x1e006b(0x80)]()[_0x1e006b(0x81)](/\r?\n/);
  for (i in line) {
    ary = line[i][_0x1e006b(0x81)]('\x20');
    if (ary[_0x1e006b(0x74)] !== 0x0) {
      line[i] = ary[_0x1e006b(0x76)](Number);
    }
  }
  n = line[0x0][0x0];
  m = line[0x0][0x1];
  l = line[0x0][0x2];
  a = line[_0x1e006b(0x85)](0x1, n + 0x1);
  b = line[_0x1e006b(0x85)](n + 0x1, n + m + 0x1);
});
process[a0_0xa33362(0x7c)]['on'](a0_0xa33362(0x7d), function () {
  var _0x2b347b = a0_0xa33362;
  var i;
  var j;
  var ci;
  make_b_transpose();
  for (i in a) {
    ci = [];
    for (j in bt) {
      ci[_0x2b347b(0x84)](inner_product(a[i], bt[j]));
    }
    console[_0x2b347b(0x86)](ci[_0x2b347b(0x78)]('\x20'));
  }
});
function make_b_transpose() {
  var _0x4108a7 = a0_0xa33362;
  var j;
  var k;
  var bj;
  bt = [];
  for (j = 0x0; j < l; j++) {
    bj = [];
    for (k = 0x0; k < m; k++) {
      bj['push'](b[k][j]);
    }
    bt[_0x4108a7(0x84)](bj);
  }
}
function inner_product(a, b) {
  var res = 0x0;
  for (var i in a) {
    res += a[i] * b[i];
  }
  return res;
}
