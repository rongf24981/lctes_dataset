function __STRING_ARRAY__() {
  var _0x17ed94 = ['1546641OehOpm', '208554tDOHcm', 'fill', 'utf8', '/dev/stdin', '669264CraBta', '2777608rRKcbZ', '3371930SVSwoL', '804656NHwrph', '140uEKMfl', '3XWItkj', 'map', '726257WMsZQC', '24UrFHeC', 'split', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x17ed94;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xea)) / 0x1 + parseInt(__DECODE_0__(0xe7)) / 0x2 * (parseInt(__DECODE_0__(0xec)) / 0x3) + parseInt(__DECODE_0__(0xe8)) / 0x4 + parseInt(__DECODE_0__(0xeb)) / 0x5 * (parseInt(__DECODE_0__(0xf3)) / 0x6) + parseInt(__DECODE_0__(0xee)) / 0x7 * (-parseInt(__DECODE_0__(0xef)) / 0x8) + parseInt(__DECODE_0__(0xf2)) / 0x9 + -parseInt(__DECODE_0__(0xe9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb0089);
function __DECODE_0__(nmNWRM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nmNWRM, key);
}
function Main(s) {
  s = s[__DECODE_0__(0xf0)]('\x0a');
  s[0x0] = s[0x0]['split']('\x20')['map'](a => +a);
  var n = s[0x0][0x0];
  var c = s[0x0][0x1];
  var d = [];
  var a = [];
  for (var i = 0x0; i < c; i++) {
    d[i] = s[i + 0x1]['split']('\x20')[__DECODE_0__(0xed)](a => +a);
  }
  for (i = 0x0; i < n; i++) {
    a[i] = s[i + 0x1 + c][__DECODE_0__(0xf0)]('\x20')[__DECODE_0__(0xed)](a => +a - 0x1);
  }
  var z = Array(0x3)[__DECODE_0__(0xf4)](0x0)['map'](a => Array(c)[__DECODE_0__(0xf4)](0x0));
  for (i = 0x0; i < n; i++) {
    for (var j = 0x0; j < n; j++) {
      var t = (i + j) % 0x3;
      z[t][a[i][j]]++;
    }
  }
  var ans = 0x218711a00;
  for (i = 0x0; i < c; i++) {
    for (j = 0x0; j < c; j++) {
      if (i === j) {
        continue;
      }
      for (var k = 0x0; k < c; k++) {
        if (i === k || j === k) {
          continue;
        }
        t = 0x0;
        for (var l = 0x0; l < c; l++) {
          t += z[0x0][l] * d[l][i];
          t += z[0x1][l] * d[l][j];
          t += z[0x2][l] * d[l][k];
        }
        ans = Math['min'](ans, t);
      }
    }
  }
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0xf1)](__DECODE_0__(0xf6), __DECODE_0__(0xf5)));
