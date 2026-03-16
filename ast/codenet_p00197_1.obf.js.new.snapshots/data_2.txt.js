(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb8)) / 0x1 * (-parseInt(__DECODE_0__(0xb2)) / 0x2) + -parseInt(__DECODE_0__(0xaf)) / 0x3 + parseInt(__DECODE_0__(0xb6)) / 0x4 * (-parseInt(__DECODE_0__(0xbc)) / 0x5) + parseInt(__DECODE_0__(0xb4)) / 0x6 * (parseInt(__DECODE_0__(0xb5)) / 0x7) + parseInt(__DECODE_0__(0xae)) / 0x8 + -parseInt(__DECODE_0__(0xbf)) / 0x9 + -parseInt(__DECODE_0__(0xb9)) / 0xa * (-parseInt(__DECODE_0__(0xbe)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd8e36);
(function () {
  var input = '';
  var cnt = 0x0;
  function main() {
    var inputLen;
    var nums;
    var x;
    var y;
    var temp;
    var ans;
    inputLen = input[__DECODE_0__(0xb7)];
    for (i = 0x0; i < inputLen; i += 0x1) {
      nums = input[i][__DECODE_0__(0xba)]('\x20');
      x = parseInt(nums[0x0], 0xa);
      y = parseInt(nums[0x1], 0xa);
      if (x === 0x0 && y === 0x0) {
        break;
      } else {
        if (x < y) {
          temp = x;
          x = y;
          y = temp;
        }
      }
      ans = gcd(x, y);
      showResult(ans, cnt);
      cnt = 0x0;
    }
  }
  function gcd(x, y) {
    cnt += 0x1;
    return x % y === 0x0 ? y : gcd(y, x % y);
  }
  function showResult(result, cnt) {
    console[__DECODE_0__(0xb3)](result + '\x20' + cnt);
  }
  process[__DECODE_0__(0xb0)][__DECODE_0__(0xad)]();
  process[__DECODE_0__(0xb0)]['setEncoding'](__DECODE_0__(0xbd));
  process['stdin']['on'](__DECODE_0__(0xb1), function (chunk) {
    input += chunk;
  });
  process[__DECODE_0__(0xb0)]['on'](__DECODE_0__(0xbb), function () {
    input = input[__DECODE_0__(0xba)]('\x0a');
    main();
  });
})();
function __DECODE_0__(ldhdQj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xad;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ldhdQj, key);
}
function __STRING_ARRAY__() {
  var _0x3c38da = ['stdin', 'data', '81574mTOjqs', 'log', '508278vtolAA', '112knhiAd', '720260rEJyKh', 'length', '1GULhWL', '20iCqRpW', 'split', 'end', '5gKWfXL', 'utf8', '684222oDTVmu', '10752111ZlucVw', 'resume', '9126272bSXcyT', '950073ZQhuuZ'];
  __STRING_ARRAY__ = function () {
    return _0x3c38da;
  };
  return __STRING_ARRAY__();
}
