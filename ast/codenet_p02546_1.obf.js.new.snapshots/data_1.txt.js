const a0_0x26f5f8 = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x57f783 = ['slice', '19310GKlUjM', '28FfRmKg', '4321360aJBHNQ', '2746656vHLZeU', 'utf8', '10835143QpKXLt', 'log', '60DmeqMu', '16568eOpbGO', '87OIVHdi', '553192iXUbxK', '91655BQJXer', '228nJXssL', '/dev/stdin', '12dbPefB'];
  __STRING_ARRAY__ = function () {
    return _0x57f783;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x4ced0a = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x4ced0a(0x145)) / 0x1 * (-parseInt(_0x4ced0a(0x13c)) / 0x2) + parseInt(_0x4ced0a(0x13e)) / 0x3 * (parseInt(_0x4ced0a(0x13d)) / 0x4) + -parseInt(_0x4ced0a(0x140)) / 0x5 * (parseInt(_0x4ced0a(0x141)) / 0x6) + parseInt(_0x4ced0a(0x146)) / 0x7 * (-parseInt(_0x4ced0a(0x13f)) / 0x8) + parseInt(_0x4ced0a(0x148)) / 0x9 + -parseInt(_0x4ced0a(0x147)) / 0xa + parseInt(_0x4ced0a(0x13a)) / 0xb * (parseInt(_0x4ced0a(0x143)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8ea71);
function __DECODE_0__(zRErJn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zRErJn, key);
}
function Main(input) {
  const _0x35d9c0 = __DECODE_0__;
  input = input['split']('\x0a');
  input = input[0x0];
  const last = input[_0x35d9c0(0x144)](-0x1);
  const sufix = last === 's' ? 'es' : 's';
  console[_0x35d9c0(0x13b)]('' + input + sufix);
}
Main(require('fs')['readFileSync'](a0_0x26f5f8(0x142), a0_0x26f5f8(0x149)));
