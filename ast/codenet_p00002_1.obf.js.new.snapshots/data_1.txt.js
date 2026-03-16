var a0_0x54d741 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x31d8fd = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x31d8fd(0x114)) / 0x1 * (parseInt(_0x31d8fd(0x115)) / 0x2) + -parseInt(_0x31d8fd(0x111)) / 0x3 + -parseInt(_0x31d8fd(0x11a)) / 0x4 + parseInt(_0x31d8fd(0x118)) / 0x5 * (parseInt(_0x31d8fd(0x11d)) / 0x6) + -parseInt(_0x31d8fd(0x10c)) / 0x7 + parseInt(_0x31d8fd(0x116)) / 0x8 * (parseInt(_0x31d8fd(0x10d)) / 0x9) + -parseInt(_0x31d8fd(0x117)) / 0xa;
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
process[a0_0x54d741(0x11b)][a0_0x54d741(0x11c)]('utf8');
function __STRING_ARRAY__() {
  var _0x2902c8 = ['14932MtXpKb', '664624YXaHoF', '3919670giUXYx', '24095HmpXHG', 'join', '734512TyieLh', 'stdin', 'setEncoding', '348mfJjCA', '606515QByvKl', '63ELpxHc', 'data', 'toString', 'trim', '780258mZMKPp', 'log', 'split', '74Hrrcij'];
  __STRING_ARRAY__ = function () {
    return _0x2902c8;
  };
  return __STRING_ARRAY__();
}
process['stdin']['on'](a0_0x54d741(0x10e), function (chunk) {
  var _0x5b71c4 = a0_0x54d741;
  var nums = chunk[_0x5b71c4(0x110)]()['split']('\x0a');
  function digit(e) {
    var _0x40d12d = _0x5b71c4;
    var a = e[_0x40d12d(0x113)]('\x20');
    var wa = parseInt(a[0x0]) + parseInt(a[0x1]);
    return wa[_0x40d12d(0x10f)]()['length'];
  }
  console[_0x5b71c4(0x112)](nums['map'](digit)[_0x5b71c4(0x119)]('\x0a'));
});
