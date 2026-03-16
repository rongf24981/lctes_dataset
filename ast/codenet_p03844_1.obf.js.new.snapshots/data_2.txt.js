(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf1)) / 0x1 + parseInt(__DECODE_0__(0xef)) / 0x2 + -parseInt(__DECODE_0__(0xe9)) / 0x3 + -parseInt(__DECODE_0__(0xec)) / 0x4 + parseInt(__DECODE_0__(0xea)) / 0x5 + -parseInt(__DECODE_0__(0xee)) / 0x6 + parseInt(__DECODE_0__(0xf2)) / 0x7 * (parseInt(__DECODE_0__(0xe6)) / 0x8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xefc1a);
process[__DECODE_0__(0xe4)]['resume']();
function __STRING_ARRAY__() {
  var _0x53105a = ['log', '6837402OnUdHB', '1574500BOEmPY', 'split', '485230eqDdqg', '5523WxlRqh', 'stdin', 'SIGINT', '20224wgjJzO', 'ascii', 'exit', '5816511mXAQbg', '9362070gnsvQW', 'data', '4316160ljSKRq'];
  __STRING_ARRAY__ = function () {
    return _0x53105a;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0xe4)]['setEncoding'](__DECODE_0__(0xe7));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process['stdin']['on'](__DECODE_0__(0xeb), function (data) {
  input_stdin += data;
});
process['on'](__DECODE_0__(0xe5), function () {
  input_stdin_array = input_stdin['split']('\x0a');
  main();
  process[__DECODE_0__(0xe8)]();
});
process['stdin']['on']('end', function () {
  input_stdin_array = input_stdin['split']('\x0a');
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function __DECODE_0__(boikmr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(boikmr, key);
}
function main() {
  var s = readLine()[__DECODE_0__(0xf0)]('\x20');
  var a = parseInt(s[0x0]);
  var op = s[0x1];
  var b = parseInt(s[0x2]);
  var c;
  if (op == '+') {
    c = a + b;
  } else {
    c = a - b;
  }
  console[__DECODE_0__(0xed)](c);
}
