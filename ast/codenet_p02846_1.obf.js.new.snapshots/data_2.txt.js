function __DECODE_0__(wdZkfA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wdZkfA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x71)) / 0x1 + -parseInt(__DECODE_0__(0x70)) / 0x2 + parseInt(__DECODE_0__(0x6b)) / 0x3 + parseInt(__DECODE_0__(0x6d)) / 0x4 + parseInt(__DECODE_0__(0x6c)) / 0x5 + -parseInt(__DECODE_0__(0x72)) / 0x6 * (-parseInt(__DECODE_0__(0x73)) / 0x7) + -parseInt(__DECODE_0__(0x77)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb2bce);
function __STRING_ARRAY__() {
  var _0x471724 = ['168VIneLH', '13153rlNOXR', 'utf8', 'log', 'readFileSync', '2530896AFaITD', '1971669HPHWSY', '3838085DBzzYi', '4969356SAGSEY', '/dev/stdin', 'split', '816850MTMbbC', '1262894neODmM'];
  __STRING_ARRAY__ = function () {
    return _0x471724;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x6f)]('\x0a');
  var T = input[0x0][__DECODE_0__(0x6f)]('\x20');
  var A = input[0x1][__DECODE_0__(0x6f)]('\x20');
  var B = input[0x2]['split']('\x20');
  for (var i = 0x0; i < 0x2; i++) {
    T[i] = Number(T[i]);
    A[i] = Number(A[i]);
    B[i] = Number(B[i]);
  }
  var sa = new Array(0x2);
  sa[0x0] = T[0x0] * A[0x0] - T[0x0] * B[0x0];
  sa[0x1] = T[0x1] * A[0x1] - T[0x1] * B[0x1];
  var x = 0x0;
  var xmae = 0x1;
  var pm = 0x0;
  var count = -0x1;
  if (sa[0x0] == sa[0x1] * -0x1) {
    console[__DECODE_0__(0x75)]('infinity');
  } else {
    for (var i = 0x0; i < 0x1; i) {
      count++;
      xmae = x;
      x += sa[count % 0x2];
      if (x * xmae > 0x0) {
        i = 0x1;
      } else {
        if (x == 0x0) {
          i = 0x1;
          count++;
        }
      }
    }
    console['log'](count - 0x1);
  }
}
Main(require('fs')[__DECODE_0__(0x76)](__DECODE_0__(0x6e), __DECODE_0__(0x74)));
