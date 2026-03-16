function __DECODE_0__(oyIRcu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oyIRcu, key);
}
function __STRING_ARRAY__() {
  var _0x5f1843 = ['log', '0123456789AabcdefghijklmnopqrstuvwxyzA', '8wXCvfV', 'test', '10230633HyfEsJ', '115xguShv', '7705033ckiMyV', 'split', 'utf8', 'replace', '/dev/stdin', '808447EdeZnv', '20galKyq', '674460RBkwlO', '11EGjYyf', '2IxNzhS', 'trim', 'readFileSync', '21698700MbfroZ', '933020rpGbsH', '241158pNqmXy'];
  __STRING_ARRAY__ = function () {
    return _0x5f1843;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d7)) / 0x1 * (-parseInt(__DECODE_0__(0x1c6)) / 0x2) + parseInt(__DECODE_0__(0x1c4)) / 0x3 * (-parseInt(__DECODE_0__(0x1d8)) / 0x4) + -parseInt(__DECODE_0__(0x1d1)) / 0x5 * (-parseInt(__DECODE_0__(0x1cb)) / 0x6) + -parseInt(__DECODE_0__(0x1d2)) / 0x7 * (parseInt(__DECODE_0__(0x1ce)) / 0x8) + parseInt(__DECODE_0__(0x1d0)) / 0x9 + parseInt(__DECODE_0__(0x1ca)) / 0xa * (-parseInt(__DECODE_0__(0x1c5)) / 0xb) + parseInt(__DECODE_0__(0x1c9)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb55b1);
var input = require('fs')[__DECODE_0__(0x1c8)](__DECODE_0__(0x1d6), __DECODE_0__(0x1d4));
var s = input[__DECODE_0__(0x1c7)]();
var len = s['length'];
var abc = __DECODE_0__(0x1cd)[__DECODE_0__(0x1d3)]('');
var sum = 0x0;
while (!![]) {
  if (s == '') {
    break;
  }
  var cnt = 0x0;
  var flag = ![];
  abc['forEach'](v => {
    var re = new RegExp(v);
    if (re[__DECODE_0__(0x1cf)](s)) {
      if (flag) {
        cnt++;
      }
      flag = !![];
      s = s[__DECODE_0__(0x1d5)](re, '');
    } else {
      if (cnt >= 0x3) {
        sum += cnt - 0x2;
      }
      cnt = 0x0;
      flag = ![];
    }
  });
}
console[__DECODE_0__(0x1cc)](len - sum);
