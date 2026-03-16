function __STRING_ARRAY__() {
  var _0x5465ae = ['36HDVQVt', '459SWytdo', '3840260NDmJvv', 'log', '98659iFYTuI', '1029129tojUCl', 'readFileSync', '/dev/stdin', '9924ljZTnS', '6594091DFkMxz', '2746368OAmSJK', '8707302tveoKA', '12836TbOUxF', 'utf8', '8FvgkUb', '5UtYzBL'];
  __STRING_ARRAY__ = function () {
    return _0x5465ae;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x15d)) / 0x1 + parseInt(__DECODE_0__(0x154)) / 0x2 * (-parseInt(__DECODE_0__(0x159)) / 0x3) + -parseInt(__DECODE_0__(0x162)) / 0x4 + -parseInt(__DECODE_0__(0x157)) / 0x5 * (parseInt(__DECODE_0__(0x153)) / 0x6) + parseInt(__DECODE_0__(0x161)) / 0x7 * (-parseInt(__DECODE_0__(0x156)) / 0x8) + -parseInt(__DECODE_0__(0x158)) / 0x9 * (parseInt(__DECODE_0__(0x15a)) / 0xa) + -parseInt(__DECODE_0__(0x15c)) / 0xb * (-parseInt(__DECODE_0__(0x160)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc0f52);
function __DECODE_0__(YkhWII, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x153;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YkhWII, key);
}
function main(s) {
  var add = 0x0;
  for (var i = 0x0; i < 0x3; i++) {
    if (s[i] == 'o') {
      add++;
    }
  }
  console[__DECODE_0__(0x15b)](0x2bc + add * 0x64);
}
main(require('fs')[__DECODE_0__(0x15e)](__DECODE_0__(0x15f), __DECODE_0__(0x155)));
