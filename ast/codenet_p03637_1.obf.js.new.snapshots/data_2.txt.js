(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x174)) / 0x1 * (-parseInt(__DECODE_0__(0x16c)) / 0x2) + parseInt(__DECODE_0__(0x175)) / 0x3 + parseInt(__DECODE_0__(0x16f)) / 0x4 * (parseInt(__DECODE_0__(0x16e)) / 0x5) + -parseInt(__DECODE_0__(0x170)) / 0x6 * (-parseInt(__DECODE_0__(0x16d)) / 0x7) + parseInt(__DECODE_0__(0x177)) / 0x8 + -parseInt(__DECODE_0__(0x173)) / 0x9 * (parseInt(__DECODE_0__(0x179)) / 0xa) + -parseInt(__DECODE_0__(0x176)) / 0xb * (parseInt(__DECODE_0__(0x171)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x87d15);
function __STRING_ARRAY__() {
  var _0x1e506b = ['readFileSync', '8083660sBYqQj', 'Yes', '/dev/stdin', '388XmdCIg', '74361udeVQh', '129555rNuFFo', '136dFHVBb', '66oBFvoi', '1680klZEwD', 'split', '9VWNmYJ', '3989NXlRzs', '2827170uNuUiY', '157333bNjGpk', '5224096SFTKet'];
  __STRING_ARRAY__ = function () {
    return _0x1e506b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(TDZnkf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TDZnkf, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x172)]('\x0a');
  var n = parseInt(input[0x0]);
  tmp = input[0x1]['split']('\x20');
  a = new Array(n);
  var odd = 0x0;
  var even = 0x0;
  var four = 0x0;
  for (i = 0x0; i < n; i++) {
    a[i] = parseInt(tmp[i]);
    if (a[i] % 0x4 == 0x0) {
      four++;
    } else {
      if (a[i] % 0x2 == 0x0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  var ans = 'No';
  if (odd <= four) {
    ans = __DECODE_0__(0x17a);
  } else {
    if (four + 0x1 == odd && even == 0x0) {
      ans = __DECODE_0__(0x17a);
    }
  }
  console['log']('%s', ans);
}
Main(require('fs')[__DECODE_0__(0x178)](__DECODE_0__(0x17b), 'utf8'));
