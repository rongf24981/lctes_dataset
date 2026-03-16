(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa2)) / 0x1 * (parseInt(__DECODE_0__(0x9f)) / 0x2) + -parseInt(__DECODE_0__(0xa7)) / 0x3 + -parseInt(__DECODE_0__(0x9e)) / 0x4 + -parseInt(__DECODE_0__(0x98)) / 0x5 * (-parseInt(__DECODE_0__(0xa0)) / 0x6) + -parseInt(__DECODE_0__(0xa8)) / 0x7 * (parseInt(__DECODE_0__(0xa9)) / 0x8) + -parseInt(__DECODE_0__(0x9b)) / 0x9 + -parseInt(__DECODE_0__(0x9a)) / 0xa * (-parseInt(__DECODE_0__(0x9c)) / 0xb);
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
  input = input[__DECODE_0__(0x99)]('\x0a');
  var A = Number(input[0x0][__DECODE_0__(0x99)]('\x20')[0x0]);
  var B = Number(input[0x0][__DECODE_0__(0x99)]('\x20')[0x1]);
  var ans = BigInt(Math[__DECODE_0__(0x96)](A * B));
  var ans = ans[__DECODE_0__(0x94)]();
  console[__DECODE_0__(0x95)]('%s', ans);
  return ans;
}
function debug(n) {
  var input = document[__DECODE_0__(0x97)](__DECODE_0__(0xa6) + n)[__DECODE_0__(0xa5)];
  var ans = Main(input);
  var result = 'WA';
  if (ans == document[__DECODE_0__(0x97)](__DECODE_0__(0x9d) + n)['value'][__DECODE_0__(0x99)]('\x0a')[0x0]) {
    result = 'AC';
  }
  document[__DECODE_0__(0x97)](__DECODE_0__(0xa4) + n)[__DECODE_0__(0xa1)] = result;
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
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xa3)));
