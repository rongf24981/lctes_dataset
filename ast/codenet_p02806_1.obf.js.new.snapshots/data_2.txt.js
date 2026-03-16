function __STRING_ARRAY__() {
  var _0x3e3024 = ['split', '1577406ttEszR', '33787CuooYv', '17912fTBXZR', 'log', '30OdQKdA', '53000RMmxVx', '68750zDkXCS', 'indexOf', '10mZPnpV', '407sDMzwv', '32jjZClb', '16356fDrGAk', 'splice', '693wFkltH', '1320ORqrzM', '/dev/stdin', '1425592RiPVXt', 'utf8', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x3e3024;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa6)) / 0x1 * (parseInt(__DECODE_0__(0xb2)) / 0x2) + parseInt(__DECODE_0__(0xb0)) / 0x3 + -parseInt(__DECODE_0__(0xa7)) / 0x4 * (parseInt(__DECODE_0__(0xa4)) / 0x5) + -parseInt(__DECODE_0__(0xa0)) / 0x6 * (-parseInt(__DECODE_0__(0xac)) / 0x7) + -parseInt(__DECODE_0__(0xa1)) / 0x8 * (parseInt(__DECODE_0__(0xa9)) / 0x9) + -parseInt(__DECODE_0__(0xa2)) / 0xa * (parseInt(__DECODE_0__(0xa5)) / 0xb) + parseInt(__DECODE_0__(0xaa)) / 0xc * (-parseInt(__DECODE_0__(0xb1)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbc80a);
function __DECODE_0__(MucBrx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MucBrx, key);
}
function Main(input) {
  var lines = input['split']('\x0a');
  var titles = lines['map'](l => l[__DECODE_0__(0xaf)]('\x20')[0x0])[__DECODE_0__(0xa8)](0x1, lines[__DECODE_0__(0xae)] - 0x2);
  var sleptAt = titles[__DECODE_0__(0xa3)](lines[lines[__DECODE_0__(0xae)] - 0x1]);
  var sum = 0x0;
  for (var i = sleptAt + 0x2; i < lines[__DECODE_0__(0xae)] - 0x1; i++) {
    sum += Number(lines[i][__DECODE_0__(0xaf)]('\x20')[0x1]);
  }
  console[__DECODE_0__(0xb3)](sum);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xab), __DECODE_0__(0xad)));
