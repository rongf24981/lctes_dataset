function __DECODE_0__(MPOvUg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MPOvUg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x166)) / 0x1 * (parseInt(__DECODE_0__(0x15e)) / 0x2) + -parseInt(__DECODE_0__(0x15b)) / 0x3 * (parseInt(__DECODE_0__(0x165)) / 0x4) + -parseInt(__DECODE_0__(0x160)) / 0x5 * (-parseInt(__DECODE_0__(0x159)) / 0x6) + -parseInt(__DECODE_0__(0x167)) / 0x7 + -parseInt(__DECODE_0__(0x163)) / 0x8 + -parseInt(__DECODE_0__(0x157)) / 0x9 * (-parseInt(__DECODE_0__(0x162)) / 0xa) + -parseInt(__DECODE_0__(0x15f)) / 0xb * (-parseInt(__DECODE_0__(0x15d)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc5ff2);
process[__DECODE_0__(0x15c)]['on']('data', function (c, o, m) {
  o = {};
  n = 0x0;
  s = '';
  (c + '')['trim']()['split']('\x20')['some'](function (a) {
    n < (o[a = a[__DECODE_0__(0x158)]()] ? ++o[a] : o[a] = 0x1) && (n = o[m = a]);
    s[__DECODE_0__(0x164)] < a[__DECODE_0__(0x164)] && (s = a);
  });
  console[__DECODE_0__(0x161)](m + '\x20' + s);
})[__DECODE_0__(0x15a)]();
function __STRING_ARRAY__() {
  var _0x44d016 = ['300YRjfsY', 'stdin', '121884fLMfmL', '6UHsIHq', '5467LtbGVg', '46295SQXYKi', 'log', '4343910IlVHqG', '10308128KqTlXK', 'length', '48256uiQbBe', '515893aDqyEs', '10947930XczwFL', '9fjKnry', 'toLowerCase', '606pnAJxo', 'resume'];
  __STRING_ARRAY__ = function () {
    return _0x44d016;
  };
  return __STRING_ARRAY__();
}
