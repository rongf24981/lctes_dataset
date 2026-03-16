function __DECODE_0__(QehyHo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QehyHo, key);
}
function __STRING_ARRAY__() {
  var _0x432b4a = ['174700fyLYQx', 'length', 'map', '500076tqvCSC', '2484608AjWIKz', 'sort', '116004Dadmbs', 'push', '/dev/stdin', '6375btgrlP', 'utf8', '679470xZTSrV', '756Rzbcjz', 'reduce', '271380JwAgtm', 'readFileSync', '36hJFdgo', '342fopPdV', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x432b4a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x92)) / 0x1 + -parseInt(__DECODE_0__(0x9a)) / 0x2 + parseInt(__DECODE_0__(0x98)) / 0x3 * (parseInt(__DECODE_0__(0x9b)) / 0x4) + -parseInt(__DECODE_0__(0x9d)) / 0x5 * (-parseInt(__DECODE_0__(0x8c)) / 0x6) + parseInt(__DECODE_0__(0x95)) / 0x7 + -parseInt(__DECODE_0__(0x93)) / 0x8 + parseInt(__DECODE_0__(0x8d)) / 0x9 * (parseInt(__DECODE_0__(0x8f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3ed2e);
function Main(input) {
  const M = input[0x0][0x1];
  const alist = input[0x1];
  const kumiList = alist[__DECODE_0__(0x9c)]((arr, ai, i) => {
    arr[__DECODE_0__(0x96)](ai * 0x2);
    var kumiVal;
    for (var j = i + 0x1; j < alist[__DECODE_0__(0x90)]; j++) {
      kumiVal = ai + alist[j];
      arr['push'](kumiVal, kumiVal);
    }
    return arr;
  }, [])[__DECODE_0__(0x94)]((a1, a2) => a2 - a1);
  var answer = 0x0;
  for (var i = 0x0; i < M; i++) {
    answer += kumiList[i];
  }
  console['log'](answer);
}
Main(require('fs')[__DECODE_0__(0x9e)](__DECODE_0__(0x97), __DECODE_0__(0x99))[__DECODE_0__(0x8e)]()['split']('\x0a')[__DECODE_0__(0x91)](line => line['split']('\x20')[__DECODE_0__(0x91)](Number)));
