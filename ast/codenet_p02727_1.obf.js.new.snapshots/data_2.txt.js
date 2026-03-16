function __DECODE_0__(aJHMTM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aJHMTM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x116)) / 0x1 + -parseInt(__DECODE_0__(0x119)) / 0x2 + -parseInt(__DECODE_0__(0x114)) / 0x3 + -parseInt(__DECODE_0__(0x11f)) / 0x4 + parseInt(__DECODE_0__(0x113)) / 0x5 * (parseInt(__DECODE_0__(0x115)) / 0x6) + parseInt(__DECODE_0__(0x10d)) / 0x7 * (parseInt(__DECODE_0__(0x117)) / 0x8) + parseInt(__DECODE_0__(0x11e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd39eb);
var input = require('fs')[__DECODE_0__(0x11b)](__DECODE_0__(0x110), __DECODE_0__(0x112));
function __STRING_ARRAY__() {
  var _0x3b2e30 = ['6381704RNifwi', '102137RvOBap', 'reduce', 'map', '/dev/stdin', 'split', 'utf8', '60BmhRZH', '5175441TLacbP', '321534kWhENY', '1217037nhRNWD', '280yBJslf', 'sort', '305542iVAdej', 'log', 'readFileSync', 'slice', 'length', '39630807ApBrTc'];
  __STRING_ARRAY__ = function () {
    return _0x3b2e30;
  };
  return __STRING_ARRAY__();
}
var lines = input[__DECODE_0__(0x111)]('\x0a');
const parse = (s, sep) => {
  return s[__DECODE_0__(0x111)](sep)[__DECODE_0__(0x10f)](v => parseInt(v));
};
const split = (s, sep, result, keys) => {
  var arr = parse(s, sep);
  for (var i = 0x0; i < arr[__DECODE_0__(0x11d)]; i++) {
    result[keys[i]] = arr[i];
  }
};
var inp = {};
split(lines[0x0], '\x20', inp, ['x', 'y', 'a', 'b', 'c']);
var p = parse(lines[0x1], '\x20')[__DECODE_0__(0x118)]((a, b) => b - a);
var q = parse(lines[0x2], '\x20')[__DECODE_0__(0x118)]((a, b) => b - a);
var r = parse(lines[0x3], '\x20')[__DECODE_0__(0x118)]((a, b) => b - a);
p = p['slice'](0x0, inp['x']);
q = q[__DECODE_0__(0x11c)](0x0, inp['y']);
console[__DECODE_0__(0x11a)](p['concat'](q, r)['sort']((a, b) => b - a)[__DECODE_0__(0x11c)](0x0, inp['x'] + inp['y'])[__DECODE_0__(0x10e)]((a, b) => a + b, 0x0));
