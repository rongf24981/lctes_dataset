(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a6)) / 0x1 + parseInt(__DECODE_0__(0x1ab)) / 0x2 * (-parseInt(__DECODE_0__(0x1ae)) / 0x3) + parseInt(__DECODE_0__(0x1a9)) / 0x4 + parseInt(__DECODE_0__(0x1a7)) / 0x5 * (parseInt(__DECODE_0__(0x1a2)) / 0x6) + -parseInt(__DECODE_0__(0x1ad)) / 0x7 + parseInt(__DECODE_0__(0x1a4)) / 0x8 + -parseInt(__DECODE_0__(0x1a8)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbc8a6);
function main(input) {
  input = input['split']('\x0a');
  var answer = input[0x0];
  var answerA = input[0x0][__DECODE_0__(0x1ac)]();
  if (answer == answerA) {
    console[__DECODE_0__(0x1aa)]('A');
  } else {
    console[__DECODE_0__(0x1aa)]('a');
  }
}
main(require('fs')[__DECODE_0__(0x1a3)]('/dev/stdin', __DECODE_0__(0x1a5)));
function __DECODE_0__(UqxiZz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UqxiZz, key);
}
function __STRING_ARRAY__() {
  var _0x59e6f5 = ['125RXzoxy', '2600010QxpSmu', '3872340sMTiPj', 'log', '2bmUmgp', 'toUpperCase', '5259863LzaPqJ', '2685615qkJwum', '271290JfhgBQ', 'readFileSync', '6479240TRfDSi', 'utf8', '200599NnSKxn'];
  __STRING_ARRAY__ = function () {
    return _0x59e6f5;
  };
  return __STRING_ARRAY__();
}
