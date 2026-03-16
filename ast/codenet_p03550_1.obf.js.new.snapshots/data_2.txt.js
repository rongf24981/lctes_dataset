function __STRING_ARRAY__() {
  const _0x2cf6c7 = ['8038Ljcoya', 'utf8', '9054hgyZwx', '6296685spKLRE', '1928qZfqAV', '27JpNeRY', '233vVCNzU', '35UoFQzs', '2170024gJemgR', '63390iNLOnU', 'abs', 'max', 'split', '1933254jypfoM', 'map', 'shift', '2012592tidRvR', '1012dRAGGj'];
  __STRING_ARRAY__ = function () {
    return _0x2cf6c7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QCRFfU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x68;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QCRFfU, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x76)) / 0x1 * (-parseInt(__DECODE_0__(0x70)) / 0x2) + -parseInt(__DECODE_0__(0x72)) / 0x3 * (-parseInt(__DECODE_0__(0x74)) / 0x4) + parseInt(__DECODE_0__(0x73)) / 0x5 + parseInt(__DECODE_0__(0x6b)) / 0x6 * (-parseInt(__DECODE_0__(0x77)) / 0x7) + -parseInt(__DECODE_0__(0x78)) / 0x8 * (parseInt(__DECODE_0__(0x75)) / 0x9) + -parseInt(__DECODE_0__(0x79)) / 0xa * (parseInt(__DECODE_0__(0x6f)) / 0xb) + parseInt(__DECODE_0__(0x6e)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc5cb4);
function main(input) {
  const lines = input[__DECODE_0__(0x6a)]('\x0a');
  const NZW = lines[__DECODE_0__(0x6d)]()['split']('\x20')[__DECODE_0__(0x6c)](x => parseInt(x));
  const N = NZW[0x0];
  const Z = NZW[0x1];
  const W = NZW[0x2];
  const A = lines['shift']()[__DECODE_0__(0x6a)]('\x20')[__DECODE_0__(0x6c)](x => parseInt(x));
  const initial = Math['abs'](Z - W);
  var fetch_n_1 = Math[__DECODE_0__(0x68)](A[N - 0x1] - A[N - 0x2]);
  if (N < 0x2) {
    fetch_n_1 = 0x0;
  }
  const fetch_n = Math[__DECODE_0__(0x68)](A[N - 0x1] - W);
  const result = Math[__DECODE_0__(0x69)](initial, fetch_n_1, fetch_n);
  console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x71)));
