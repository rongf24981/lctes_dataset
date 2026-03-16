function __STRING_ARRAY__() {
  var _0x382231 = ['4325016mqEuQF', '6214180qoHnXl', '2758QzdRrG', '1016ZgONee', '5236686TFtXSy', 'map', 'split', '1745961UvgAAT', 'readFileSync', 'log', '/dev/stdin', '149238NwJjEs', 'toFixed', '46HkyQls', '1310704aqDtyw', 'slice'];
  __STRING_ARRAY__ = function () {
    return _0x382231;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x17e)) / 0x1 * (-parseInt(__DECODE_0__(0x173)) / 0x2) + parseInt(__DECODE_0__(0x171)) / 0x3 + -parseInt(__DECODE_0__(0x16f)) / 0x4 + -parseInt(__DECODE_0__(0x172)) / 0x5 + -parseInt(__DECODE_0__(0x175)) / 0x6 + -parseInt(__DECODE_0__(0x178)) / 0x7 + -parseInt(__DECODE_0__(0x174)) / 0x8 * (-parseInt(__DECODE_0__(0x17c)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe0320);
function __DECODE_0__(GzwPAV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GzwPAV, key);
}
function Main(input) {
  var input = input[__DECODE_0__(0x177)]('\x0a');
  var arya = input[0x0]['split']('\x20')[__DECODE_0__(0x176)](val => parseInt(val, 0xa))[__DECODE_0__(0x170)](0x0, 0x4);
  var w = arya[0x0];
  var h = arya[0x1];
  var x = arya[0x2];
  var y = arya[0x3];
  if (x == 0x0 & y == 0x0 || x == w && y == h) {
    console['log']((w * h / 0x2)[__DECODE_0__(0x17d)](0x6) + '\x200');
    return !![];
  }
  var a1 = x * h;
  var a2 = (w - x) * h;
  var b1 = y * w;
  var b2 = (h - y) * w;
  var a = a1;
  var b = b1;
  var counter = 0x0;
  if (a1 > a2) {
    a = a2;
  }
  if (b1 > b2) {
    b = b2;
  }
  var reault = a;
  if (a < b) {
    reault = b;
  }
  if (a == b) {
    var counter = 0x1;
  }
  console[__DECODE_0__(0x17a)](reault[__DECODE_0__(0x17d)](0x6) + '\x20' + counter);
}
Main(require('fs')[__DECODE_0__(0x179)](__DECODE_0__(0x17b), 'utf8'));
