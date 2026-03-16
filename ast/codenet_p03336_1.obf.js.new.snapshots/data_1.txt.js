const a0_0xaff972 = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x10f370 = ['183pkrvaG', 'readFileSync', '3235526ZGLDkM', 'log', '1400940NeFXid', '534990xprYAS', 'floor', 'split', '1017HsupWz', '2608mOKaZX', '/dev/stdin', '395942JPgQqh', '28072RJgesJ', '288604TLARdu'];
  __STRING_ARRAY__ = function () {
    return _0x10f370;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(aNlYDG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aNlYDG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x28733c = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x28733c(0x1a3)) / 0x1 + parseInt(_0x28733c(0x1a1)) / 0x2 * (-parseInt(_0x28733c(0x1a6)) / 0x3) + parseInt(_0x28733c(0x1a5)) / 0x4 + -parseInt(_0x28733c(0x19c)) / 0x5 + parseInt(_0x28733c(0x19d)) / 0x6 + parseInt(_0x28733c(0x19a)) / 0x7 + parseInt(_0x28733c(0x1a4)) / 0x8 * (parseInt(_0x28733c(0x1a0)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x408b9);
function Main(input) {
  const _0x53d988 = __DECODE_0__;
  input = input[_0x53d988(0x19f)]('\x0a');
  const row1 = input[0x0][_0x53d988(0x19f)]('\x20');
  const N = parseInt(row1[0x0]);
  const M = parseInt(row1[0x1]);
  const K = parseInt(row1[0x2]);
  var S = parseInt(input[0x1], 0x2);
  var T = parseInt(input[0x2], 0x2);
  for (var i = 0x0; i < K; i++) {
    var sANDt = S & T;
    S = S + sANDt;
    T = T + sANDt;
  }
  const sBinary = toBinary(S);
  const tBinary = toBinary(T);
  console[_0x53d988(0x19b)](sBinary);
  console[_0x53d988(0x19b)](tBinary);
}
function toBinary(a) {
  const _0x5b2fdd = __DECODE_0__;
  var num = a;
  var binary = '';
  while (num > 0x0) {
    binary = num % 0x2 + binary;
    num = Math[_0x5b2fdd(0x19e)](num / 0x2);
  }
  return binary;
}
Main(require('fs')[a0_0xaff972(0x1a7)](a0_0xaff972(0x1a2), 'utf8'));
