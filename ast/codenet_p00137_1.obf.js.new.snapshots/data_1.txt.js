var a0_0x46b766 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x290329 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x290329(0x154)) / 0x1 * (-parseInt(_0x290329(0x14b)) / 0x2) + parseInt(_0x290329(0x15a)) / 0x3 + -parseInt(_0x290329(0x14d)) / 0x4 * (-parseInt(_0x290329(0x149)) / 0x5) + parseInt(_0x290329(0x158)) / 0x6 * (-parseInt(_0x290329(0x14a)) / 0x7) + parseInt(_0x290329(0x14f)) / 0x8 + parseInt(_0x290329(0x152)) / 0x9 + parseInt(_0x290329(0x14c)) / 0xa * (-parseInt(_0x290329(0x153)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf3399);
function __DECODE_0__(KIPYDs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x149;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KIPYDs, key);
}
var input = require('fs')[a0_0x46b766(0x15b)]('/dev/stdin', a0_0x46b766(0x151));
var Arr = input['trim']()[a0_0x46b766(0x156)]('\x0a')[a0_0x46b766(0x157)](Number);
var L = Arr['shift']();
for (var i = 0x0; i < L; i++) {
  console[a0_0x46b766(0x150)](a0_0x46b766(0x155) + (i + 0x1) + ':');
  var v = Arr[i];
  for (var j = 0x0; j < 0xa; j++) {
    v = a0_0x46b766(0x159) + v * v;
    v = v[a0_0x46b766(0x14e)](-0x6);
    v = v[a0_0x46b766(0x14e)](0x0, 0x4);
    v = parseInt(v, 0xa);
    console[a0_0x46b766(0x150)](v);
  }
}
function __STRING_ARRAY__() {
  var _0x411395 = ['584710kWHtnB', '613388PZSLcu', 'slice', '9553984XAcPxv', 'log', 'utf8', '13407651aSjKPa', '22ESOLvN', '1lQNQNP', 'Case\x20', 'split', 'map', '11214tZBttN', '000000', '1166835WnAIeM', 'readFileSync', '5vigYbu', '7035okcafW', '469486jFzbiK'];
  __STRING_ARRAY__ = function () {
    return _0x411395;
  };
  return __STRING_ARRAY__();
}
