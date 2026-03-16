(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1de)) / 0x1 * (parseInt(__DECODE_0__(0x1e9)) / 0x2) + parseInt(__DECODE_0__(0x1e1)) / 0x3 + -parseInt(__DECODE_0__(0x1dc)) / 0x4 + -parseInt(__DECODE_0__(0x1df)) / 0x5 * (-parseInt(__DECODE_0__(0x1e3)) / 0x6) + parseInt(__DECODE_0__(0x1e7)) / 0x7 + parseInt(__DECODE_0__(0x1ed)) / 0x8 + -parseInt(__DECODE_0__(0x1e6)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3bf01);
function divisor(n) {
  var ret = [];
  for (var i = 0x1; i * i <= n; i++) {
    if (n % i == 0x0) {
      ret[__DECODE_0__(0x1ec)](i);
      if (i * i != n) {
        ret['push'](n / i);
      }
    }
  }
  return ret;
}
function __DECODE_0__(ukIMQG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1dc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ukIMQG, key);
}
function f(a, b) {
  return Math['max'](('' + a)[__DECODE_0__(0x1dd)], ('' + b)['length']);
}
function __STRING_ARRAY__() {
  var _0x5ce679 = ['341163eHlggq', '2559095caqUoN', 'readFileSync', '603102ZHcXKw', 'utf8', 'floor', 'push', '1739440shIARl', '1061352rlkvAi', 'length', '1plBpDx', '5bWLVRx', '/dev/stdin', '29097ELCrep', 'log', '1545522IpuLye', 'split', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x5ce679;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var inputs = input[__DECODE_0__(0x1e4)]('\x0a');
  var n = parseInt(inputs[0x0], 0xa);
  var divisors = divisor(n)[__DECODE_0__(0x1e5)]((a, b) => a - b);
  var surplus = divisors[__DECODE_0__(0x1dd)] % 0x2;
  var lastIndex = divisors[__DECODE_0__(0x1dd)] - 0x1;
  var halfLen = Math[__DECODE_0__(0x1eb)](divisors[__DECODE_0__(0x1dd)] / 0x2);
  var minF = ('' + n)['length'];
  for (var i = 0x0; i < halfLen - surplus; i++) {
    minF = Math['min'](minF, f(divisors[i], divisors[lastIndex - i]));
  }
  if (surplus == 0x1) {
    minF = Math['min'](minF, ('' + divisors[halfLen])[__DECODE_0__(0x1dd)]);
  }
  console[__DECODE_0__(0x1e2)](minF);
}
main(require('fs')[__DECODE_0__(0x1e8)](__DECODE_0__(0x1e0), __DECODE_0__(0x1ea)));
