'use strict';

var a0_0x3695b0 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x1bdc00 = ['2251809qmjWdu', '5XTGSjM', '3162297TsWmXf', '412904XCksbj', '9167945KZYhgg', '190056UACcHY', 'log', '360RUnnRw', '8431344euAWME', 'utf8', '4657176HmHSMm', '455NEmwQF'];
  __STRING_ARRAY__ = function () {
    return _0x1bdc00;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x19861f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x19861f(0x137)) / 0x1 * (parseInt(_0x19861f(0x139)) / 0x2) + -parseInt(_0x19861f(0x138)) / 0x3 + -parseInt(_0x19861f(0x134)) / 0x4 + -parseInt(_0x19861f(0x13a)) / 0x5 + -parseInt(_0x19861f(0x132)) / 0x6 + parseInt(_0x19861f(0x135)) / 0x7 * (-parseInt(_0x19861f(0x12f)) / 0x8) + -parseInt(_0x19861f(0x136)) / 0x9 * (-parseInt(_0x19861f(0x131)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xedafd);
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x3695b0(0x133));
function __DECODE_0__(HFVYgV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HFVYgV, key);
}
var r = parseInt(input, 0xa);
console[a0_0x3695b0(0x130)](0x3 * r * r);
