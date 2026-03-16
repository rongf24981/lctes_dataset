(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe9)) / 0x1 * (-parseInt(__DECODE_0__(0xef)) / 0x2) + parseInt(__DECODE_0__(0xeb)) / 0x3 + parseInt(__DECODE_0__(0xea)) / 0x4 * (parseInt(__DECODE_0__(0xed)) / 0x5) + parseInt(__DECODE_0__(0xf3)) / 0x6 + -parseInt(__DECODE_0__(0xf5)) / 0x7 + parseInt(__DECODE_0__(0xf1)) / 0x8 * (parseInt(__DECODE_0__(0xf0)) / 0x9) + -parseInt(__DECODE_0__(0xf6)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3c895);
function __STRING_ARRAY__() {
  var _0x59903a = ['/dev/stdin', 'shift', 'forEach', '917cfxmHv', '2560efUJdD', '1289142kDIsWQ', 'push', '1340euglSd', 'utf8', '76mRrAOG', '318177yDHods', '8uFXSWv', 'test', '1600896YgqUcd', 'getTime', '2962995lHIAdE', '2670070nMiNht', 'log', 'readFileSync', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x59903a;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0xf8)](__DECODE_0__(0xfa), __DECODE_0__(0xee));
function __DECODE_0__(aOuAFR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aOuAFR, key);
}
var arr = input['trim']()[__DECODE_0__(0xf9)]('\x0a');
var n = arr[__DECODE_0__(0xfb)]() - 0x0;
var book = [];
for (var i = 0x0; i < n; i++) {
  book[i] = arr[__DECODE_0__(0xfb)]();
}
var q = arr[__DECODE_0__(0xfb)]() - 0x0;
for (var i = 0x0; i < q; i++) {
  if (i != 0x0) {
    console[__DECODE_0__(0xf7)]('');
  }
  var ans = [];
  var v = arr[__DECODE_0__(0xfb)]()[__DECODE_0__(0xf9)]('\x20');
  var a = v[0x0];
  var b = v[0x1];
  var c = v[0x2] != '*' ? new Date(v[0x2])[__DECODE_0__(0xf4)]() : '*';
  var d = v[0x3] != '*' ? new Date(v[0x3])[__DECODE_0__(0xf4)]() : '*';
  book[__DECODE_0__(0xfc)](function (V) {
    V = V[__DECODE_0__(0xf9)]('\x20');
    var A = V[0x0];
    var B = V[0x1];
    var C = new Date(V[0x2])[__DECODE_0__(0xf4)]();
    var flag = !![];
    if (a != '*') {
      var regex = new RegExp(a);
      if (regex[__DECODE_0__(0xf2)](A) == ![]) {
        flag = ![];
      }
    }
    if (b != '*') {
      var regex = new RegExp(b);
      if (regex[__DECODE_0__(0xf2)](B) == ![]) {
        flag = ![];
      }
    }
    if (c != '*') {
      if (c > C) {
        flag = ![];
      }
    }
    if (d != '*') {
      if (d < C) {
        flag = ![];
      }
    }
    if (flag) {
      ans[__DECODE_0__(0xec)](A);
    }
  });
  ans[__DECODE_0__(0xfc)](function (value) {
    console[__DECODE_0__(0xf7)](value);
  });
}
