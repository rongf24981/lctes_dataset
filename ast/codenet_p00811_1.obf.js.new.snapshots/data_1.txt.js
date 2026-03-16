var a0_0x2b3e2b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xc8c885 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xc8c885(0x8f)) / 0x1 + parseInt(_0xc8c885(0x8b)) / 0x2 * (parseInt(_0xc8c885(0x97)) / 0x3) + parseInt(_0xc8c885(0x92)) / 0x4 + -parseInt(_0xc8c885(0x8c)) / 0x5 + parseInt(_0xc8c885(0x96)) / 0x6 * (-parseInt(_0xc8c885(0x9b)) / 0x7) + -parseInt(_0xc8c885(0x90)) / 0x8 + parseInt(_0xc8c885(0x8e)) / 0x9 * (parseInt(_0xc8c885(0x94)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe28f8);
function prime(max) {
  var _0x19c2c3 = __DECODE_0__;
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[_0x19c2c3(0x98)](Math[_0x19c2c3(0x9c)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = [];
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[_0x19c2c3(0x9d)](arr[i]);
    }
  }
  return result;
}
var PRIME = prime(0x186a0);
function __STRING_ARRAY__() {
  var _0x11872f = ['1491nhmpWG', 'floor', 'readFileSync', 'length', '7QlWwAD', 'sqrt', 'push', 'log', '6610TXXOdX', '2541965VwPYip', 'some', '72UePNAJ', '1281156xrDCsu', '6943440qSrTBc', 'split', '2029516pGJlbT', 'trim', '237470PfNdMM', '0\x200\x200', '7900686qYAnMH'];
  __STRING_ARRAY__ = function () {
    return _0x11872f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(GKFUkf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GKFUkf, key);
}
var input = require('fs')[a0_0x2b3e2b(0x99)]('/dev/stdin', 'utf8');
var arr = input[a0_0x2b3e2b(0x93)]()['split']('\x0a');
arr[a0_0x2b3e2b(0x8d)](function (v) {
  var _0x3e42f2 = a0_0x2b3e2b;
  if (v == _0x3e42f2(0x95)) {
    return !![];
  }
  var mab = v[_0x3e42f2(0x91)]('\x20')['map'](Number);
  var m = mab[0x0];
  var a = mab[0x1];
  var b = mab[0x2];
  var ans = [0x0, 0x0, 0x0];
  for (var p = 0x0; p < PRIME[_0x3e42f2(0x9a)]; p++) {
    for (var q = p; q < PRIME[_0x3e42f2(0x9a)]; q++) {
      var pq = PRIME[p] * PRIME[q];
      if (pq > m) {
        break;
      }
      if (PRIME[q] * a <= PRIME[p] * b && ans[0x2] < pq) {
        ans = [PRIME[p], PRIME[q], pq];
      }
    }
  }
  console[_0x3e42f2(0x9e)](ans[0x0] + '\x20' + ans[0x1]);
});
