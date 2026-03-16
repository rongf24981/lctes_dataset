function __STRING_ARRAY__() {
  const _0x776de1 = ['set', '96JytTls', 'map', 'sort', '38oRaJyK', 'readFileSync', 'length', '274041eJbUgo', 'slice', '6634744GgaGRd', '240ILKpeE', 'join', '3800636QjoNgw', '102876GHVRnj', 'get', '140kfYQIH', '29147767sRnxpr', 'utf8', '13644XwVYrP', 'has', '31763SGgFVf', '/dev/stdin', 'from'];
  __STRING_ARRAY__ = function () {
    return _0x776de1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(lKDsXQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ba;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lKDsXQ, key);
}
const a0_0x257f2b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x3efc1c = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x3efc1c(0x1bf)) / 0x1 * (-parseInt(_0x3efc1c(0x1c6)) / 0x2) + parseInt(_0x3efc1c(0x1cf)) / 0x3 * (parseInt(_0x3efc1c(0x1c3)) / 0x4) + -parseInt(_0x3efc1c(0x1cc)) / 0x5 * (parseInt(_0x3efc1c(0x1bd)) / 0x6) + parseInt(_0x3efc1c(0x1ce)) / 0x7 + parseInt(_0x3efc1c(0x1cb)) / 0x8 + parseInt(_0x3efc1c(0x1c9)) / 0x9 * (parseInt(_0x3efc1c(0x1ba)) / 0xa) + -parseInt(_0x3efc1c(0x1bb)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71cd5);
function main(input) {
  const _0x98951a = __DECODE_0__;
  const list = input['split']('\x0a')[_0x98951a(0x1ca)](0x1)[_0x98951a(0x1c4)](s => Array[_0x98951a(0x1c1)](s)[_0x98951a(0x1c5)]()[_0x98951a(0x1cd)](''));
  let totalCount = 0x0;
  const map = new Map();
  for (let i = 0x0; i < list[_0x98951a(0x1c8)]; i++) {
    if (!map[_0x98951a(0x1be)](list[i])) {
      map[_0x98951a(0x1c2)](list[i], 0x1);
      continue;
    }
    totalCount += map['get'](list[i]);
    map['set'](list[i], map[_0x98951a(0x1d0)](list[i]) + 0x1);
  }
  console['log'](totalCount);
}
main(require('fs')[a0_0x257f2b(0x1c7)](a0_0x257f2b(0x1c0), a0_0x257f2b(0x1bc)));
