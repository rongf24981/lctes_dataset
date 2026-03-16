(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xae)) / 0x1 * (-parseInt(__DECODE_0__(0xac)) / 0x2) + parseInt(__DECODE_0__(0xa9)) / 0x3 + parseInt(__DECODE_0__(0xa5)) / 0x4 * (parseInt(__DECODE_0__(0xa0)) / 0x5) + parseInt(__DECODE_0__(0xa7)) / 0x6 * (-parseInt(__DECODE_0__(0xad)) / 0x7) + parseInt(__DECODE_0__(0xab)) / 0x8 + -parseInt(__DECODE_0__(0xaa)) / 0x9 + -parseInt(__DECODE_0__(0xa1)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe0f96);
function Main(input) {
  input = input[__DECODE_0__(0xa8)]('\x0a');
  A = parseInt(input[0x0][__DECODE_0__(0xa8)]('\x20')[0x0]);
  B = parseInt(input[0x0]['split']('\x20')[0x1]);
  C = parseInt(input[0x0][__DECODE_0__(0xa8)]('\x20')[0x2]);
  X = parseInt(input[0x0]['split']('\x20')[0x3]);
  Y = parseInt(input[0x0]['split']('\x20')[0x4]);
  var ans = 0x0;
  if (C <= (A + B) / 0x2 && C >= Math['min'](A, B)) {
    if (X <= Y) {
      ans = C * X * 0x2 + B * (Y - X);
    } else {
      ans = C * Y * 0x2 + A * (X - Y);
    }
  } else {
    if (C <= (A + B) / 0x2 && C < Math[__DECODE_0__(0x9f)](A, B)) {
      ans = C * Math['max'](X, Y) * 0x2;
    } else {
      ans = X * A + Y * B;
    }
  }
  console['log']('%s', ans);
}
function debug() {
  var input = document['getElementById']('input')[__DECODE_0__(0xa4)];
  Main(input);
}
function __DECODE_0__(smImoM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(smImoM, key);
}
function __STRING_ARRAY__() {
  var _0x607ebf = ['7qqKgie', '1nNnpIH', 'min', '235JSWktu', '6592240GicVUm', '/dev/stdin', 'utf8', 'value', '22460LiznyZ', 'readFileSync', '7507212ieausn', 'split', '851670fMuyif', '2126466JQNnrR', '9622928NPAMJA', '2635066dprjHI'];
  __STRING_ARRAY__ = function () {
    return _0x607ebf;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xa6)](__DECODE_0__(0xa2), __DECODE_0__(0xa3)));
