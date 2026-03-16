var a0_0x7ee2d7 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3b5d34 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3b5d34(0x1b1)) / 0x1 * (-parseInt(_0x3b5d34(0x1bf)) / 0x2) + -parseInt(_0x3b5d34(0x1bc)) / 0x3 + parseInt(_0x3b5d34(0x1b5)) / 0x4 + parseInt(_0x3b5d34(0x1b9)) / 0x5 + parseInt(_0x3b5d34(0x1c0)) / 0x6 * (-parseInt(_0x3b5d34(0x1bb)) / 0x7) + parseInt(_0x3b5d34(0x1b2)) / 0x8 + parseInt(_0x3b5d34(0x1be)) / 0x9 * (-parseInt(_0x3b5d34(0x1b4)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf1633);
function Main(input) {
  var _0x3638ad = __DECODE_0__;
  input = input[_0x3638ad(0x1b3)]();
  var output = 0x0;
  var seijou = _0x3638ad(0x1b7);
  for (var i = 0x0; i < input[_0x3638ad(0x1b8)]; i++) {
    var tmp1 = input[_0x3638ad(0x1b6)](i, i + 0x1);
    var tmp2 = seijou[_0x3638ad(0x1b6)](i, i + 0x1);
    if (tmp1 != tmp2) {
      output++;
    }
  }
  console['log'](output);
}
function __STRING_ARRAY__() {
  var _0x254fe8 = ['CODEFESTIVAL2016', 'length', '7331165UglLFe', '/dev/stdin', '1442735jjaPkv', '1181928NIGDXx', 'readFileSync', '1080mIkMGu', '7298syJYHO', '18zzPVcp', '167esSreY', '7107904PnukUp', 'trim', '219290MsejUe', '6673560SwqFib', 'slice'];
  __STRING_ARRAY__ = function () {
    return _0x254fe8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XvarMO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XvarMO, key);
}
Main(require('fs')[a0_0x7ee2d7(0x1bd)](a0_0x7ee2d7(0x1ba), 'utf8'));
