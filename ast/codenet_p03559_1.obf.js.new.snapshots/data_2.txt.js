(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x180)) / 0x1 + parseInt(__DECODE_0__(0x177)) / 0x2 + parseInt(__DECODE_0__(0x183)) / 0x3 * (-parseInt(__DECODE_0__(0x178)) / 0x4) + parseInt(__DECODE_0__(0x181)) / 0x5 * (-parseInt(__DECODE_0__(0x187)) / 0x6) + -parseInt(__DECODE_0__(0x17c)) / 0x7 * (parseInt(__DECODE_0__(0x175)) / 0x8) + -parseInt(__DECODE_0__(0x17f)) / 0x9 * (-parseInt(__DECODE_0__(0x17d)) / 0xa) + parseInt(__DECODE_0__(0x182)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbd06a);
function __DECODE_0__(ouurdr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ouurdr, key);
}
function __STRING_ARRAY__() {
  var _0x428001 = ['split', '197742ULBiFL', '436292njXDxL', 'utf8', 'sort', 'map', '7DqSXsQ', '5973340RzDats', 'trim', '9wrCJWS', '677389dDVoNv', '9885nkTXJp', '30009452kxUDZN', '33YazhyL', 'from', 'readFileSync', 'max', '1656XCSTGD', '1817944YioDGP'];
  __STRING_ARRAY__ = function () {
    return _0x428001;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x17e)]()[__DECODE_0__(0x176)]('\x0a')[__DECODE_0__(0x17b)](function (x) {
    return x['split']('\x20');
  });
  var N = parseInt(input[0x0][0x0], 0xa);
  var vec_A = input[0x1][__DECODE_0__(0x17b)](e => parseInt(e, 0xa));
  var vec_B = input[0x2][__DECODE_0__(0x17b)](e => parseInt(e, 0xa));
  var vec_C = input[0x3][__DECODE_0__(0x17b)](e => parseInt(e, 0xa));
  function compareFunc(a, b) {
    return b - a;
  }
  vec_A[__DECODE_0__(0x17a)](compareFunc);
  vec_B[__DECODE_0__(0x17a)](compareFunc);
  vec_C[__DECODE_0__(0x17a)](compareFunc);
  var s = 0x0;
  var t = -0x1;
  var vec_sumB = Array[__DECODE_0__(0x184)]({
    'length': N
  }, () => 0x0);
  var tmpAdj = 0x0;
  var ans = 0x0;
  for (var i = 0x0; i < N; i++) {
    while (s < N && vec_B[s] > vec_A[i]) {
      while (t < N - 0x1 && vec_C[t + 0x1] > vec_B[s]) {
        t++;
      }
      if (s > 0x0) {
        tmpAdj = vec_sumB[s - 0x1];
      } else {
        tmpAdj = 0x0;
      }
      vec_sumB[s] = tmpAdj + t + 0x1;
      s++;
    }
    s = Math[__DECODE_0__(0x186)](0x0, s - 0x1);
    ans += vec_sumB[s];
  }
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0x185)]('/dev/stdin', __DECODE_0__(0x179)));
