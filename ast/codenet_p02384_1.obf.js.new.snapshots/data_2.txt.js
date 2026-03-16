function __STRING_ARRAY__() {
  var _0x4ad2ff = ['2659566CRvfXs', '28BOFFvJ', 'indexOf', 'log', '285003UZDffr', '3shvsLA', '921625aIauNe', '1040672zeJxvT', 'slice', '20PwjJOh', 'readFileSync', '8qixxxf', '18260077AoIQSg', 'split', '/dev/stdin', '1855566hiAQDl', '263252kYnEnM'];
  __STRING_ARRAY__ = function () {
    return _0x4ad2ff;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jsxIEE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jsxIEE, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc4)) / 0x1 + -parseInt(__DECODE_0__(0xbf)) / 0x2 * (-parseInt(__DECODE_0__(0xc5)) / 0x3) + -parseInt(__DECODE_0__(0xba)) / 0x4 * (parseInt(__DECODE_0__(0xb5)) / 0x5) + -parseInt(__DECODE_0__(0xc0)) / 0x6 + -parseInt(__DECODE_0__(0xc1)) / 0x7 * (parseInt(__DECODE_0__(0xb6)) / 0x8) + parseInt(__DECODE_0__(0xbe)) / 0x9 * (-parseInt(__DECODE_0__(0xb8)) / 0xa) + parseInt(__DECODE_0__(0xbb)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x51109);
ptrn = [[0x0, 0x1, 0x2], [0x0, 0x2, 0x4], [0x0, 0x4, 0x3], [0x0, 0x3, 0x1], [0x1, 0x5, 0x2], [0x1, 0x2, 0x0], [0x1, 0x0, 0x3], [0x1, 0x3, 0x5], [0x2, 0x1, 0x5], [0x2, 0x5, 0x4], [0x2, 0x4, 0x0], [0x2, 0x0, 0x1]];
function dice(num) {
  this['n'] = num;
  this['check'] = function (top, front) {
    top = this['n'][__DECODE_0__(0xc2)](top);
    front = this['n'][__DECODE_0__(0xc2)](front);
    var flag = !![];
    if (top > 0x2) {
      top = 0x5 - top;
      flag = ![];
    }
    for (let i = 0x4 * top; i < 0xc; i++) {
      if (flag && ptrn[i][0x1] === front) {
        console[__DECODE_0__(0xc3)](this['n'][ptrn[i][0x2]]);
        break;
      } else {
        if (!flag && ptrn[i][0x2] === front) {
          console['log'](this['n'][ptrn[i][0x1]]);
          break;
        }
      }
    }
  };
}
function Main(input) {
  input = input[__DECODE_0__(0xbc)]('\x0a');
  var dice_a = new dice(input[0x0]['split']('\x20'));
  input[__DECODE_0__(0xb7)](0x2, 0x2 + Number(input[0x1]))['forEach'](function (d) {
    t = d[__DECODE_0__(0xbc)]('\x20');
    dice_a['check'](t[0x0], t[0x1]);
  });
}
Main(require('fs')[__DECODE_0__(0xb9)](__DECODE_0__(0xbd), 'utf8'));
