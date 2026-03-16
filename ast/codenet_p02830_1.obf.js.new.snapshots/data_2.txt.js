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
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x132)) / 0x1 * (-parseInt(__DECODE_0__(0x12e)) / 0x2) + parseInt(__DECODE_0__(0x12b)) / 0x3 + parseInt(__DECODE_0__(0x125)) / 0x4 + parseInt(__DECODE_0__(0x129)) / 0x5 * (-parseInt(__DECODE_0__(0x12a)) / 0x6) + -parseInt(__DECODE_0__(0x128)) / 0x7 + -parseInt(__DECODE_0__(0x133)) / 0x8 * (parseInt(__DECODE_0__(0x127)) / 0x9) + parseInt(__DECODE_0__(0x131)) / 0xa;
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
  input = input[__DECODE_0__(0x126)]()[__DECODE_0__(0x130)]('\x0a');
  const N = parseInt(input[0x0]);
  const array = input[0x1][__DECODE_0__(0x130)]('\x20');
  const S = array[0x0];
  const T = array[0x1];
  let ans = '';
  for (let i = 0x0; i < N; ++i) {
    ans += S[i];
    ans += T[i];
  }
  console[__DECODE_0__(0x12f)](ans);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x12d), __DECODE_0__(0x12c)));
