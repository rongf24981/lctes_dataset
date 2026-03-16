function __STRING_ARRAY__() {
  var _0x23db71 = ['7237800BOKjPE', 'length', 'split', '3113905QCREqO', '7WECPmd', 'readFileSync', 'replace', '4LVHXiA', '/dev/stdin', '10TYORlU', '1211634EwpLIu', 'log', '567844CRrkrV', 'bust', '10333449ODFcph', '1476972ChTlOj', 'blackjack', 'shift', 'trim', '335934eFbMgB'];
  __STRING_ARRAY__ = function () {
    return _0x23db71;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x98)) / 0x1 + -parseInt(__DECODE_0__(0xa5)) / 0x2 + parseInt(__DECODE_0__(0xa8)) / 0x3 + parseInt(__DECODE_0__(0xa0)) / 0x4 * (parseInt(__DECODE_0__(0x9c)) / 0x5) + parseInt(__DECODE_0__(0xa3)) / 0x6 * (parseInt(__DECODE_0__(0x9d)) / 0x7) + parseInt(__DECODE_0__(0x99)) / 0x8 + parseInt(__DECODE_0__(0xa7)) / 0x9 * (-parseInt(__DECODE_0__(0xa2)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6ec78);
var input = require('fs')[__DECODE_0__(0x9e)](__DECODE_0__(0xa1), 'utf8');
input = input[__DECODE_0__(0x9f)](/T|J|Q|K/g, '10');
input = input[__DECODE_0__(0x9f)](/A/g, '11');
var arr = input[__DECODE_0__(0xab)]()[__DECODE_0__(0x9b)]('\x0a');
var n = arr[__DECODE_0__(0xaa)]() - 0x0;
function __DECODE_0__(AHhbnw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x98;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AHhbnw, key);
}
while (n--) {
  var a = arr['shift']()[__DECODE_0__(0x9b)]('\x20')['map'](Number);
  var b = arr[__DECODE_0__(0xaa)]()[__DECODE_0__(0x9b)]('\x20')['map'](Number);
  var flag = ![];
  var sum = a[0x0] + a[0x1];
  if (a[0x0] == 0xb || a[0x1] == 0xb) {
    flag = !![];
  }
  if (sum == 0x15) {
    console[__DECODE_0__(0xa4)](__DECODE_0__(0xa9));
    continue;
  }
  var ans = '';
  for (var i = 0x0; i < b[__DECODE_0__(0x9a)]; i++) {
    if (sum <= 0x10) {
      if (b[i] == 0xb) {
        flag = !![];
      }
      if (b[i] == 0xb && sum + 0xb > 0x15) {
        b[i] = 0x1;
      }
      sum += b[i];
    } else {
      if (sum == 0x11 && flag) {
        if (b[i] == 0xb) {
          flag = !![];
        }
        if (b[i] == 0xb && sum + 0xb > 0x15) {
          b[i] = 0x1;
        }
        sum += b[i];
      } else {
        break;
      }
    }
  }
  if (sum > 0x15) {
    sum = __DECODE_0__(0xa6);
  }
  console[__DECODE_0__(0xa4)](sum);
}
