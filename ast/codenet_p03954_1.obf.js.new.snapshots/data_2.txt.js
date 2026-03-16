(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1b6)) / 0x1 + parseInt(__DECODE_0__(0x1b8)) / 0x2 * (-parseInt(__DECODE_0__(0x1a8)) / 0x3) + -parseInt(__DECODE_0__(0x1b5)) / 0x4 * (-parseInt(__DECODE_0__(0x1b2)) / 0x5) + parseInt(__DECODE_0__(0x1ab)) / 0x6 * (-parseInt(__DECODE_0__(0x1ae)) / 0x7) + parseInt(__DECODE_0__(0x1af)) / 0x8 * (parseInt(__DECODE_0__(0x1b4)) / 0x9) + -parseInt(__DECODE_0__(0x1b3)) / 0xa * (parseInt(__DECODE_0__(0x1b7)) / 0xb) + parseInt(__DECODE_0__(0x1b1)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd66b9);
function __STRING_ARRAY__() {
  var _0x2dc147 = ['259270DIZtoN', '15066yEirNO', '3819844eDIRCn', '317541OEIHGq', '198ZnNLNa', '8402zuTjHI', 'length', '3JSOotl', 'split', '/dev/stdin', '114ztdxlL', 'utf8', 'log', '87717spaExX', '712bWpeme', 'readFileSync', '1989036MFDuvW', '5zdhYzY'];
  __STRING_ARRAY__ = function () {
    return _0x2dc147;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x1a9)]('\x0a');
  tmp = input[0x1][__DECODE_0__(0x1a9)]('\x20');
  var N = parseInt(input[0x0], 0xa);
  var array_N = new Array(0x2 * N - 0x1);
  for (var i = 0x0; i < array_N[__DECODE_0__(0x1b9)]; i++) {
    array_N[i] = parseInt(tmp[i], 0xa);
  }
  function getArrayNext(array_i) {
    array_i_next = new Array(array_i[__DECODE_0__(0x1b9)] - 0x2);
    for (var j = 0x0; j < array_i_next[__DECODE_0__(0x1b9)]; j++) {
      var small_array = array_i['slice'](j, j + 0x3);
      array_i_next[j] = small_array['sort'](function (a, b) {
        return a < b ? -0x1 : 0x1;
      })[0x1];
    }
    return array_i_next;
  }
  var array_i = array_N;
  while (array_i['length'] > 0x1) {
    array_i = getArrayNext(array_i);
  }
  console[__DECODE_0__(0x1ad)](array_i[0x0]);
}
function __DECODE_0__(mSKZfh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mSKZfh, key);
}
Main(require('fs')[__DECODE_0__(0x1b0)](__DECODE_0__(0x1aa), __DECODE_0__(0x1ac)));
