function __DECODE_0__(JmEIOm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x91;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JmEIOm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9c)) / 0x1 + -parseInt(__DECODE_0__(0x96)) / 0x2 * (parseInt(__DECODE_0__(0x9d)) / 0x3) + -parseInt(__DECODE_0__(0x9e)) / 0x4 * (-parseInt(__DECODE_0__(0xa2)) / 0x5) + -parseInt(__DECODE_0__(0x97)) / 0x6 * (parseInt(__DECODE_0__(0xa0)) / 0x7) + parseInt(__DECODE_0__(0xa1)) / 0x8 * (-parseInt(__DECODE_0__(0x9f)) / 0x9) + parseInt(__DECODE_0__(0x9b)) / 0xa + parseInt(__DECODE_0__(0x95)) / 0xb;
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
      MN = input[i++][__DECODE_0__(0x94)]('\x20')['map'](Number);
      L -= MN[0x0] - MN[0x1];
      if (flag && L <= 0x0) {
        console[__DECODE_0__(0x93)](j + 0x1);
        flag = ![];
      }
    }
    if (flag) {
      console[__DECODE_0__(0x93)]('NA');
    }
  }
}
var input = '';
process['stdin'][__DECODE_0__(0x99)]();
function __STRING_ARRAY__() {
  var _0x39453b = ['8wMJFIG', '144zKRckb', '7arIDDB', '79472dAAmoP', '131635oTaBFd', 'data', 'utf8', 'setEncoding', 'log', 'split', '4558235NMphPN', '135874lEHWbU', '324930nTLBCP', 'stdin', 'resume', 'end', '6356550mGjqHr', '130000bmHOGH', '3EsSFXU'];
  __STRING_ARRAY__ = function () {
    return _0x39453b;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x98)][__DECODE_0__(0x92)](__DECODE_0__(0x91));
process['stdin']['on'](__DECODE_0__(0xa3), function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x98)]['on'](__DECODE_0__(0x9a), function () {
  input = input[__DECODE_0__(0x94)]('\x0a');
  main();
});
