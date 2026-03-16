(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x195)) / 0x1 * (-parseInt(__DECODE_0__(0x18d)) / 0x2) + parseInt(__DECODE_0__(0x190)) / 0x3 * (-parseInt(__DECODE_0__(0x18a)) / 0x4) + parseInt(__DECODE_0__(0x18c)) / 0x5 + -parseInt(__DECODE_0__(0x18f)) / 0x6 * (parseInt(__DECODE_0__(0x199)) / 0x7) + -parseInt(__DECODE_0__(0x191)) / 0x8 + -parseInt(__DECODE_0__(0x18e)) / 0x9 * (parseInt(__DECODE_0__(0x19a)) / 0xa) + parseInt(__DECODE_0__(0x18b)) / 0xb * (parseInt(__DECODE_0__(0x192)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x36b29);
function __DECODE_0__(VlhbSL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VlhbSL, key);
}
var input = require('fs')[__DECODE_0__(0x197)]('/dev/stdin', 'utf8');
function __STRING_ARRAY__() {
  var _0x41e76e = ['4080ajiGAk', 'trim', 'shift', '1hsAegG', 'split', 'readFileSync', 'replace', '7791ZxVntH', '40aiMnRM', 'log', '20OfuIMt', '29447oFcPCP', '524725WVJEVT', '871562xMyEBP', '222687GxBzsf', '42IboEHS', '103260WEtFrf', '611520tShYhb'];
  __STRING_ARRAY__ = function () {
    return _0x41e76e;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0x193)]()[__DECODE_0__(0x198)](/\n/g, '\x20')[__DECODE_0__(0x196)]('\x20');
var n = arr[__DECODE_0__(0x194)]() - 0x0;
var a = [];
for (var i = 0x0; i < 0x2710; i++) {
  a[i] = ![];
}
for (var i = 0x0; i < n; i++) {
  a[arr[i] - 0x0] = !![];
  if (i + 0x1 < n) {
    a[arr[i] + arr[i + 0x1] - 0x0] = !![];
  }
  if (i + 0x2 < n) {
    a[arr[i] + arr[i + 0x1] + arr[i + 0x2] - 0x0] = !![];
  }
  if (i + 0x3 < n) {
    a[arr[i] + arr[i + 0x1] + arr[i + 0x2] + arr[i + 0x3] - 0x0] = !![];
  }
}
for (var i = 0x0; i < 0x2710; i++) {
  if (a[i] == ![]) {
    console[__DECODE_0__(0x19b)](i);
    break;
  }
}
