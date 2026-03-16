var a0_0x5d732f = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x2fb056 = ['984078mAnzOW', '/dev/stdin', '631135EthfXM', 'split', '234pDBeeg', '77OAOtpA', '4870cdoQLD', '228jqslWb', '4pltUGA', '25064DynTJp', '315050EsiZHy', 'forEach', 'log', 'includes', '1146404sBGqkL', '31075JbnbfN'];
  __STRING_ARRAY__ = function () {
    return _0x2fb056;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jCVhbx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jCVhbx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x4093bc = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4093bc(0x92)) / 0x1 + -parseInt(_0x4093bc(0x99)) / 0x2 * (parseInt(_0x4093bc(0x8a)) / 0x3) + -parseInt(_0x4093bc(0x8b)) / 0x4 * (-parseInt(_0x4093bc(0x95)) / 0x5) + -parseInt(_0x4093bc(0x93)) / 0x6 + parseInt(_0x4093bc(0x91)) / 0x7 + parseInt(_0x4093bc(0x8c)) / 0x8 * (-parseInt(_0x4093bc(0x97)) / 0x9) + -parseInt(_0x4093bc(0x8d)) / 0xa * (-parseInt(_0x4093bc(0x98)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1b1e6);
function Main(input) {
  var _0x1daa55 = __DECODE_0__;
  input = input[_0x1daa55(0x96)]('\x20');
  input = input['map'](Number);
  children = 0x2;
  function sub(arry, num) {
    var _0x1fe03e = _0x1daa55;
    var sum = 0x0;
    arry[_0x1fe03e(0x8e)](element => {
      sum += element;
    });
    return arry[_0x1fe03e(0x90)](sum / num);
  }
  if (sub(input, children)) {
    console[_0x1daa55(0x8f)]('Yes');
  } else {
    console[_0x1daa55(0x8f)]('No');
  }
}
Main(require('fs')['readFileSync'](a0_0x5d732f(0x94), 'utf8'));
