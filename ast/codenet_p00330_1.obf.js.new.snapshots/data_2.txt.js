(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e3)) / 0x1 + parseInt(__DECODE_0__(0x1db)) / 0x2 * (parseInt(__DECODE_0__(0x1e6)) / 0x3) + parseInt(__DECODE_0__(0x1d9)) / 0x4 + -parseInt(__DECODE_0__(0x1dc)) / 0x5 * (-parseInt(__DECODE_0__(0x1e4)) / 0x6) + -parseInt(__DECODE_0__(0x1dd)) / 0x7 + -parseInt(__DECODE_0__(0x1e0)) / 0x8 * (parseInt(__DECODE_0__(0x1e1)) / 0x9) + -parseInt(__DECODE_0__(0x1da)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb3c86);
var input = require('fs')['readFileSync'](__DECODE_0__(0x1df), __DECODE_0__(0x1e5));
var x = input[__DECODE_0__(0x1e2)]() - 0x0;
function __DECODE_0__(vhElmd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vhElmd, key);
}
console[__DECODE_0__(0x1de)](x * 0x20);
function __STRING_ARRAY__() {
  var _0x4eb422 = ['/dev/stdin', '176EfFhRU', '18099BEziMr', 'trim', '927392RgvvuO', '300BrfBDW', 'utf8', '6NWUqnp', '4028364BRVRDQ', '12664060vmrDwl', '1145944VJppGn', '43460WvbUqR', '10275923hfvfJQ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4eb422;
  };
  return __STRING_ARRAY__();
}
