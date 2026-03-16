function __DECODE_0__(wvKRRv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x163;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wvKRRv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x175)) / 0x1 + -parseInt(__DECODE_0__(0x164)) / 0x2 + parseInt(__DECODE_0__(0x169)) / 0x3 + parseInt(__DECODE_0__(0x168)) / 0x4 * (parseInt(__DECODE_0__(0x171)) / 0x5) + -parseInt(__DECODE_0__(0x163)) / 0x6 * (-parseInt(__DECODE_0__(0x166)) / 0x7) + -parseInt(__DECODE_0__(0x174)) / 0x8 * (parseInt(__DECODE_0__(0x177)) / 0x9) + parseInt(__DECODE_0__(0x172)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x21259);
process[__DECODE_0__(0x16c)][__DECODE_0__(0x173)]();
function __STRING_ARRAY__() {
  var _0x1ce26 = ['split', 'utf8', 'push', '10zBSWKb', '1437330VhGRoS', 'resume', '130760WBpRJU', '6223nkfadS', 'readline', '108pYJSIE', '796494UKtEaE', '494614JzgOUr', 'max', '7SdNEND', 'stdout', '394828PKhRck', '334629IGXSme', 'log', 'line', 'stdin', 'close'];
  __STRING_ARRAY__ = function () {
    return _0x1ce26;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x16c)]['setEncoding'](__DECODE_0__(0x16f));
var lines = [];
var reader = require(__DECODE_0__(0x176))['createInterface']({
  'input': process[__DECODE_0__(0x16c)],
  'output': process[__DECODE_0__(0x167)]
});
reader['on'](__DECODE_0__(0x16b), line => {
  lines[__DECODE_0__(0x170)](line);
});
reader['on'](__DECODE_0__(0x16d), () => {
  var N = parseInt(lines[0x0]);
  var sum = 0x0;
  var MaxNum = 0x0;
  for (var i = 0x0; i < N; i++) {
    var Ai = parseInt(lines[0x1][__DECODE_0__(0x16e)]('\x20')[i]);
    MaxNum = Math[__DECODE_0__(0x165)](MaxNum, Ai);
    sum += MaxNum - Ai;
  }
  console[__DECODE_0__(0x16a)](sum);
});
