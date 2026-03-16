function __DECODE_0__(hGdhKi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hGdhKi, key);
}
function __STRING_ARRAY__() {
  var _0x32603d = ['56Msclii', '63115nasVVL', 'utf8', 'split', '22536yKKdto', '110nsUpUn', '107830NTOafi', '132fEYqku', '2274108tybhOP', '6075732JOajgm', '18897KopBVi', '/dev/stdin', '232941ooGAWD', 'log', '2793SKumuI', '22vizPhR', '1143ELFBpe'];
  __STRING_ARRAY__ = function () {
    return _0x32603d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d4)) / 0x1 * (parseInt(__DECODE_0__(0x1e0)) / 0x2) + parseInt(__DECODE_0__(0x1d6)) / 0x3 * (parseInt(__DECODE_0__(0x1db)) / 0x4) + -parseInt(__DECODE_0__(0x1dc)) / 0x5 * (-parseInt(__DECODE_0__(0x1e2)) / 0x6) + -parseInt(__DECODE_0__(0x1d8)) / 0x7 * (-parseInt(__DECODE_0__(0x1df)) / 0x8) + parseInt(__DECODE_0__(0x1da)) / 0x9 * (-parseInt(__DECODE_0__(0x1e1)) / 0xa) + parseInt(__DECODE_0__(0x1d9)) / 0xb * (parseInt(__DECODE_0__(0x1e3)) / 0xc) + parseInt(__DECODE_0__(0x1e4)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2291);
(function (stdin) {
  input = stdin[__DECODE_0__(0x1de)]('\x0a');
  var n = parseInt(input[0x0], 0xa);
  var a = input[0x1]['split']('\x20');
  var ans = 0x1;
  var up = ![];
  var down = ![];
  for (var i = 0x0; i < n - 0x1; i++) {
    if (a[i] < a[i + 0x1]) {
      up = !![];
    }
    if (a[i] > a[i + 0x1]) {
      down = !![];
    }
    if (up && down) {
      up = down = ![];
      ans++;
    }
  }
  console[__DECODE_0__(0x1d7)]('%d', ans);
})(require('fs')['readFileSync'](__DECODE_0__(0x1d5), __DECODE_0__(0x1dd)));
