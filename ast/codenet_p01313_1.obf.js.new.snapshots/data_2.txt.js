(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x175)) / 0x1 * (parseInt(__DECODE_0__(0x17f)) / 0x2) + -parseInt(__DECODE_0__(0x17d)) / 0x3 + -parseInt(__DECODE_0__(0x17e)) / 0x4 * (-parseInt(__DECODE_0__(0x182)) / 0x5) + parseInt(__DECODE_0__(0x184)) / 0x6 * (parseInt(__DECODE_0__(0x178)) / 0x7) + -parseInt(__DECODE_0__(0x187)) / 0x8 * (parseInt(__DECODE_0__(0x179)) / 0x9) + -parseInt(__DECODE_0__(0x177)) / 0xa * (parseInt(__DECODE_0__(0x181)) / 0xb) + parseInt(__DECODE_0__(0x185)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7e681);
process[__DECODE_0__(0x186)][__DECODE_0__(0x17c)]();
process['stdin']['setEncoding'](__DECODE_0__(0x183));
function __DECODE_0__(fDRsMw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fDRsMw, key);
}
function __STRING_ARRAY__() {
  var _0x3183f5 = ['8fHeJex', 'split', '6AbwBOJ', 'log', '90840COOqZM', '9023IyvetT', '7641009UlwMbO', 'No\x20cats.', 'pow', 'resume', '679374sgOqht', '3676QHOESB', '280846sHbzRV', 'data', '803wpKdjj', '2425yEvtoM', 'utf8', '3444VWsVWb', '22959468KAQIOx', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x3183f5;
  };
  return __STRING_ARRAY__();
}
var n = -0x1;
function i(d) {
  return Math[__DECODE_0__(0x17b)](0xa, ~~d);
}
var l;
var p;
var c;
var r;
var o;
var a;
var b;
var am;
var bm;
var d;
process['stdin']['on'](__DECODE_0__(0x180), function (ip) {
  p = ip['split']('\x0a');
  l = ~~p[0x0];
  for (c = 0x0; c < l; ++c) {
    r = [];
    o = p[c + 0x1][__DECODE_0__(0x188)]('\x20');
    d = 0x0;
    a = i(o[0x0] - 0x1);
    am = i(o[0x0]) - 0x1;
    for (; a < am; ++a) {
      b = i(o[0x1] - 0x1);
      bm = i(o[0x1]) - 0x1;
      for (; b < bm; ++b) {
        (b * b + b - a * a + a) / 0x2 == '' + a + b && (console[__DECODE_0__(0x176)](a + '\x20' + b), ++d);
      }
    }
    d || console[__DECODE_0__(0x176)](__DECODE_0__(0x17a));
  }
});
