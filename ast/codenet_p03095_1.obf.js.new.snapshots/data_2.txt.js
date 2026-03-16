function __DECODE_0__(eRSYPS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x197;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eRSYPS, key);
}
function __STRING_ARRAY__() {
  var _0x45db46 = ['/dev/stdin', '3082548BInnQP', '1922664qnbuly', '1432403lHbxBQ', 'split', '9205YWvrfW', 'log', '262560silYAY', 'round', 'push', '8HxxTTT', '2842740eBOqHU', 'utf8', '1313448mfbRea'];
  __STRING_ARRAY__ = function () {
    return _0x45db46;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a1)) / 0x1 * (-parseInt(__DECODE_0__(0x198)) / 0x2) + -parseInt(__DECODE_0__(0x1a3)) / 0x3 + parseInt(__DECODE_0__(0x19b)) / 0x4 + parseInt(__DECODE_0__(0x199)) / 0x5 + -parseInt(__DECODE_0__(0x19d)) / 0x6 + -parseInt(__DECODE_0__(0x19f)) / 0x7 + parseInt(__DECODE_0__(0x19e)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x59e1c);
function roop(depth, A, end) {
  var ans = 0x0;
  var i = 0x0;
  if (depth < end) {
    for (i = depth; i < end; i++) {
      ans += roop(i + 0x1, A, end);
    }
    return A[depth] + A[depth] * ans;
  } else {
    return A[depth];
  }
}
function main(input) {
  var i;
  var j;
  var A;
  var B;
  var ans = 0x0;
  var count = 0x0;
  var inputs = input['split']('\x0a');
  var arg = Number(inputs[0x0]);
  var str = inputs[0x1][__DECODE_0__(0x1a0)]('');
  A = {};
  for (i = 0x0; i < arg; ++i) {
    if (A[str[i]]) {
      A[str[i]]++;
    } else {
      A[str[i]] = 0x1;
      count++;
    }
  }
  B = [];
  for (key in A) {
    B[__DECODE_0__(0x197)](A[key]);
  }
  for (i = 0x0; i < count; ++i) {
    ans += roop(i, B, count - 0x1);
  }
  ans = Math[__DECODE_0__(0x1a4)](ans);
  console[__DECODE_0__(0x1a2)](ans % 0x3b9aca07);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x19c), __DECODE_0__(0x19a)));
