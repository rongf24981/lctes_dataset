(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8c)) / 0x1 * (-parseInt(__DECODE_0__(0x8e)) / 0x2) + -parseInt(__DECODE_0__(0x92)) / 0x3 + -parseInt(__DECODE_0__(0x95)) / 0x4 * (-parseInt(__DECODE_0__(0x99)) / 0x5) + parseInt(__DECODE_0__(0x94)) / 0x6 * (-parseInt(__DECODE_0__(0x9b)) / 0x7) + parseInt(__DECODE_0__(0x90)) / 0x8 * (-parseInt(__DECODE_0__(0x96)) / 0x9) + parseInt(__DECODE_0__(0x93)) / 0xa + parseInt(__DECODE_0__(0x8d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8e604);
function __STRING_ARRAY__() {
  var _0x2b4485 = ['split', 'fill', '430715UyJPHQ', 'log', '14672BaHgfW', 'readFileSync', 'utf8', 'filter', '320299nxDynz', '20555194VIGvhp', '6lZQryP', 'trim', '248OhUjyX', 'length', '2129508UNKrxF', '6064610vhVUqG', '3054heNzQh', '4CBnvIh', '337437UNUdQS'];
  __STRING_ARRAY__ = function () {
    return _0x2b4485;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var a = input[0x1][__DECODE_0__(0x8f)]()[__DECODE_0__(0x97)]('\x20')['map'](e => parseInt(e, 0xa));
  var a_max = 0xa ** 0x6 + 0x1;
  var dp = new Array(a_max + 0x1)[__DECODE_0__(0x98)](0x0);
  for (var i of a) {
    dp[i]++;
  }
  for (var i = 0x1; i <= a_max; i++) {
    if (dp[i] === 0x0) {
      continue;
    }
    for (var j = i + i; j <= a_max; j += i) {
      if (dp[j] !== 0x0) {
        dp[j] = 0x0;
      }
    }
  }
  console[__DECODE_0__(0x9a)](dp[__DECODE_0__(0x8b)](function (x) {
    return x == 0x1;
  })[__DECODE_0__(0x91)]);
}
function __DECODE_0__(JwSUyt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JwSUyt, key);
}
main(require('fs')[__DECODE_0__(0x9c)]('/dev/stdin', __DECODE_0__(0x8a))[__DECODE_0__(0x8f)]()[__DECODE_0__(0x97)]('\x0a'));
