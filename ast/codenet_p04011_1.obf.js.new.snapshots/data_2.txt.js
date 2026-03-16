function __DECODE_0__(fznMDu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fznMDu, key);
}
function __STRING_ARRAY__() {
  var _0x3a94aa = ['/dev/stdin', '444564ypIjjx', 'setEncoding', 'split', '2IUXPnC', '7760159hTfKbo', '438258NkKHhY', '91436AlGUit', 'log', '8TuMSyO', '1412890vZjQoG', '3775604LLPliL', '18TyGEAL', 'utf8', '4595faCjXo', 'stdin', 'initial_answer', '1374TyQmbm'];
  __STRING_ARRAY__ = function () {
    return _0x3a94aa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x166)) / 0x1 * (parseInt(__DECODE_0__(0x169)) / 0x2) + parseInt(__DECODE_0__(0x168)) / 0x3 + -parseInt(__DECODE_0__(0x163)) / 0x4 + parseInt(__DECODE_0__(0x170)) / 0x5 * (parseInt(__DECODE_0__(0x161)) / 0x6) + parseInt(__DECODE_0__(0x16d)) / 0x7 * (parseInt(__DECODE_0__(0x16b)) / 0x8) + -parseInt(__DECODE_0__(0x16e)) / 0x9 * (-parseInt(__DECODE_0__(0x16c)) / 0xa) + -parseInt(__DECODE_0__(0x167)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x42069);
process[__DECODE_0__(0x15f)]['resume']();
process[__DECODE_0__(0x15f)][__DECODE_0__(0x164)]('utf8');
function Main(input) {
  var arg = input['split']('\x0a');
  var line0 = arg[0x0]['split']('\x20');
  var line1 = arg[0x1][__DECODE_0__(0x165)]('\x20');
  var line2 = arg[0x2]['split']('\x20');
  var line3 = arg[0x3]['split']('\x20');
  var input1 = Number(line0[0x0]);
  var input2 = Number(line1[0x0]);
  var input3 = Number(line2[0x0]);
  var input4 = Number(line3[0x0]);
  var ans = __DECODE_0__(0x160);
  if (input1 < input2) {
    console[__DECODE_0__(0x16a)](input3 * input1);
  } else {
    console[__DECODE_0__(0x16a)](input3 * input2 + (input1 - input2) * input4);
  }
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x162), __DECODE_0__(0x16f)));
