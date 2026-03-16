(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7f)) / 0x1 * (-parseInt(__DECODE_0__(0x74)) / 0x2) + -parseInt(__DECODE_0__(0x75)) / 0x3 + parseInt(__DECODE_0__(0x80)) / 0x4 + parseInt(__DECODE_0__(0x76)) / 0x5 + -parseInt(__DECODE_0__(0x7b)) / 0x6 * (-parseInt(__DECODE_0__(0x79)) / 0x7) + -parseInt(__DECODE_0__(0x72)) / 0x8 + -parseInt(__DECODE_0__(0x70)) / 0x9 * (-parseInt(__DECODE_0__(0x7d)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x44ab8);
function main(input) {
  var N = input[0x0][__DECODE_0__(0x71)]('\x20')[0x0] - 0x0;
  var M = input[0x0][__DECODE_0__(0x71)]('\x20')[0x1] - 0x0;
  var list = input[0x1]['split']('\x20')[__DECODE_0__(0x78)](v => v / 0x2);
  var l = lcm(list);
  console[__DECODE_0__(0x81)](Math['trunc'](M / l) - Math[__DECODE_0__(0x7e)](M / (l * 0x2)));
}
function __DECODE_0__(YJWwGt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x70;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YJWwGt, key);
}
function lcm(args) {
  var a = args;
  var g = (n, m) => m ? g(m, n % m) : n;
  var l = (n, m) => n * m / g(n, m);
  var ans = a[0x0];
  for (var i = 0x1; i < a[__DECODE_0__(0x73)]; i++) {
    ans = l(ans, a[i]);
  }
  return ans;
}
main(require('fs')['readFileSync'](__DECODE_0__(0x77), __DECODE_0__(0x7a))[__DECODE_0__(0x7c)]()[__DECODE_0__(0x71)]('\x0a'));
function __STRING_ARRAY__() {
  var _0x573696 = ['map', '20048JJXhPV', 'utf8', '576vvrfRp', 'trim', '242300EkgXrr', 'trunc', '132140QjAxBu', '191748PlkMgF', 'log', '63nudiaq', 'split', '733024oQUeRH', 'length', '6dgDUMw', '387423GhtOIj', '2029850qEmmas', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x573696;
  };
  return __STRING_ARRAY__();
}
