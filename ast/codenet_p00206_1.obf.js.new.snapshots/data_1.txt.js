function __DECODE_0__(JmEIOm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x91;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JmEIOm, key);
}
var a0_0x2c539a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x434719 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x434719(0x9c)) / 0x1 + -parseInt(_0x434719(0x96)) / 0x2 * (parseInt(_0x434719(0x9d)) / 0x3) + -parseInt(_0x434719(0x9e)) / 0x4 * (-parseInt(_0x434719(0xa2)) / 0x5) + -parseInt(_0x434719(0x97)) / 0x6 * (parseInt(_0x434719(0xa0)) / 0x7) + parseInt(_0x434719(0xa1)) / 0x8 * (-parseInt(_0x434719(0x9f)) / 0x9) + parseInt(_0x434719(0x9b)) / 0xa + parseInt(_0x434719(0x95)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa8dca);
function main() {
  var _0x56a86c = __DECODE_0__;
  var i = 0x0;
  var j;
  var flag;
  var L;
  var MN;
  for (;;) {
    L = Number(input[i++]);
    if (L === 0x0) {
      break;
    }
    flag = !![];
    for (j = 0x0; j < 0xc; j++) {
      MN = input[i++][_0x56a86c(0x94)]('\x20')['map'](Number);
      L -= MN[0x0] - MN[0x1];
      if (flag && L <= 0x0) {
        console[_0x56a86c(0x93)](j + 0x1);
        flag = ![];
      }
    }
    if (flag) {
      console[_0x56a86c(0x93)]('NA');
    }
  }
}
var input = '';
process['stdin'][a0_0x2c539a(0x99)]();
function __STRING_ARRAY__() {
  var _0x39453b = ['8wMJFIG', '144zKRckb', '7arIDDB', '79472dAAmoP', '131635oTaBFd', 'data', 'utf8', 'setEncoding', 'log', 'split', '4558235NMphPN', '135874lEHWbU', '324930nTLBCP', 'stdin', 'resume', 'end', '6356550mGjqHr', '130000bmHOGH', '3EsSFXU'];
  __STRING_ARRAY__ = function () {
    return _0x39453b;
  };
  return __STRING_ARRAY__();
}
process[a0_0x2c539a(0x98)][a0_0x2c539a(0x92)](a0_0x2c539a(0x91));
process['stdin']['on'](a0_0x2c539a(0xa3), function (chunk) {
  input += chunk;
});
process[a0_0x2c539a(0x98)]['on'](a0_0x2c539a(0x9a), function () {
  var _0x3b0040 = a0_0x2c539a;
  input = input[_0x3b0040(0x94)]('\x0a');
  main();
});
