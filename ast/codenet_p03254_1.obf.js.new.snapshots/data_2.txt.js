function __STRING_ARRAY__() {
  var _0x493bb1 = ['366012DTeunM', 'map', '438808TsaYrx', '6340880CfUjNL', '3YjnGQq', '58GRNAFk', '1856056ojJFpE', '33869280UTwhws', 'utf8', 'split', 'log', '28954spOtCn', '279MjcZEY', '/dev/stdin', '6497127ZTlVdp'];
  __STRING_ARRAY__ = function () {
    return _0x493bb1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RVgFBC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RVgFBC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xd3)) / 0x1 * (parseInt(__DECODE_0__(0xca)) / 0x2) + parseInt(__DECODE_0__(0xd2)) / 0x3 * (parseInt(__DECODE_0__(0xc5)) / 0x4) + -parseInt(__DECODE_0__(0xd1)) / 0x5 + -parseInt(__DECODE_0__(0xce)) / 0x6 + parseInt(__DECODE_0__(0xcd)) / 0x7 + parseInt(__DECODE_0__(0xd0)) / 0x8 * (-parseInt(__DECODE_0__(0xcb)) / 0x9) + parseInt(__DECODE_0__(0xc6)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xde236);
function Main(input) {
  input = input['split']('\x0a');
  var N = Number(input[0x0][__DECODE_0__(0xc8)]('\x20')[0x0]);
  var x = Number(input[0x0][__DECODE_0__(0xc8)]('\x20')[0x1]);
  var a = input[0x1][__DECODE_0__(0xc8)]('\x20')[__DECODE_0__(0xcf)](a => Number(a))['sort']((a, b) => a - b);
  var match = 0x0;
  var left = 0x0;
  for (var i = 0x0; i < N; i++) {
    if (x - a[i] >= 0x0) {
      x = x - a[i];
      match++;
    } else {
      break;
    }
  }
  if (x > 0x0 && match != 0x0) {
    match--;
  }
  console[__DECODE_0__(0xc9)](match);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xcc), __DECODE_0__(0xc7)));
