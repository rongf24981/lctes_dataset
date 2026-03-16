var a0_0x5e9d08 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x25bf19 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x25bf19(0x159)) / 0x1 + -parseInt(_0x25bf19(0x15b)) / 0x2 * (-parseInt(_0x25bf19(0x157)) / 0x3) + parseInt(_0x25bf19(0x153)) / 0x4 * (-parseInt(_0x25bf19(0x15c)) / 0x5) + parseInt(_0x25bf19(0x151)) / 0x6 + -parseInt(_0x25bf19(0x14f)) / 0x7 + -parseInt(_0x25bf19(0x158)) / 0x8 * (parseInt(_0x25bf19(0x150)) / 0x9) + -parseInt(_0x25bf19(0x15a)) / 0xa * (-parseInt(_0x25bf19(0x155)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x52891);
function __STRING_ARRAY__() {
  var _0x5bbab9 = ['utf8', '252116qDtPfJ', 'readFileSync', '152526DDLKNJ', 'log', '129auBQsb', '40pFuRBE', '446689xFBbUI', '130WGzaoT', '16074lOwuOd', '50gRGlwO', '/dev/stdin', 'split', '1231888kmSOfR', '164853gmmNOJ', '1580316LotvIb'];
  __STRING_ARRAY__ = function () {
    return _0x5bbab9;
  };
  return __STRING_ARRAY__();
}
function main(arg) {
  var _0x452f44 = __DECODE_0__;
  var size = arg[_0x452f44(0x15e)]('\x0a')[0x0]['split']('\x20');
  var sel = arg[_0x452f44(0x15e)]('\x0a')[0x1]['split']('\x20');
  console[_0x452f44(0x156)](size[0x0] * size[0x1] - size[0x1] * sel[0x0] - (size[0x0] - sel[0x0]) * sel[0x1]);
}
function __DECODE_0__(asogcr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(asogcr, key);
}
main(require('fs')[a0_0x5e9d08(0x154)](a0_0x5e9d08(0x15d), a0_0x5e9d08(0x152)));
