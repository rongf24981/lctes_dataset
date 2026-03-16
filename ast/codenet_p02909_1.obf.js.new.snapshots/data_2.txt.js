(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x156)) / 0x1 * (-parseInt(__DECODE_0__(0x155)) / 0x2) + parseInt(__DECODE_0__(0x154)) / 0x3 + parseInt(__DECODE_0__(0x159)) / 0x4 + parseInt(__DECODE_0__(0x14c)) / 0x5 + -parseInt(__DECODE_0__(0x148)) / 0x6 * (parseInt(__DECODE_0__(0x153)) / 0x7) + -parseInt(__DECODE_0__(0x151)) / 0x8 + parseInt(__DECODE_0__(0x14a)) / 0x9 * (-parseInt(__DECODE_0__(0x14d)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5360f);
function Main(arg) {
  var N = arg[__DECODE_0__(0x152)]('\x0a')[0x0];
  if (N === 'Sunny') {
    console['log']('Cloudy');
  } else {
    if (N === __DECODE_0__(0x14f)) {
      console[__DECODE_0__(0x150)](__DECODE_0__(0x14b));
    } else {
      if (N === __DECODE_0__(0x14b)) {
        console[__DECODE_0__(0x150)](__DECODE_0__(0x149));
      }
    }
  }
}
function __DECODE_0__(LCUkUy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x148;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LCUkUy, key);
}
Main(require('fs')[__DECODE_0__(0x157)](__DECODE_0__(0x158), __DECODE_0__(0x14e)));
function __STRING_ARRAY__() {
  var _0x1332ab = ['1637748UjlYoL', '2ovRiss', '447759vJSOSG', 'readFileSync', '/dev/stdin', '485816NqmCPJ', '132xsjhKL', 'Sunny', '144252wCIOVO', 'Rainy', '2896695zYtmkh', '310tOUwUt', 'utf8', 'Cloudy', 'log', '4385176FsmmYT', 'split', '97979rYxwuM'];
  __STRING_ARRAY__ = function () {
    return _0x1332ab;
  };
  return __STRING_ARRAY__();
}
