function __DECODE_0__(iETTWi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iETTWi, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d6)) / 0x1 * (-parseInt(__DECODE_0__(0x1e1)) / 0x2) + -parseInt(__DECODE_0__(0x1d9)) / 0x3 * (-parseInt(__DECODE_0__(0x1e3)) / 0x4) + -parseInt(__DECODE_0__(0x1de)) / 0x5 + -parseInt(__DECODE_0__(0x1d7)) / 0x6 * (-parseInt(__DECODE_0__(0x1d3)) / 0x7) + -parseInt(__DECODE_0__(0x1e0)) / 0x8 + parseInt(__DECODE_0__(0x1d8)) / 0x9 * (-parseInt(__DECODE_0__(0x1dc)) / 0xa) + parseInt(__DECODE_0__(0x1da)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xefba7);
const main = input => {
  var K = input['trim']()['split']('\x0a')[0x0][__DECODE_0__(0x1e5)]('\x20')[0x3];
  var x = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x0];
  var y = input[__DECODE_0__(0x1d4)]()['split']('\x0a')[0x0][__DECODE_0__(0x1e5)]('\x20')[0x1];
  var z = input[__DECODE_0__(0x1d4)]()[__DECODE_0__(0x1e5)]('\x0a')[0x0][__DECODE_0__(0x1e5)]('\x20')[0x2];
  var a = input['trim']()[__DECODE_0__(0x1e5)]('\x0a')[0x1][__DECODE_0__(0x1e5)]('\x20')[__DECODE_0__(0x1d2)]((a, b) => b - a)['map'](v => v - 0x0);
  var b = input[__DECODE_0__(0x1d4)]()[__DECODE_0__(0x1e5)]('\x0a')[0x2]['split']('\x20')[__DECODE_0__(0x1d2)]((a, b) => b - a)[__DECODE_0__(0x1e4)](v => v - 0x0);
  var c = input[__DECODE_0__(0x1d4)]()[__DECODE_0__(0x1e5)]('\x0a')[0x3]['split']('\x20')[__DECODE_0__(0x1d2)]((a, b) => b - a)[__DECODE_0__(0x1e4)](v => v - 0x0);
  var anss = [];
  var idxa = 0x0;
  var idxb = 0x0;
  var idxc = 0x0;
  var min = 0x0;
  for (var i = 0x0; i < x; i++) {
    for (var j = 0x0; j < y; j++) {
      for (var k = 0x0; k < z; k++) {
        if (i * j * k > K) {
          break;
        }
        var sum = a[i] + b[j] + c[k];
        anss[__DECODE_0__(0x1df)](sum);
      }
    }
  }
  console[__DECODE_0__(0x1e2)](anss[__DECODE_0__(0x1d2)]((a, b) => b - a)['filter']((v, i) => i < K)[__DECODE_0__(0x1d5)]('\x0a'));
};
function __STRING_ARRAY__() {
  var _0x408be7 = ['/dev/stdin', 'sort', '36799tRcBQg', 'trim', 'join', '1zVwNHO', '1680AfwVnN', '7416405jYjGgM', '111DfFRhV', '28437596rgeflL', 'readFileSync', '10WztQGV', 'UTF-8', '7013275rfmKaq', 'push', '2805112lttitJ', '1358756cIgPgK', 'log', '19616ymtDoi', 'map', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x408be7;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1db)](__DECODE_0__(0x1d1), __DECODE_0__(0x1dd)));
