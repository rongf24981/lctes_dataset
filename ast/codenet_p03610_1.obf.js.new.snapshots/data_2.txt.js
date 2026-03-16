(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x110)) / 0x1 + -parseInt(__DECODE_0__(0x10a)) / 0x2 * (parseInt(__DECODE_0__(0x108)) / 0x3) + parseInt(__DECODE_0__(0x111)) / 0x4 + parseInt(__DECODE_0__(0x114)) / 0x5 + -parseInt(__DECODE_0__(0x112)) / 0x6 * (-parseInt(__DECODE_0__(0x10e)) / 0x7) + parseInt(__DECODE_0__(0x10d)) / 0x8 + -parseInt(__DECODE_0__(0x113)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x26872);
function __STRING_ARRAY__() {
  var _0x2b965a = ['5710ODqNMQ', 'readFileSync', 'utf8', '1801768BadfMa', '577703uVHoLg', 'length', '247375oRrUrM', '388852KdvwKJ', '18IMVNgN', '1689318bMJWqR', '1184955rAooKZ', 'log', '225CodRVt', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2b965a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ESJKEo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x107;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ESJKEo, key);
}
function Main(input) {
  input = input['split']('\x0a');
  input = input[0x0];
  var ans = '';
  for (var i = 0x1; i <= input[__DECODE_0__(0x10f)]; i = i + 0x2) {
    ans += input[i - 0x1];
  }
  console[__DECODE_0__(0x107)](ans);
}
Main(require('fs')[__DECODE_0__(0x10b)](__DECODE_0__(0x109), __DECODE_0__(0x10c)));
