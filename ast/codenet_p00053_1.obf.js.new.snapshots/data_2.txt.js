(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x200)) / 0x1 * (-parseInt(__DECODE_0__(0x1f9)) / 0x2) + parseInt(__DECODE_0__(0x1f6)) / 0x3 * (-parseInt(__DECODE_0__(0x1fa)) / 0x4) + parseInt(__DECODE_0__(0x1f8)) / 0x5 * (parseInt(__DECODE_0__(0x1f1)) / 0x6) + -parseInt(__DECODE_0__(0x1ee)) / 0x7 * (parseInt(__DECODE_0__(0x1f2)) / 0x8) + parseInt(__DECODE_0__(0x1fe)) / 0x9 + -parseInt(__DECODE_0__(0x1f3)) / 0xa + parseInt(__DECODE_0__(0x1fb)) / 0xb * (parseInt(__DECODE_0__(0x1ed)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x195aa);
var m = [-0x1, 0x2, 0x3, 0x5, 0x7, 0xb, 0xd];
function p(n) {
  if (m[n]) {
    return m[n];
  }
  var found = m[__DECODE_0__(0x1f4)] - 0x1;
  var foundP = m[found];
  for (var i = foundP + 0x2;; i += 0x2) {
    if (isPrime(i)) {
      found++;
      m[found] = i;
      if (found == n) {
        return i;
      }
    }
  }
}
function isPrime(num) {
  if (num % 0x3 == 0x0) {
    return ![];
  }
  var limit = Math[__DECODE_0__(0x1ff)](Math[__DECODE_0__(0x1fc)](num));
  var i = 0x1;
  while (i * 0x6 - 0x1 <= limit) {
    if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0) {
      return ![];
    }
    i++;
  }
  return !![];
}
function __STRING_ARRAY__() {
  var _0x216243 = ['135684ezEHSa', 'round', '2627UhEVmJ', '332292ULsqPF', '5446byvbZi', 'log', 'shift', '84fEtnWC', '616qtDqhg', '930190lcTIED', 'length', 'readFileSync', '1662QfhHHW', 'utf8', '3735RDUXzZ', '20LUAcCZ', '340ejzbym', '121YWyxQh', 'sqrt', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x216243;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x1f5)]('/dev/stdin', __DECODE_0__(0x1f7));
var lines = input[__DECODE_0__(0x1fd)]('\x0a');
var line;
function __DECODE_0__(cixEoQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ed;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cixEoQ, key);
}
while (line = lines[__DECODE_0__(0x1f0)]()) {
  var num = +line;
  if (num == 0x0) {
    break;
  }
  var s = 0x0;
  for (var i = num; i > 0x0; i--) {
    s += p(i);
  }
  console[__DECODE_0__(0x1ef)](s);
}
