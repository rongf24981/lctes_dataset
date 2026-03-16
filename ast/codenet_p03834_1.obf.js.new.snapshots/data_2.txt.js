(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd2)) / 0x1 + parseInt(__DECODE_0__(0xd9)) / 0x2 + -parseInt(__DECODE_0__(0xd8)) / 0x3 + -parseInt(__DECODE_0__(0xce)) / 0x4 * (-parseInt(__DECODE_0__(0xdc)) / 0x5) + parseInt(__DECODE_0__(0xcb)) / 0x6 * (-parseInt(__DECODE_0__(0xd0)) / 0x7) + parseInt(__DECODE_0__(0xdb)) / 0x8 * (-parseInt(__DECODE_0__(0xdd)) / 0x9) + -parseInt(__DECODE_0__(0xd1)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x46673);
process[__DECODE_0__(0xcc)][__DECODE_0__(0xda)]();
process[__DECODE_0__(0xcc)][__DECODE_0__(0xd3)](__DECODE_0__(0xd4));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process[__DECODE_0__(0xcc)]['on'](__DECODE_0__(0xd7), function (data) {
  input_stdin += data;
});
function __DECODE_0__(axjeuZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(axjeuZ, key);
}
process['stdin']['on'](__DECODE_0__(0xd5), function () {
  input_stdin_array = input_stdin[__DECODE_0__(0xcd)]('\x0a');
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function __STRING_ARRAY__() {
  var _0x4f5867 = ['join', '666190PaKvQh', '5136240enUJhp', '505648TLcxEQ', 'setEncoding', 'ascii', 'end', 'write', 'data', '245553xoLlKz', '420582ZaPYFA', 'resume', '56jqNcLx', '15110jIiOdn', '159093ZwHhEd', '6kEozjj', 'stdin', 'split', '512wxwaEE'];
  __STRING_ARRAY__ = function () {
    return _0x4f5867;
  };
  return __STRING_ARRAY__();
}
function main() {
  var s = readLine();
  s = s[__DECODE_0__(0xcd)](',');
  s = s[__DECODE_0__(0xcf)]('\x20');
  process['stdout'][__DECODE_0__(0xd6)](s);
}
