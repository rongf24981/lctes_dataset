(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ef)) / 0x1 * (parseInt(__DECODE_0__(0x1f3)) / 0x2) + parseInt(__DECODE_0__(0x1f0)) / 0x3 + parseInt(__DECODE_0__(0x1ed)) / 0x4 * (-parseInt(__DECODE_0__(0x1f2)) / 0x5) + parseInt(__DECODE_0__(0x1eb)) / 0x6 * (parseInt(__DECODE_0__(0x1f1)) / 0x7) + parseInt(__DECODE_0__(0x1f8)) / 0x8 * (-parseInt(__DECODE_0__(0x1f4)) / 0x9) + -parseInt(__DECODE_0__(0x1fa)) / 0xa * (parseInt(__DECODE_0__(0x1f7)) / 0xb) + parseInt(__DECODE_0__(0x1fb)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x674e4);
function Main(input) {
  var args = input['split']('\x0a');
  var N = parseInt(args, 0xa);
  var history = args[__DECODE_0__(0x1ea)](0x1, N + 0x1);
  var answer;
  var flg = 0x1;
  var plan = [];
  plan[0x0] = [0x0, 0x0, 0x0];
  for (var i = 0x0; i < N; i++) {
    plan[i + 0x1] = parser(history[i]);
  }
  for (var i = 0x1; i < plan[__DECODE_0__(0x1e9)]; i++) {
    var rec1 = plan[i - 0x1];
    var rec2 = plan[i];
    var dt = rec2[0x0] - rec1[0x0];
    var dist = Math[__DECODE_0__(0x1e7)](rec2[0x1] + rec2[0x2] - rec1[0x1] - rec1[0x2]);
    if (dt >= dist && dt % 0x2 === dist % 0x2) {} else {
      flg = 0x0;
    }
  }
  answer = flg ? __DECODE_0__(0x1f5) : 'No';
  console[__DECODE_0__(0x1e8)](answer);
}
function parser(record) {
  var args = record[__DECODE_0__(0x1ee)]('\x20');
  var return_val = [];
  return_val[__DECODE_0__(0x1f9)](parseInt(args[0x0], 0xa));
  return_val[__DECODE_0__(0x1f9)](parseInt(args[0x1], 0xa));
  return_val[__DECODE_0__(0x1f9)](parseInt(args[0x2], 0xa));
  return return_val;
}
Main(require('fs')[__DECODE_0__(0x1ec)](__DECODE_0__(0x1fc), __DECODE_0__(0x1f6)));
function __DECODE_0__(iwIziP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iwIziP, key);
}
function __STRING_ARRAY__() {
  var _0x377b0d = ['utf8', '44owvdVq', '2248IzwaTc', 'push', '1491490WDhswU', '16290624DplrNB', '/dev/stdin', 'abs', 'log', 'length', 'slice', '56082JCweFA', 'readFileSync', '188myUwMf', 'split', '158RHLkEp', '1913862FyEfRo', '203kLvXYj', '68840HrxCRL', '4650HncCsc', '7443lAOfEz', 'Yes'];
  __STRING_ARRAY__ = function () {
    return _0x377b0d;
  };
  return __STRING_ARRAY__();
}
