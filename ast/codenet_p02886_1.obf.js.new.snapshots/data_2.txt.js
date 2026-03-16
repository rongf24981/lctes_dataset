(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x142)) / 0x1 * (-parseInt(__DECODE_0__(0x14d)) / 0x2) + -parseInt(__DECODE_0__(0x145)) / 0x3 + -parseInt(__DECODE_0__(0x149)) / 0x4 + parseInt(__DECODE_0__(0x140)) / 0x5 * (-parseInt(__DECODE_0__(0x14e)) / 0x6) + parseInt(__DECODE_0__(0x14c)) / 0x7 * (parseInt(__DECODE_0__(0x146)) / 0x8) + -parseInt(__DECODE_0__(0x148)) / 0x9 * (-parseInt(__DECODE_0__(0x14b)) / 0xa) + parseInt(__DECODE_0__(0x141)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x48d26);
function Main(input) {
  var input = input[__DECODE_0__(0x147)]('\x0a');
  const n = Number(input[0x0]);
  const ocps = input[0x1][__DECODE_0__(0x147)]('\x20')['map'](ocp => Number(ocp));
  var r = 0x0;
  for (var i = 0x0; i < n; i++) {
    for (var j = i + 0x1; j < n; j++) {
      r += ocps[i] * ocps[j];
    }
  }
  console['log'](r);
}
Main(require('fs')[__DECODE_0__(0x143)](__DECODE_0__(0x14a), __DECODE_0__(0x144)));
function __DECODE_0__(HpDOaz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HpDOaz, key);
}
function __STRING_ARRAY__() {
  var _0x70b35d = ['/dev/stdin', '90ubjgYW', '7ywJSax', '4vwNEDf', '12TPOMef', '860035jLAEil', '11904640hTLiuO', '28546xWRCoq', 'readFileSync', 'utf8', '1404222McpydX', '2068504SczjHi', 'split', '411219oiAudR', '2338256fNSXNA'];
  __STRING_ARRAY__ = function () {
    return _0x70b35d;
  };
  return __STRING_ARRAY__();
}
