function __DECODE_0__(yJLldI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yJLldI, key);
}
function __STRING_ARRAY__() {
  var _0xeaaf82 = ['log', '275568BqkSiu', '5nGqxRp', '8dfsPZx', 'split', '504286sZDwDS', 'end', '78576HtktcM', 'stdin', 'utf8', 'length', '200793kajLpp', '1721181wFiBJs', '2199951DzsKfU', 'resume', 'indexOf', 'setEncoding', '3538450pBICsu', 'push', '4klNCrl'];
  __STRING_ARRAY__ = function () {
    return _0xeaaf82;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8f)) / 0x1 + -parseInt(__DECODE_0__(0x8d)) / 0x2 + -parseInt(__DECODE_0__(0x7f)) / 0x3 * (-parseInt(__DECODE_0__(0x87)) / 0x4) + parseInt(__DECODE_0__(0x8a)) / 0x5 * (parseInt(__DECODE_0__(0x89)) / 0x6) + -parseInt(__DECODE_0__(0x80)) / 0x7 + -parseInt(__DECODE_0__(0x8b)) / 0x8 * (-parseInt(__DECODE_0__(0x81)) / 0x9) + parseInt(__DECODE_0__(0x85)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x20d8d);
function main() {
  var i;
  var j;
  var n;
  var m;
  var x;
  var len = input[__DECODE_0__(0x7e)];
  for (i = 0x0; i < len; i++) {
    n = parseInt(input[i], 0xa);
    if (n === 0x0) {
      break;
    }
    if (n % 0x2 === 0x1) {
      console[__DECODE_0__(0x88)](0x0);
      continue;
    }
    m = ~~(n / 0x2);
    x = 0x0;
    j = 0x0;
    for (; primes[j] <= m; j++) {
      if (primes[__DECODE_0__(0x83)](n - primes[j]) !== -0x1) {
        x++;
      }
    }
    console[__DECODE_0__(0x88)](x);
  }
}
var primes = function (n) {
  var i;
  var j;
  var flag;
  var primes = [0x2];
  if (n < 0x2) {
    return [];
  }
  for (i = 0x3; i <= n; i += 0x2) {
    flag = !![];
    for (j = 0x0; primes[j] < i * i; j++) {
      if (i % primes[j] == 0x0) {
        flag = ![];
        break;
      }
    }
    if (flag) {
      primes[__DECODE_0__(0x86)](i);
    }
  }
  return primes;
}(0xc350);
var input = '';
process['stdin'][__DECODE_0__(0x82)]();
process['stdin'][__DECODE_0__(0x84)](__DECODE_0__(0x91));
process['stdin']['on']('data', function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x90)]['on'](__DECODE_0__(0x8e), function () {
  input = input[__DECODE_0__(0x8c)]('\x0a');
  main();
});
