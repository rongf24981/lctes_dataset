const a0_0x1a9156 = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x32846c = ['186178XynzBR', 'log', 'split', '4638160dgpztr', '3fNjooY', '40MIpBUl', '2024364JrQCYc', 'trim', '764991FJPjtL', '2329663BBakKb', '170svSkAO', '21726BGxFML', '1396308vSbxma', 'utf8', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x32846c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(YHdzhT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x125;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YHdzhT, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x2c2348 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2c2348(0x132)) / 0x1 * (-parseInt(_0x2c2348(0x12e)) / 0x2) + parseInt(_0x2c2348(0x12b)) / 0x3 + parseInt(_0x2c2348(0x125)) / 0x4 + parseInt(_0x2c2348(0x129)) / 0x5 * (-parseInt(_0x2c2348(0x12a)) / 0x6) + -parseInt(_0x2c2348(0x128)) / 0x7 + -parseInt(_0x2c2348(0x133)) / 0x8 * (parseInt(_0x2c2348(0x127)) / 0x9) + parseInt(_0x2c2348(0x131)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x432d6);
function Main(input) {
  const _0x444fa4 = __DECODE_0__;
  input = input[_0x444fa4(0x126)]()[_0x444fa4(0x130)]('\x0a');
  const N = parseInt(input[0x0]);
  const array = input[0x1][_0x444fa4(0x130)]('\x20');
  const S = array[0x0];
  const T = array[0x1];
  let ans = '';
  for (let i = 0x0; i < N; ++i) {
    ans += S[i];
    ans += T[i];
  }
  console[_0x444fa4(0x12f)](ans);
}
Main(require('fs')['readFileSync'](a0_0x1a9156(0x12d), a0_0x1a9156(0x12c)));
