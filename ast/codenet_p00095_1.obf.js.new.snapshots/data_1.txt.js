var a0_0x11aab6 = __DECODE_0__;
function __DECODE_0__(bYjrFz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bYjrFz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x627481 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x627481(0x8b)) / 0x1 * (parseInt(_0x627481(0x89)) / 0x2) + -parseInt(_0x627481(0x7e)) / 0x3 * (parseInt(_0x627481(0x86)) / 0x4) + parseInt(_0x627481(0x8a)) / 0x5 + parseInt(_0x627481(0x81)) / 0x6 + parseInt(_0x627481(0x88)) / 0x7 * (parseInt(_0x627481(0x80)) / 0x8) + parseInt(_0x627481(0x7d)) / 0x9 + -parseInt(_0x627481(0x84)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4242c);
function __STRING_ARRAY__() {
  var _0x2c5470 = ['617ObkbYY', '1285344cjXXjH', '10923FVQmfx', 'split', '17288EafJmQ', '2075994QHhorU', '/dev/stdin', 'shift', '5440630cCMmmm', 'log', '212zcZwLl', 'utf8', '427yfIafr', '478qfXVyf', '2676335UoUUjM'];
  __STRING_ARRAY__ = function () {
    return _0x2c5470;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  var _0x5c0cf2 = __DECODE_0__;
  var inputs = input['replace'](/\r/g, '')[_0x5c0cf2(0x7f)]('\x0a');
  var data = [];
  var n;
  var line;
  var max_index;
  var a;
  var b;
  n = parseInt(inputs[_0x5c0cf2(0x83)]());
  max_index = 0x65;
  max_value = -0x1;
  while (n--) {
    line = inputs['shift']()['split']('\x20');
    a = parseInt(line[0x0]);
    b = parseInt(line[0x1]);
    if (b > max_value || b === max_value && a < max_index) {
      max_index = a;
      max_value = b;
    }
  }
  console[_0x5c0cf2(0x85)](max_index + '\x20' + max_value);
})(require('fs')['readFileSync'](a0_0x11aab6(0x82), a0_0x11aab6(0x87)));
