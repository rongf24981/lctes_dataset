(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x114)) / 0x1 * (parseInt(__DECODE_0__(0x115)) / 0x2) + -parseInt(__DECODE_0__(0x111)) / 0x3 + -parseInt(__DECODE_0__(0x11a)) / 0x4 + parseInt(__DECODE_0__(0x118)) / 0x5 * (parseInt(__DECODE_0__(0x11d)) / 0x6) + -parseInt(__DECODE_0__(0x10c)) / 0x7 + parseInt(__DECODE_0__(0x116)) / 0x8 * (parseInt(__DECODE_0__(0x10d)) / 0x9) + -parseInt(__DECODE_0__(0x117)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x77ec6);
process['stdin']['resume']();
function __DECODE_0__(QyDCAw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QyDCAw, key);
}
process[__DECODE_0__(0x11b)][__DECODE_0__(0x11c)]('utf8');
function __STRING_ARRAY__() {
  var _0x2902c8 = ['14932MtXpKb', '664624YXaHoF', '3919670giUXYx', '24095HmpXHG', 'join', '734512TyieLh', 'stdin', 'setEncoding', '348mfJjCA', '606515QByvKl', '63ELpxHc', 'data', 'toString', 'trim', '780258mZMKPp', 'log', 'split', '74Hrrcij'];
  __STRING_ARRAY__ = function () {
    return _0x2902c8;
  };
  return __STRING_ARRAY__();
}
process['stdin']['on'](__DECODE_0__(0x10e), function (chunk) {
  var nums = chunk[__DECODE_0__(0x110)]()['split']('\x0a');
  function digit(e) {
    var a = e[__DECODE_0__(0x113)]('\x20');
    var wa = parseInt(a[0x0]) + parseInt(a[0x1]);
    return wa[__DECODE_0__(0x10f)]()['length'];
  }
  console[__DECODE_0__(0x112)](nums['map'](digit)[__DECODE_0__(0x119)]('\x0a'));
});
