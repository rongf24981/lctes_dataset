(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x79)) / 0x1 + parseInt(__DECODE_0__(0x77)) / 0x2 * (-parseInt(__DECODE_0__(0x76)) / 0x3) + -parseInt(__DECODE_0__(0x6c)) / 0x4 + parseInt(__DECODE_0__(0x6f)) / 0x5 + parseInt(__DECODE_0__(0x6b)) / 0x6 + parseInt(__DECODE_0__(0x6d)) / 0x7 + parseInt(__DECODE_0__(0x72)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x882ac);
function __DECODE_0__(oEpZJi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oEpZJi, key);
}
process[__DECODE_0__(0x78)][__DECODE_0__(0x73)]();
process[__DECODE_0__(0x78)][__DECODE_0__(0x6e)](__DECODE_0__(0x75));
function __STRING_ARRAY__() {
  var _0x5a0268 = ['16005344HcETES', 'resume', 'data', 'utf8', '239604pNeDTC', '16RPJuKR', 'stdin', '862068KcmXJT', '468696noDwAv', '3854156HLxgpf', '3558443anhdGX', 'setEncoding', '2175790chwmTz', 'log', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5a0268;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x78)]['on'](__DECODE_0__(0x74), function (chunk) {
  var lines = chunk['toString']()[__DECODE_0__(0x71)]('\x20');
  var first = Number(lines[0x0]);
  var second = Number(lines[0x1]);
  var time = second + first;
  if (time < 0x18) {
    console[__DECODE_0__(0x70)](time);
  } else {
    console[__DECODE_0__(0x70)](time - 0x18);
  }
});
