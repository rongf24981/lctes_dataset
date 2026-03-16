function __STRING_ARRAY__() {
  var _0x478055 = ['2AizNjK', '182164dHSBJW', 'readFileSync', '49IsgnLP', '9WRKrbO', '949670znPxYN', '6350qoZeYg', '/dev/stdin', 'split', 'log', 'utf8', '155815oGTmvB', '60RJJBxn', '14968uCQxUS', '234RfjgXu', '61026vpYonQ', '228370JaJbUY'];
  __STRING_ARRAY__ = function () {
    return _0x478055;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jHLmdS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jHLmdS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1be)) / 0x1 * (parseInt(__DECODE_0__(0x1b3)) / 0x2) + -parseInt(__DECODE_0__(0x1c2)) / 0x3 * (-parseInt(__DECODE_0__(0x1bf)) / 0x4) + parseInt(__DECODE_0__(0x1b2)) / 0x5 + -parseInt(__DECODE_0__(0x1bc)) / 0x6 * (parseInt(__DECODE_0__(0x1c1)) / 0x7) + parseInt(__DECODE_0__(0x1ba)) / 0x8 * (-parseInt(__DECODE_0__(0x1bb)) / 0x9) + -parseInt(__DECODE_0__(0x1bd)) / 0xa + parseInt(__DECODE_0__(0x1b8)) / 0xb * (-parseInt(__DECODE_0__(0x1b9)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1a0ce);
function Main(input) {
  var [a, b] = input[__DECODE_0__(0x1b5)]('\x20')['map'](Number);
  if (b > a) {
    [a, b] = [b, a];
  }
  var r;
  do {
    r = a % b;
    a = b;
    b = r;
  } while (r);
  console[__DECODE_0__(0x1b6)](a);
}
Main(require('fs')[__DECODE_0__(0x1c0)](__DECODE_0__(0x1b4), __DECODE_0__(0x1b7)));
