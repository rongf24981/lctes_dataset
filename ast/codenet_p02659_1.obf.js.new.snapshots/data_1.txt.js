var a0_0x21c472 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x624018 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x624018(0xa2)) / 0x1 * (parseInt(_0x624018(0x9f)) / 0x2) + -parseInt(_0x624018(0xa7)) / 0x3 + -parseInt(_0x624018(0x9e)) / 0x4 + -parseInt(_0x624018(0x98)) / 0x5 * (-parseInt(_0x624018(0xa0)) / 0x6) + -parseInt(_0x624018(0xa8)) / 0x7 * (parseInt(_0x624018(0xa9)) / 0x8) + -parseInt(_0x624018(0x9b)) / 0x9 + -parseInt(_0x624018(0x9a)) / 0xa * (-parseInt(_0x624018(0x9c)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9e83c);
function __STRING_ARRAY__() {
  var _0x25d629 = ['log', 'floor', 'getElementById', '55weUBHC', 'split', '10kLBgKM', '1501677lNXvXQ', '20951381UJTxXT', 'output', '864484HkacMi', '145922gsrdeU', '279486sEyrWd', 'innerHTML', '3IFybmO', 'utf8', 'result', 'value', 'input', '1334124XoeAGi', '5048547xcvQaR', '8ZhhvWc', 'toString'];
  __STRING_ARRAY__ = function () {
    return _0x25d629;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var _0x4e6c35 = __DECODE_0__;
  input = input[_0x4e6c35(0x99)]('\x0a');
  var A = Number(input[0x0][_0x4e6c35(0x99)]('\x20')[0x0]);
  var B = Number(input[0x0][_0x4e6c35(0x99)]('\x20')[0x1]);
  var ans = BigInt(Math[_0x4e6c35(0x96)](A * B));
  var ans = ans[_0x4e6c35(0x94)]();
  console[_0x4e6c35(0x95)]('%s', ans);
  return ans;
}
function debug(n) {
  var _0x1ed9f5 = __DECODE_0__;
  var input = document[_0x1ed9f5(0x97)](_0x1ed9f5(0xa6) + n)[_0x1ed9f5(0xa5)];
  var ans = Main(input);
  var result = 'WA';
  if (ans == document[_0x1ed9f5(0x97)](_0x1ed9f5(0x9d) + n)['value'][_0x1ed9f5(0x99)]('\x0a')[0x0]) {
    result = 'AC';
  }
  document[_0x1ed9f5(0x97)](_0x1ed9f5(0xa4) + n)[_0x1ed9f5(0xa1)] = result;
}
function __DECODE_0__(ABVxKR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x94;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ABVxKR, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x21c472(0xa3)));
