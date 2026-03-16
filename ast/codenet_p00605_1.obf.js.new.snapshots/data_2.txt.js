function __DECODE_0__(dRIXKI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x191;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dRIXKI, key);
}
function __STRING_ARRAY__() {
  var _0x253bf8 = ['log', '487408uEodUv', '6SFyezU', 'utf8', '738896elGxmb', '10yjkLwk', 'readFileSync', '/dev/stdin', '3980943lLQaeo', '2630136rPYUMl', 'every', 'forEach', '0\x200', '3PxrJsY', 'map', '3635995uqcMVd', '167748UiSwPD', 'split', 'Yes', '1948552hkiwEa', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x253bf8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x191)) / 0x1 * (parseInt(__DECODE_0__(0x19a)) / 0x2) + parseInt(__DECODE_0__(0x1a2)) / 0x3 + -parseInt(__DECODE_0__(0x19d)) / 0x4 + -parseInt(__DECODE_0__(0x193)) / 0x5 * (-parseInt(__DECODE_0__(0x19b)) / 0x6) + -parseInt(__DECODE_0__(0x194)) / 0x7 + parseInt(__DECODE_0__(0x197)) / 0x8 + parseInt(__DECODE_0__(0x1a1)) / 0x9 * (-parseInt(__DECODE_0__(0x19e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x719c9);
var input = require('fs')[__DECODE_0__(0x19f)](__DECODE_0__(0x1a0), __DECODE_0__(0x19c));
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x195)]('\x0a');
while (!![]) {
  var NK = Arr[__DECODE_0__(0x198)]();
  if (NK == __DECODE_0__(0x1a5)) {
    break;
  }
  var nk = NK['split']('\x20')[__DECODE_0__(0x192)](Number);
  var S = Arr[__DECODE_0__(0x198)]()[__DECODE_0__(0x195)]('\x20')['map'](Number);
  for (var i = 0x0; i < nk[0x0]; i++) {
    var B = Arr['shift']()[__DECODE_0__(0x195)]('\x20')[__DECODE_0__(0x192)](Number);
    B[__DECODE_0__(0x1a4)](function (v, index) {
      S[index] -= v;
    });
  }
  var flag = S[__DECODE_0__(0x1a3)](function (v) {
    return v >= 0x0;
  });
  console[__DECODE_0__(0x199)](flag ? __DECODE_0__(0x196) : 'No');
}
