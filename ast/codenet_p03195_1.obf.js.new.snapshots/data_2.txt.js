function __DECODE_0__(xtaNwh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xtaNwh, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x106)) / 0x1 * (parseInt(__DECODE_0__(0x102)) / 0x2) + -parseInt(__DECODE_0__(0x101)) / 0x3 + parseInt(__DECODE_0__(0x10d)) / 0x4 + parseInt(__DECODE_0__(0x107)) / 0x5 + parseInt(__DECODE_0__(0x10c)) / 0x6 + -parseInt(__DECODE_0__(0x104)) / 0x7 + parseInt(__DECODE_0__(0x111)) / 0x8 * (parseInt(__DECODE_0__(0x110)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd6fb7);
function __STRING_ARRAY__() {
  var _0x1c15d0 = ['1420626LUkZeM', '2pOFhAr', 'end', '9828959pkDiLC', 'stdin', '42337GgewYU', '5858465lViDwE', 'push', 'log', 'utf8', 'resume', '866838dhcnYN', '5346028jdwQlX', 'setEncoding', 'split', '133119TiNDAk', '80CnlJhD', 'length', 'first', 'data'];
  __STRING_ARRAY__ = function () {
    return _0x1c15d0;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var line1 = parseInt(input[0x0]);
  var ans = ![];
  for (var i = 0x1; i < input[__DECODE_0__(0xfe)]; i++) {
    var n = parseInt(input[i]);
    if (n % 0x2 === 0x1) {
      ans = !![];
    }
    ;
  }
  console[__DECODE_0__(0x109)](ans ? __DECODE_0__(0xff) : 'second');
}
function parse(line) {
  var ret = [];
  var arr = line[__DECODE_0__(0x10f)]('\x20');
  for (var i = 0x0; i < arr[__DECODE_0__(0xfe)]; i++) {
    ret[__DECODE_0__(0x108)](parseInt(arr[i]));
  }
  return ret;
}
var input = '';
process[__DECODE_0__(0x105)][__DECODE_0__(0x10b)]();
process[__DECODE_0__(0x105)][__DECODE_0__(0x10e)](__DECODE_0__(0x10a));
process[__DECODE_0__(0x105)]['on'](__DECODE_0__(0x100), function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x105)]['on'](__DECODE_0__(0x103), function () {
  input = input[__DECODE_0__(0x10f)]('\x0a');
  main(input);
});
