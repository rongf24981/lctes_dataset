(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b2)) / 0x1 * (parseInt(__DECODE_0__(0x1ab)) / 0x2) + parseInt(__DECODE_0__(0x1ae)) / 0x3 + -parseInt(__DECODE_0__(0x1b6)) / 0x4 * (-parseInt(__DECODE_0__(0x1b0)) / 0x5) + parseInt(__DECODE_0__(0x1b1)) / 0x6 * (parseInt(__DECODE_0__(0x1ac)) / 0x7) + -parseInt(__DECODE_0__(0x1a9)) / 0x8 + parseInt(__DECODE_0__(0x1b7)) / 0x9 * (parseInt(__DECODE_0__(0x1a6)) / 0xa) + -parseInt(__DECODE_0__(0x1aa)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8c70c);
function saiki(str, flag) {
  while (!![]) {
    if (/\[{2}\d.*?\]{2}/[__DECODE_0__(0x1b9)](str)) {
      str = str[__DECODE_0__(0x1a5)](/\[{2}\d.*?\]{2}/, function (s) {
        var d = s[__DECODE_0__(0x1b5)](0x2, -0x2)['split']('][')['map'](Number);
        d[__DECODE_0__(0x1a3)]((a, b) => a - b);
        var sum = 0x0;
        for (var i = 0x0; i < Math['ceil'](d[__DECODE_0__(0x1af)] / 0x2); i++) {
          if (flag) {
            sum += Math['floor'](d[i] / 0x2) + 0x1;
          } else {
            sum += Math['floor'](d[i]);
          }
        }
        return '(' + sum + ')';
      });
    } else {
      break;
    }
  }
  str = str[__DECODE_0__(0x1a5)](/\(/g, '[');
  str = str[__DECODE_0__(0x1a5)](/\)/g, ']');
  return str;
}
function __DECODE_0__(KbOhtu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KbOhtu, key);
}
var input = require('fs')[__DECODE_0__(0x1b8)](__DECODE_0__(0x1b4), __DECODE_0__(0x1ad));
function __STRING_ARRAY__() {
  var _0x57b9ff = ['length', '215BMKMWB', '305994MCrkwJ', '1288khgCaH', 'trim', '/dev/stdin', 'slice', '21044MhFZuT', '358461uQOvUg', 'readFileSync', 'test', 'sort', 'log', 'replace', '170ynBRfZ', 'shift', 'split', '894824CpwYML', '3494975SvvNrh', '1522KBMyEz', '56uYvBCk', 'utf8', '2021046eRLGWX'];
  __STRING_ARRAY__ = function () {
    return _0x57b9ff;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0x1b3)]()[__DECODE_0__(0x1a8)]('\x0a');
var n = arr[__DECODE_0__(0x1a7)]() - 0x0;
arr['forEach'](str => {
  str = saiki(str, !![]);
  while (/\[\[/[__DECODE_0__(0x1b9)](str)) {
    str = saiki(str, ![]);
  }
  console[__DECODE_0__(0x1a4)](str[__DECODE_0__(0x1a5)](/\[|\]/g, ''));
});
