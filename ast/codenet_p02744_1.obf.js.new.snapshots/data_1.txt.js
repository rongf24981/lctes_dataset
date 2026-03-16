var a0_0x4c2621 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4d01a7 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4d01a7(0xe2)) / 0x1 + -parseInt(_0x4d01a7(0xe9)) / 0x2 + parseInt(_0x4d01a7(0xeb)) / 0x3 + parseInt(_0x4d01a7(0xe1)) / 0x4 + parseInt(_0x4d01a7(0xe5)) / 0x5 + parseInt(_0x4d01a7(0xe3)) / 0x6 * (parseInt(_0x4d01a7(0xe6)) / 0x7) + parseInt(_0x4d01a7(0xe4)) / 0x8;
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
  var _0x30bc97 = __DECODE_0__;
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
    preAns[_0x30bc97(0xea)](preans => {
      var _0x2aa48c = _0x30bc97;
      var max = 'a';
      preans[_0x2aa48c(0xe0)]('')['forEach'](v => {
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
  console[_0x30bc97(0xdd)](ans[N]['join']('\x0a'));
}
Main(require('fs')[a0_0x4c2621(0xe7)](a0_0x4c2621(0xdf), a0_0x4c2621(0xde))[a0_0x4c2621(0xe8)]()['split']('\x0a'));
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
