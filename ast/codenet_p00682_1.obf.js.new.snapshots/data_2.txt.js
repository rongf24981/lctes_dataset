function __STRING_ARRAY__() {
  var _0x1897f1 = ['3FvoPzC', 'length', '200655qWewwf', 'push', 'shift', 'resume', '318994cczAxr', '8SWMLYY', 'data', 'utf8', 'setEncoding', '1155008LlkGqd', '979913rmDVcd', '185vQrIeu', 'toFixed', 'stdin', '1494uVaabs', '8825817HFsiGt', '72dsKAsf', 'abs', '183750TkOtXn', '20960WXMARL'];
  __STRING_ARRAY__ = function () {
    return _0x1897f1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7f)) / 0x1 * (parseInt(__DECODE_0__(0x6f)) / 0x2) + parseInt(__DECODE_0__(0x81)) / 0x3 + -parseInt(__DECODE_0__(0x74)) / 0x4 + -parseInt(__DECODE_0__(0x76)) / 0x5 * (-parseInt(__DECODE_0__(0x7d)) / 0x6) + parseInt(__DECODE_0__(0x7a)) / 0x7 * (parseInt(__DECODE_0__(0x70)) / 0x8) + parseInt(__DECODE_0__(0x79)) / 0x9 * (-parseInt(__DECODE_0__(0x7e)) / 0xa) + parseInt(__DECODE_0__(0x75)) / 0xb * (-parseInt(__DECODE_0__(0x7b)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc609c);
process[__DECODE_0__(0x78)][__DECODE_0__(0x6e)]();
process[__DECODE_0__(0x78)][__DECODE_0__(0x73)](__DECODE_0__(0x72));
function __DECODE_0__(tzmZNa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tzmZNa, key);
}
process[__DECODE_0__(0x78)]['on'](__DECODE_0__(0x71), function (chunk) {
  var input = chunk['trim']()['split']('\x0a');
  var order = 0x1;
  while (!![]) {
    var n = input[__DECODE_0__(0x83)]();
    if (n == 0x0) {
      break;
    }
    var coordinate = [];
    while (n--) {
      coordinate[__DECODE_0__(0x82)](input[__DECODE_0__(0x83)]()['split']('\x20')['map'](Number));
    }
    coordinate[__DECODE_0__(0x82)](coordinate[0x0]);
    var area = 0x0;
    for (var i = 0x0; i < coordinate[__DECODE_0__(0x80)] - 0x1; i++) {
      area += coordinate[i][0x0] * coordinate[i + 0x1][0x1] - coordinate[i][0x1] * coordinate[i + 0x1][0x0];
    }
    console['log'](order + '\x20' + Math[__DECODE_0__(0x7c)](area / 0x2)[__DECODE_0__(0x77)](0x1));
    input[__DECODE_0__(0x83)]();
    order++;
  }
});
