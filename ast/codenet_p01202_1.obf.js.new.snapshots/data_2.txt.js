(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x104)) / 0x1 * (-parseInt(__DECODE_0__(0x103)) / 0x2) + -parseInt(__DECODE_0__(0x10b)) / 0x3 + -parseInt(__DECODE_0__(0x10a)) / 0x4 * (-parseInt(__DECODE_0__(0xff)) / 0x5) + parseInt(__DECODE_0__(0x106)) / 0x6 * (-parseInt(__DECODE_0__(0x107)) / 0x7) + parseInt(__DECODE_0__(0x105)) / 0x8 + parseInt(__DECODE_0__(0x10c)) / 0x9 * (-parseInt(__DECODE_0__(0x102)) / 0xa) + parseInt(__DECODE_0__(0x108)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1b595);
var input = require('fs')['readFileSync'](__DECODE_0__(0x10f), __DECODE_0__(0xfe));
var arr = input[__DECODE_0__(0x109)]()['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x48cc48 = ['/dev/stdin', 'utf8', '330EIrzCu', 'Yes', 'shift', '10LZqSoW', '11164NutsyE', '17JPDcnq', '1254272PlOJlh', '1038ZnCAmL', '7469tGkEPI', '2731135yxJHIP', 'trim', '9224UqvyxP', '36843RsKbVO', '1381302rUDrTB', 'split', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x48cc48;
  };
  return __STRING_ARRAY__();
}
var n = arr['shift']() - 0x0;
function __DECODE_0__(KAjCjZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KAjCjZ, key);
}
while (n--) {
  var ary = arr[__DECODE_0__(0x101)]()[__DECODE_0__(0x10d)]('');
  var ans = __DECODE_0__(0x100);
  var s = '';
  ary['forEach'](function (v) {
    if (v == s) {
      ans = 'No';
    }
    s = v;
  });
  console[__DECODE_0__(0x10e)](ans);
}
