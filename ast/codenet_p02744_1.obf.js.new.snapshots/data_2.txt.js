(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe2)) / 0x1 + -parseInt(__DECODE_0__(0xe9)) / 0x2 + parseInt(__DECODE_0__(0xeb)) / 0x3 + parseInt(__DECODE_0__(0xe1)) / 0x4 + parseInt(__DECODE_0__(0xe5)) / 0x5 + parseInt(__DECODE_0__(0xe3)) / 0x6 * (parseInt(__DECODE_0__(0xe6)) / 0x7) + parseInt(__DECODE_0__(0xe4)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1d2f7);
function Main(input) {
  var N = input[0x0] - 0x0;
  var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  var ans = {
    0x0: [],
    0x1: ['a']
  };
  for (var i = 0x2; i <= N; i++) {
    ans[i] = [];
    var preAns = ans[i - 0x1];
    var nowAns = ans[i];
    preAns[__DECODE_0__(0xea)](preans => {
      var max = 'a';
      preans[__DECODE_0__(0xe0)]('')['forEach'](v => {
        max = max < v ? v : max;
      });
      var endflg = ![];
      for (var i = 0x0; i < list['length'] - 0x1; i++) {
        nowAns['push'](preans + list[i]);
        if (endflg) {
          break;
        }
        if (max == list[i]) {
          endflg = !![];
        }
      }
    });
  }
  console[__DECODE_0__(0xdd)](ans[N]['join']('\x0a'));
}
Main(require('fs')[__DECODE_0__(0xe7)](__DECODE_0__(0xdf), __DECODE_0__(0xde))[__DECODE_0__(0xe8)]()['split']('\x0a'));
function __DECODE_0__(FUVxrf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FUVxrf, key);
}
function __STRING_ARRAY__() {
  var _0x37efef = ['log', 'utf8', '/dev/stdin', 'split', '188608cusJwQ', '137068jRiZTL', '24AyYAhu', '69456vYftRJ', '673085vuSzvb', '162862iAJCwe', 'readFileSync', 'trim', '351528qRNnep', 'forEach', '446580yHpXEF'];
  __STRING_ARRAY__ = function () {
    return _0x37efef;
  };
  return __STRING_ARRAY__();
}
