(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e9)) / 0x1 * (-parseInt(__DECODE_0__(0x1eb)) / 0x2) + -parseInt(__DECODE_0__(0x1ea)) / 0x3 * (parseInt(__DECODE_0__(0x1dc)) / 0x4) + -parseInt(__DECODE_0__(0x1e5)) / 0x5 + -parseInt(__DECODE_0__(0x1e4)) / 0x6 * (-parseInt(__DECODE_0__(0x1e2)) / 0x7) + parseInt(__DECODE_0__(0x1dd)) / 0x8 + -parseInt(__DECODE_0__(0x1e1)) / 0x9 * (parseInt(__DECODE_0__(0x1e7)) / 0xa) + parseInt(__DECODE_0__(0x1e8)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8e612);
function Main(input) {
  var input = input['split']('\x20');
  var n = input[0x0];
  var a = input[0x1];
  var b = input[0x2];
  var Sum = 0x0;
  for (j = 0x1; j <= n; j++) {
    if (0x0 <= j && j <= 0x9) {
      if (a <= j && j <= b) {
        Sum += j;
      }
    } else {
      var str = j['toString']();
      var arr = str['split']('')[__DECODE_0__(0x1e6)](n => parseInt(n));
      var x = arr['reduce'](function (prev, current, i, arr) {
        return prev + current;
      });
    }
    ;
    if (a <= x && x <= b) {
      Sum += j;
    }
  }
  console[__DECODE_0__(0x1e0)](Sum);
}
function __STRING_ARRAY__() {
  var _0x11f138 = ['readFileSync', 'utf8', 'log', '234iGoCKE', '230559deIZoA', '/dev/stdin', '72NrJZux', '4736095naPFSf', 'map', '342340mpIuYE', '10542499nNMGPU', '4hPRYXS', '3tUjeGs', '556898rLqxoh', '4249212kQDNGa', '8122744wlyQDI'];
  __STRING_ARRAY__ = function () {
    return _0x11f138;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XnFoda, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1dc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XnFoda, key);
}
Main(require('fs')[__DECODE_0__(0x1de)](__DECODE_0__(0x1e3), __DECODE_0__(0x1df)));
