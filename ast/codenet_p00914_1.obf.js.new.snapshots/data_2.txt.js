(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb4)) / 0x1 + -parseInt(__DECODE_0__(0xa7)) / 0x2 + parseInt(__DECODE_0__(0xb1)) / 0x3 + parseInt(__DECODE_0__(0xa6)) / 0x4 + -parseInt(__DECODE_0__(0xae)) / 0x5 * (parseInt(__DECODE_0__(0xa4)) / 0x6) + parseInt(__DECODE_0__(0xb3)) / 0x7 + parseInt(__DECODE_0__(0xa8)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6441d);
function kumiawase(start, end, len) {
  var ans = [];
  function loop(a, arr) {
    if (arr['length'] == len) {
      ans[__DECODE_0__(0xab)](arr);
    } else {
      for (var i = a; i <= end; i++) {
        loop(i + 0x1, arr[__DECODE_0__(0xb0)](i));
      }
    }
  }
  loop(start, []);
  return ans;
}
var input = require('fs')[__DECODE_0__(0xad)](__DECODE_0__(0xb5), __DECODE_0__(0xa9));
function __DECODE_0__(xfRBUI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xfRBUI, key);
}
var arr = input[__DECODE_0__(0xaf)]()[__DECODE_0__(0xac)]('\x0a');
function __STRING_ARRAY__() {
  var _0x1fcdda = ['concat', '1241073VzehtO', 'map', '675724hOzpLm', '287172xOzmxA', '/dev/stdin', 'some', 'reduce', '834318EwZgkp', 'log', '2536312iLUdnv', '498294YHoQWo', '3983488IIBSGE', 'utf8', '0\x200\x200', 'push', 'split', 'readFileSync', '25KqCvij', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x1fcdda;
  };
  return __STRING_ARRAY__();
}
arr[__DECODE_0__(0xb6)](function (v, i) {
  if (v == __DECODE_0__(0xaa)) {
    return !![];
  }
  var nks = v['split']('\x20')[__DECODE_0__(0xb2)](Number);
  var ary = kumiawase(0x1, nks[0x0], nks[0x1]);
  var cnt = 0x0;
  ary['forEach'](function (v) {
    var sum = v[__DECODE_0__(0xb7)](function (a, b) {
      return a + b;
    });
    if (sum == nks[0x2]) {
      cnt++;
    }
  });
  console[__DECODE_0__(0xa5)](cnt);
});
