function __STRING_ARRAY__() {
  var _0x5c1f0d = ['split', '13TAIyWq', '5290NHnNsS', '33513gzxyDw', '/dev/stdin', '5886BMdQGv', 'indexOf', 'readFileSync', 'log', '24189yJvaWC', '7305468ctMSNV', '38xlTkWU', '699408KqqPoI', '2579344NsTTIZ', 'utf8', '4835Pmlnpa', '1444804wVgHHT', '3MKKpiD', 'length', '7DsToQl'];
  __STRING_ARRAY__ = function () {
    return _0x5c1f0d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x178)) / 0x1 * (parseInt(__DECODE_0__(0x16c)) / 0x2) + parseInt(__DECODE_0__(0x172)) / 0x3 * (-parseInt(__DECODE_0__(0x171)) / 0x4) + parseInt(__DECODE_0__(0x170)) / 0x5 * (parseInt(__DECODE_0__(0x17a)) / 0x6) + parseInt(__DECODE_0__(0x174)) / 0x7 * (parseInt(__DECODE_0__(0x16e)) / 0x8) + -parseInt(__DECODE_0__(0x16d)) / 0x9 + -parseInt(__DECODE_0__(0x177)) / 0xa * (-parseInt(__DECODE_0__(0x17e)) / 0xb) + -parseInt(__DECODE_0__(0x17f)) / 0xc * (parseInt(__DECODE_0__(0x176)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb712b);
function main(data) {
  input = data[__DECODE_0__(0x175)]('');
  len = input[__DECODE_0__(0x173)];
  temp = [];
  for (i = 0x0; i < len; i += 0x1) {
    if (temp[__DECODE_0__(0x17b)](input[i]) === -0x1) {
      temp['push'](input[i]);
    } else {
      console[__DECODE_0__(0x17d)]('no');
      return;
    }
  }
  console['log']('yes');
}
function __DECODE_0__(WHpFUB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WHpFUB, key);
}
main(require('fs')[__DECODE_0__(0x17c)](__DECODE_0__(0x179), __DECODE_0__(0x16f)));
