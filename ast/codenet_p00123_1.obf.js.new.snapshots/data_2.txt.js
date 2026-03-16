function __STRING_ARRAY__() {
  var _0x4afbaa = ['35632490cFpHRy', '6720504KvnXPV', 'split', 'utf8', '/dev/stdin', '5XYXtsx', 'map', '8763314JhHOce', 'forEach', '6PEEygO', '1141004ZKEBlN', 'AAA', '3187941GcalbX', '1234270IPHQVW', '18WBqcbO', '22kXqSKk', '6870708fTGDgt', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x4afbaa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb3)) / 0x1 + parseInt(__DECODE_0__(0xb6)) / 0x2 + -parseInt(__DECODE_0__(0xb5)) / 0x3 + -parseInt(__DECODE_0__(0xb9)) / 0x4 * (parseInt(__DECODE_0__(0xae)) / 0x5) + parseInt(__DECODE_0__(0xb2)) / 0x6 * (-parseInt(__DECODE_0__(0xb0)) / 0x7) + parseInt(__DECODE_0__(0xaa)) / 0x8 * (-parseInt(__DECODE_0__(0xb7)) / 0x9) + parseInt(__DECODE_0__(0xbb)) / 0xa * (parseInt(__DECODE_0__(0xb8)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd95a5);
function __DECODE_0__(XNHAmQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xaa;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XNHAmQ, key);
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xad), __DECODE_0__(0xac));
var Arr = input[__DECODE_0__(0xba)]()[__DECODE_0__(0xab)]('\x0a');
Arr[__DECODE_0__(0xb1)](function (v) {
  var arr = v['split']('\x20')[__DECODE_0__(0xaf)](Number);
  var a = arr[0x0];
  var b = arr[0x1];
  var ans;
  if (35.5 > a && 0x47 > b) {
    ans = __DECODE_0__(0xb4);
  } else {
    if (37.5 > a && 0x4d > b) {
      ans = 'AA';
    } else {
      if (0x28 > a && 0x53 > b) {
        ans = 'A';
      } else {
        if (0x2b > a && 0x59 > b) {
          ans = 'B';
        } else {
          if (0x32 > a && 0x69 > b) {
            ans = 'C';
          } else {
            if (0x37 > a && 0x74 > b) {
              ans = 'D';
            } else {
              if (0x46 > a && 0x94 > b) {
                ans = 'E';
              } else {
                ans = 'NA';
              }
            }
          }
        }
      }
    }
  }
  console['log'](ans);
});
