(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x189)) / 0x1 + -parseInt(__DECODE_0__(0x18e)) / 0x2 * (-parseInt(__DECODE_0__(0x191)) / 0x3) + -parseInt(__DECODE_0__(0x18d)) / 0x4 * (parseInt(__DECODE_0__(0x190)) / 0x5) + -parseInt(__DECODE_0__(0x195)) / 0x6 * (parseInt(__DECODE_0__(0x197)) / 0x7) + parseInt(__DECODE_0__(0x194)) / 0x8 + -parseInt(__DECODE_0__(0x18c)) / 0x9 + -parseInt(__DECODE_0__(0x196)) / 0xa * (-parseInt(__DECODE_0__(0x18b)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x56d12);
const main = inputs => {
  var array = inputs[0x0]['split']('\x20');
  var array2 = inputs[0x1]['split']('\x20');
  var N = array[0x0] - 0x0;
  var M = array[0x1] - 0x0;
  var sum = 0x0;
  for (var i = 0x0; i < M; i++) {
    sum = sum + Number(array2[i]);
  }
  console[__DECODE_0__(0x192)](N - sum < 0x0 ? -0x1 : N - sum);
};
function __STRING_ARRAY__() {
  var _0x24c13a = ['27pImIkF', 'log', 'split', '4718576UVlHHP', '57948LVjFCm', '10igcfgk', '476ZZoCrM', '485916nKqVvv', '/dev/stdin', '8466414KkLSOZ', '5353542IRtsrB', '4OgVobX', '2674TwLHYN', 'trim', '1251305VJtCdW'];
  __STRING_ARRAY__ = function () {
    return _0x24c13a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EFjVOp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x189;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EFjVOp, key);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x18a), 'UTF-8')[__DECODE_0__(0x18f)]()[__DECODE_0__(0x193)]('\x0a'));
