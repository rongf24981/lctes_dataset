function __DECODE_0__(PYAEZI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x183;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PYAEZI, key);
}
var a0_0x1ff265 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x10b062 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x10b062(0x18e)) / 0x1 * (parseInt(_0x10b062(0x196)) / 0x2) + parseInt(_0x10b062(0x183)) / 0x3 + -parseInt(_0x10b062(0x188)) / 0x4 + -parseInt(_0x10b062(0x194)) / 0x5 * (parseInt(_0x10b062(0x187)) / 0x6) + parseInt(_0x10b062(0x18b)) / 0x7 + parseInt(_0x10b062(0x18a)) / 0x8 + parseInt(_0x10b062(0x184)) / 0x9 * (-parseInt(_0x10b062(0x195)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdd1b4);
var input = require('fs')[a0_0x1ff265(0x185)](a0_0x1ff265(0x18d), a0_0x1ff265(0x193));
var arr = input[a0_0x1ff265(0x189)]()[a0_0x1ff265(0x186)]('\x0a');
function __STRING_ARRAY__() {
  var _0x44a75d = ['6nfVJao', '711164kGcAqn', 'trim', '7617960tfJCEm', '348138qrCYTr', 'join', '/dev/stdin', '2545tboOuI', 'shift', 'map', 'log', '0\x200', 'utf8', '4415045SHhGhM', '114960wdrdMq', '1294bWvnFB', '3747558FmYaVA', '1512SRqExC', 'readFileSync', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x44a75d;
  };
  return __STRING_ARRAY__();
}
var n = arr[a0_0x1ff265(0x18f)]() - 0x0;
while (n--) {
  var xy = [0x0, 0x0];
  var max = [0x0, 0x0, 0x0];
  while (!![]) {
    var str = arr[a0_0x1ff265(0x18f)]();
    if (str == a0_0x1ff265(0x192)) {
      break;
    }
    var ary = str[a0_0x1ff265(0x186)]('\x20')[a0_0x1ff265(0x190)](Number);
    xy[0x0] += ary[0x0];
    xy[0x1] += ary[0x1];
    var d = Math['sqrt'](xy[0x0] * xy[0x0] + xy[0x1] * xy[0x1]);
    if (max[0x0] < d) {
      max = [d, xy[0x0], xy[0x1]];
    } else {
      if (max[0x0] == d && max[0x1] < xy[0x0]) {
        max = [d, xy[0x0], xy[0x1]];
      }
    }
  }
  max['shift']();
  console[a0_0x1ff265(0x191)](max[a0_0x1ff265(0x18c)]('\x20'));
}
