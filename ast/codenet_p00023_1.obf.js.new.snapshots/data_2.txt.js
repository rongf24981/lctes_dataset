(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x132)) / 0x1 * (-parseInt(__DECODE_0__(0x12a)) / 0x2) + -parseInt(__DECODE_0__(0x130)) / 0x3 + parseInt(__DECODE_0__(0x12f)) / 0x4 + -parseInt(__DECODE_0__(0x13a)) / 0x5 + parseInt(__DECODE_0__(0x12c)) / 0x6 * (parseInt(__DECODE_0__(0x131)) / 0x7) + -parseInt(__DECODE_0__(0x129)) / 0x8 * (-parseInt(__DECODE_0__(0x138)) / 0x9) + parseInt(__DECODE_0__(0x139)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x28a8b);
(function (input) {
  var p = input[__DECODE_0__(0x12d)](/\n$/, '')['split']('\x0a');
  var n = Number(p[__DECODE_0__(0x128)]());
  for (var i = 0x0; i < n; i++) {
    var args = p['shift']()['split']('\x20')[__DECODE_0__(0x134)](Number);
    var xa = args[__DECODE_0__(0x128)]();
    var ya = args[__DECODE_0__(0x128)]();
    var ra = args[__DECODE_0__(0x128)]();
    var xb = args[__DECODE_0__(0x128)]();
    var yb = args[__DECODE_0__(0x128)]();
    var rb = args['shift']();
    var d = Math[__DECODE_0__(0x12b)](Math[__DECODE_0__(0x136)](xb - xa, 0x2) + Math[__DECODE_0__(0x136)](yb - ya, 0x2));
    if (ra > d + rb) {
      console['log'](0x2);
    } else {
      if (rb > d + ra) {
        console['log'](-0x2);
      } else {
        if (d < ra + rb) {
          console[__DECODE_0__(0x137)](0x1);
        } else {
          console[__DECODE_0__(0x137)](0x0);
        }
      }
    }
  }
})(require('fs')[__DECODE_0__(0x12e)](__DECODE_0__(0x133), __DECODE_0__(0x135)));
function __DECODE_0__(dzmYsm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x128;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dzmYsm, key);
}
function __STRING_ARRAY__() {
  var _0x17fe66 = ['sqrt', '444vHoMFp', 'replace', 'readFileSync', '699092rJHWWl', '535008AnkmIL', '21588hpAjqC', '164201MHxTHl', '/dev/stdin', 'map', 'utf8', 'pow', 'log', '9UnIRuN', '2892890MexmQT', '1412265XbevQx', 'shift', '794008hfbmlr', '2MSQpyG'];
  __STRING_ARRAY__ = function () {
    return _0x17fe66;
  };
  return __STRING_ARRAY__();
}
