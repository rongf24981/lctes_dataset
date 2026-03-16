function __DECODE_0__(OhBeEL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OhBeEL, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1f8)) / 0x1 * (-parseInt(__DECODE_0__(0x1e9)) / 0x2) + parseInt(__DECODE_0__(0x1f3)) / 0x3 * (-parseInt(__DECODE_0__(0x1fa)) / 0x4) + parseInt(__DECODE_0__(0x1ed)) / 0x5 + -parseInt(__DECODE_0__(0x1f2)) / 0x6 + parseInt(__DECODE_0__(0x1f9)) / 0x7 * (-parseInt(__DECODE_0__(0x1fb)) / 0x8) + -parseInt(__DECODE_0__(0x1f1)) / 0x9 + -parseInt(__DECODE_0__(0x1ec)) / 0xa * (-parseInt(__DECODE_0__(0x1ee)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe7749);
function Main(input) {
  function space_strinput(line) {
    var arr = line[__DECODE_0__(0x1ea)](/(^\s+)|(\s+$)/g, '')[__DECODE_0__(0x1f7)]('\x20');
    for (var i = 0x0; i < arr[__DECODE_0__(0x1eb)]; ++i) {
      arr[i] = arr[i];
    }
    return arr;
  }
  function space_numinput(line) {
    var arr = line[__DECODE_0__(0x1ea)](/(^\s+)|(\s+$)/g, '')[__DECODE_0__(0x1f7)]('\x20');
    for (var i = 0x0; i < arr[__DECODE_0__(0x1eb)]; ++i) {
      arr[i] = +arr[i];
    }
    return arr;
  }
  function getmin(a, b) {
    return a > b ? b : a;
  }
  lines = input[__DECODE_0__(0x1f7)]('\x0a');
  var l0 = space_numinput(lines[0x0]);
  var n = l0[0x0];
  var t = l0[0x1];
  var a = space_numinput(lines[0x1]);
  var rieki = 0x0;
  var rieki_place_count = 0x0;
  var min = a[0x0];
  var max = a[0x0];
  for (var i = 0x0; i < n; ++i) {
    var val = a[i];
    if (val - min > rieki) {
      rieki = val - min;
      rieki_place_count = 0x1;
    } else {
      if (val - min == rieki) {
        rieki_place_count++;
      }
    }
    min = val < min ? val : min;
  }
  console[__DECODE_0__(0x1ef)](getmin(rieki_place_count, Math[__DECODE_0__(0x1f4)](t / 0x2)));
}
function __STRING_ARRAY__() {
  var _0x48f498 = ['6464SpMDaG', '6skgkRX', 'replace', 'length', '431710OGouYV', '1388215QIKTnX', '1133zzfpur', 'log', 'utf8', '16145271OGDRWy', '8676564VUIRld', '657iJODoi', 'floor', 'readFileSync', '/dev/stdin', 'split', '568970OaRqxf', '5985PhcSSh', '28352lFwQEF'];
  __STRING_ARRAY__ = function () {
    return _0x48f498;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1f5)](__DECODE_0__(0x1f6), __DECODE_0__(0x1f0)));
