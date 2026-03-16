var a0_0x2947da = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x117ace = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x117ace(0x180)) / 0x1 + parseInt(_0x117ace(0x177)) / 0x2 + parseInt(_0x117ace(0x183)) / 0x3 * (-parseInt(_0x117ace(0x178)) / 0x4) + parseInt(_0x117ace(0x181)) / 0x5 * (-parseInt(_0x117ace(0x187)) / 0x6) + -parseInt(_0x117ace(0x17c)) / 0x7 * (parseInt(_0x117ace(0x175)) / 0x8) + -parseInt(_0x117ace(0x17f)) / 0x9 * (-parseInt(_0x117ace(0x17d)) / 0xa) + parseInt(_0x117ace(0x182)) / 0xb;
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
  var _0x2bf928 = __DECODE_0__;
  input = input[_0x2bf928(0x17e)]()[_0x2bf928(0x176)]('\x0a')[_0x2bf928(0x17b)](function (x) {
    return x['split']('\x20');
  });
  var N = parseInt(input[0x0][0x0], 0xa);
  var vec_A = input[0x1][_0x2bf928(0x17b)](e => parseInt(e, 0xa));
  var vec_B = input[0x2][_0x2bf928(0x17b)](e => parseInt(e, 0xa));
  var vec_C = input[0x3][_0x2bf928(0x17b)](e => parseInt(e, 0xa));
  function compareFunc(a, b) {
    return b - a;
  }
  vec_A[_0x2bf928(0x17a)](compareFunc);
  vec_B[_0x2bf928(0x17a)](compareFunc);
  vec_C[_0x2bf928(0x17a)](compareFunc);
  var s = 0x0;
  var t = -0x1;
  var vec_sumB = Array[_0x2bf928(0x184)]({
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
    s = Math[_0x2bf928(0x186)](0x0, s - 0x1);
    ans += vec_sumB[s];
  }
  console['log'](ans);
}
Main(require('fs')[a0_0x2947da(0x185)]('/dev/stdin', a0_0x2947da(0x179)));
