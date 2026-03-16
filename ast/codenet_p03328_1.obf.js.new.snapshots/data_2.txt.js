function __DECODE_0__(agIITk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x121;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(agIITk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x12a)) / 0x1 + -parseInt(__DECODE_0__(0x12e)) / 0x2 * (-parseInt(__DECODE_0__(0x123)) / 0x3) + parseInt(__DECODE_0__(0x122)) / 0x4 + parseInt(__DECODE_0__(0x124)) / 0x5 * (parseInt(__DECODE_0__(0x128)) / 0x6) + -parseInt(__DECODE_0__(0x121)) / 0x7 + -parseInt(__DECODE_0__(0x125)) / 0x8 * (parseInt(__DECODE_0__(0x12d)) / 0x9) + -parseInt(__DECODE_0__(0x12c)) / 0xa * (parseInt(__DECODE_0__(0x127)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x289cb);
function Main(input) {
  input = input[__DECODE_0__(0x129)]('\x20');
  var a = parseInt(input[0x0], 0xa);
  var b = parseInt(input[0x1], 0xa);
  var a_real = 0x1;
  var b_real = 0x1;
  var a_count = 0x1;
  var b_count = 0x1;
  var ans = 0x0;
  while (!![]) {
    while (!![]) {
      a_count++;
      a_real += a_count;
      b_count++;
      b_real += b_count;
      if (a_real > a) {
        break;
      }
    }
    while (!![]) {
      b_count++;
      b_real += b_count;
      if (b_real > b) {
        break;
      }
    }
    if (a_real - a == b_real - b) {
      break;
    }
  }
  ans = a_real - a;
  console[__DECODE_0__(0x126)](ans);
}
Main(require('fs')[__DECODE_0__(0x12f)]('/dev/stdin', __DECODE_0__(0x12b)));
function __STRING_ARRAY__() {
  var _0xb9977c = ['3348PORjNd', '4zJsMBg', 'readFileSync', '663558mjIZNm', '446236ExqBAQ', '406914gqXyiN', '11365raVQWb', '2344HVyJRu', 'log', '22QihnGq', '318OvfkzA', 'split', '243539iKJHNM', 'utf8', '1883530VLyfqK'];
  __STRING_ARRAY__ = function () {
    return _0xb9977c;
  };
  return __STRING_ARRAY__();
}
