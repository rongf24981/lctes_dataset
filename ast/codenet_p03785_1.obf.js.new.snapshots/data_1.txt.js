var a0_0x2079d6 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3e7dc4 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x3e7dc4(0x147)) / 0x1 * (-parseInt(_0x3e7dc4(0x146)) / 0x2) + parseInt(_0x3e7dc4(0x145)) / 0x3 + parseInt(_0x3e7dc4(0x140)) / 0x4 + -parseInt(_0x3e7dc4(0x13f)) / 0x5 * (parseInt(_0x3e7dc4(0x142)) / 0x6) + parseInt(_0x3e7dc4(0x149)) / 0x7 + parseInt(_0x3e7dc4(0x13e)) / 0x8 + parseInt(_0x3e7dc4(0x141)) / 0x9 * (-parseInt(_0x3e7dc4(0x14c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe82e7);
function __DECODE_0__(vcqAXh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vcqAXh, key);
}
function __STRING_ARRAY__() {
  var _0x2b6733 = ['/dev/stdin', 'utf8', '4263768mcsnjU', '168754MdUpzr', '7Jgcnsl', 'map', '13191927SDQgxt', 'split', 'sort', '230KcxVGK', 'slice', 'log', '3440688hpOraT', '749455RXUkmx', '4913340jmrCDO', '1280619CsazNG', '6hgyqtL'];
  __STRING_ARRAY__ = function () {
    return _0x2b6733;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  var _0x169394 = __DECODE_0__;
  var s = s['split']('\x0a');
  var zero = s[0x0][_0x169394(0x14a)]('\x20')[_0x169394(0x148)](e => parseInt(e, 0xa));
  var t = s[_0x169394(0x14d)](0x1)[_0x169394(0x148)](e => parseInt(e, 0xa))[_0x169394(0x14b)]((a, b) => a - b);
  var cnt = 0x1;
  var c = zero[0x1];
  for (var i = 0x1; i < zero[0x0]; i++) {
    if (t[i - 0x1] <= t[i] && t[i] <= t[i - 0x1] + zero[0x2]) {
      c--;
      if (c === 0x0) {
        cnt++;
        c = zero[0x1];
      }
    } else {
      cnt++;
      c = zero[0x1];
    }
  }
  console[_0x169394(0x14e)](cnt);
}
Main(require('fs')['readFileSync'](a0_0x2079d6(0x143), a0_0x2079d6(0x144)));
