(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc3)) / 0x1 * (-parseInt(__DECODE_0__(0xc5)) / 0x2) + parseInt(__DECODE_0__(0xcb)) / 0x3 * (-parseInt(__DECODE_0__(0xc2)) / 0x4) + -parseInt(__DECODE_0__(0xcd)) / 0x5 + parseInt(__DECODE_0__(0xc9)) / 0x6 + -parseInt(__DECODE_0__(0xc6)) / 0x7 + parseInt(__DECODE_0__(0xd0)) / 0x8 + parseInt(__DECODE_0__(0xc1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcf395);
var input = require('fs')[__DECODE_0__(0xc7)](__DECODE_0__(0xcf), __DECODE_0__(0xc8));
function __STRING_ARRAY__() {
  var _0x5dfd6f = ['/dev/stdin', '2300728abbvuR', '6484149hoCWlz', '4PldNnB', '312034NIVHyW', 'map', '10qyvJNb', '11136881dHefhW', 'readFileSync', 'utf8', '2998230xLQVrr', 'MTSH', '913863OlVLpd', 'split', '1617670UHHMQk', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x5dfd6f;
  };
  return __STRING_ARRAY__();
}
var [e, y] = input['trim']()[__DECODE_0__(0xcc)]('\x20')[__DECODE_0__(0xc4)](Number);
function __DECODE_0__(OqHNBB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OqHNBB, key);
}
var mtsh = __DECODE_0__(0xca)[__DECODE_0__(0xcc)]('');
if (e == 0x0) {
  if (y >= 0x74c && y <= 0x777) {
    e = 0x1;
    y -= 0x74c;
  } else {
    if (y >= 0x778 && y <= 0x785) {
      e = 0x2;
      y -= 0x778;
    } else {
      if (y >= 0x786 && y <= 0x7c4) {
        e = 0x3;
        y -= 0x786;
      } else {
        if (y >= 0x7c5 && y <= 0x7e0) {
          e = 0x4;
          y -= 0x7c5;
        }
      }
    }
  }
  console[__DECODE_0__(0xce)](mtsh[e - 0x1] + (y + 0x1));
} else {
  if (e == 0x1) {
    console[__DECODE_0__(0xce)](0x74c + y - 0x1);
  } else {
    if (e == 0x2) {
      console['log'](0x778 + y - 0x1);
    } else {
      if (e == 0x3) {
        console['log'](0x786 + y - 0x1);
      } else {
        if (e == 0x4) {
          console[__DECODE_0__(0xce)](0x7c5 + y - 0x1);
        }
      }
    }
  }
}
