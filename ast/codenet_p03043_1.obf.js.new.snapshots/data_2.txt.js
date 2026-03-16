function __STRING_ARRAY__() {
  var _0x10d917 = ['350496DMIVMg', '368450PelsMv', '163912slenST', 'split', '11371984igpBGg', 'slice', '3534828gmVhvo', '1031820NNDgaB', 'log', '35LFEYkX', 'readFileSync', 'map', '3707081yUBrCN', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x10d917;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kqRSdM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kqRSdM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f4)) / 0x1 + -parseInt(__DECODE_0__(0x1ec)) / 0x2 + -parseInt(__DECODE_0__(0x1f3)) / 0x3 + -parseInt(__DECODE_0__(0x1f5)) / 0x4 * (-parseInt(__DECODE_0__(0x1ee)) / 0x5) + -parseInt(__DECODE_0__(0x1eb)) / 0x6 + -parseInt(__DECODE_0__(0x1f1)) / 0x7 + parseInt(__DECODE_0__(0x1e9)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4f6d3);
function main(input) {
  input = input[__DECODE_0__(0x1e8)]('\x20')[__DECODE_0__(0x1f0)](Number);
  const N = input[0x0];
  const K = input[0x1];
  var result = 0x0;
  for (i = 0x1; i <= N; i++) {
    var tmp = 0x1 / N;
    var now = i;
    while (now < K) {
      now *= 0x2;
      tmp /= 0x2;
    }
    result += tmp;
  }
  console[__DECODE_0__(0x1ed)](result['toString']()[__DECODE_0__(0x1ea)](0x0, 0xe));
}
main(require('fs')[__DECODE_0__(0x1ef)]('/dev/stdin', __DECODE_0__(0x1f2)));
