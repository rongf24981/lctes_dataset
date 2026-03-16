function __DECODE_0__(Hsnpej, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Hsnpej, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x184)) / 0x1 + -parseInt(__DECODE_0__(0x18e)) / 0x2 + parseInt(__DECODE_0__(0x187)) / 0x3 + parseInt(__DECODE_0__(0x18d)) / 0x4 * (parseInt(__DECODE_0__(0x18f)) / 0x5) + -parseInt(__DECODE_0__(0x17f)) / 0x6 + parseInt(__DECODE_0__(0x18c)) / 0x7 + -parseInt(__DECODE_0__(0x182)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x659f9);
function Main(input) {
  input = input[__DECODE_0__(0x181)]()[__DECODE_0__(0x180)]('\x0a')['map'](function (x) {
    return x[__DECODE_0__(0x180)]('\x20');
  });
  var H = parseInt(input[0x0][0x0], 0xa);
  var W = parseInt(input[0x0][0x1], 0xa);
  var ans = calc(H, W);
  console[__DECODE_0__(0x183)](ans);
}
function calc(H, W) {
  if (H % 0x3 === 0x0 || W % 0x3 === 0x0) {
    return 0x0;
  }
  var result = H * W;
  var tmp;
  var oldtmp = result;
  for (var i = 0x0; i <= W; i++) {
    tmp = Math[__DECODE_0__(0x18b)](Math[__DECODE_0__(0x185)](i * H - (W - i) * Math[__DECODE_0__(0x189)](H / 0x2)), Math[__DECODE_0__(0x185)](i * H - (W - i) * Math[__DECODE_0__(0x188)](H / 0x2)), H % 0x2 * (W - i));
    result = Math['min'](result, tmp);
    if (tmp > oldtmp) {
      break;
    }
    oldtmp = tmp;
  }
  [W, H] = [H, W];
  oldtmp = H * W;
  for (var i = 0x0; i <= W; i++) {
    tmp = Math['max'](Math[__DECODE_0__(0x185)](i * H - (W - i) * Math[__DECODE_0__(0x189)](H / 0x2)), Math['abs'](i * H - (W - i) * Math['floor'](H / 0x2)), H % 0x2 * (W - i));
    result = Math['min'](result, tmp);
    if (tmp > oldtmp) {
      break;
    }
    oldtmp = tmp;
  }
  return Math['min'](result, H, W);
}
Main(require('fs')[__DECODE_0__(0x18a)](__DECODE_0__(0x186), 'utf8'));
function __STRING_ARRAY__() {
  var _0x2e8fd1 = ['log', '295155koBUDE', 'abs', '/dev/stdin', '936996RMLFSu', 'floor', 'ceil', 'readFileSync', 'max', '2365426fGfIgw', '4irKKiO', '277670DqcApj', '2469765PjLUki', '2200074SDofkm', 'split', 'trim', '4140760njxEbK'];
  __STRING_ARRAY__ = function () {
    return _0x2e8fd1;
  };
  return __STRING_ARRAY__();
}
