function __DECODE_0__(qqZzYb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qqZzYb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc3)) / 0x1 * (-parseInt(__DECODE_0__(0xc2)) / 0x2) + parseInt(__DECODE_0__(0xc5)) / 0x3 * (parseInt(__DECODE_0__(0xbe)) / 0x4) + -parseInt(__DECODE_0__(0xc9)) / 0x5 + -parseInt(__DECODE_0__(0xc6)) / 0x6 + -parseInt(__DECODE_0__(0xc4)) / 0x7 + parseInt(__DECODE_0__(0xc1)) / 0x8 * (-parseInt(__DECODE_0__(0xca)) / 0x9) + -parseInt(__DECODE_0__(0xc8)) / 0xa * (-parseInt(__DECODE_0__(0xc7)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4b91a);
function Main(input) {
  input = input['split']('\x0a');
  var N = parseInt(input[0x0], 0xa);
  if (parseInt(N / 0xa) === 0x0) {
    console[__DECODE_0__(0xcc)](__DECODE_0__(0xcb));
    return;
  }
  var Sum = 0x0;
  var Mod = N;
  for (var i = 0x5f5e100; i >= 0xa; i = i / 0xa) {
    Sum += parseInt(Mod / i);
    Mod = Mod % i;
  }
  Sum += Mod;
  if (N % Sum === 0x0) {
    console['log']('Yes');
  } else {
    console[__DECODE_0__(0xcc)]('No');
  }
}
function __STRING_ARRAY__() {
  var _0x3b626c = ['1944025catFkT', '9VIRBAt', 'Yes', 'log', '12NCdBxD', '/dev/stdin', 'readFileSync', '2213912ApSWNy', '40842JnjbyX', '30xmZBzF', '2796332pYCykp', '265458usjgrc', '3657870cOebUc', '11MvLHNg', '23313670pPZNLF'];
  __STRING_ARRAY__ = function () {
    return _0x3b626c;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xc0)](__DECODE_0__(0xbf), 'utf8'));
