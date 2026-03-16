(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a2)) / 0x1 + -parseInt(__DECODE_0__(0x1ae)) / 0x2 * (parseInt(__DECODE_0__(0x19c)) / 0x3) + parseInt(__DECODE_0__(0x1a4)) / 0x4 * (parseInt(__DECODE_0__(0x1ac)) / 0x5) + -parseInt(__DECODE_0__(0x19a)) / 0x6 + parseInt(__DECODE_0__(0x1a9)) / 0x7 + -parseInt(__DECODE_0__(0x198)) / 0x8 * (parseInt(__DECODE_0__(0x1a0)) / 0x9) + parseInt(__DECODE_0__(0x1a5)) / 0xa * (parseInt(__DECODE_0__(0x1ad)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x77919);
function __DECODE_0__(uHznMI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uHznMI, key);
}
function __STRING_ARRAY__() {
  var _0x5e57dd = ['readline', 'map', '10784oMvXav', 'stdin', '946218wiDVmw', 'push', '3MzxKdo', 'line', 'utf8', 'YES', '4131TbmxVF', 'close', '899697dQwMDQ', 'sort', '758988ZTHOiP', '59560FYvMyP', 'filter', 'setEncoding', 'reduce', '5520361yoxNfO', 'split', 'stdout', '25IcapoA', '2310LsGYfe', '1644466PBkUed', 'resume'];
  __STRING_ARRAY__ = function () {
    return _0x5e57dd;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x199)][__DECODE_0__(0x195)]();
process[__DECODE_0__(0x199)][__DECODE_0__(0x1a7)](__DECODE_0__(0x19e));
var lines = [];
var reader = require(__DECODE_0__(0x196))['createInterface']({
  'input': process['stdin'],
  'output': process[__DECODE_0__(0x1ab)]
});
reader['on'](__DECODE_0__(0x19d), line => {
  lines[__DECODE_0__(0x19b)](line);
});
reader['on'](__DECODE_0__(0x1a1), () => {
  const a = lines[0x1][__DECODE_0__(0x1aa)]('\x20')['map'](v => v - 0x0);
  const b = lines[0x1][__DECODE_0__(0x1aa)]('\x20')[__DECODE_0__(0x197)](v => v - 0x0)[__DECODE_0__(0x1a3)]((a, b) => a - b);
  let ans = a[__DECODE_0__(0x1a6)]((v, i) => v != b[i])['length'];
  console['log'](ans <= 0x2 ? __DECODE_0__(0x19f) : 'NO');
});
min = (...a) => {
  return a[__DECODE_0__(0x1a8)]((a, b) => a < b ? a : b, a[0x0]);
};
