(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1cc)) / 0x1 * (-parseInt(__DECODE_0__(0x1d6)) / 0x2) + -parseInt(__DECODE_0__(0x1d5)) / 0x3 + parseInt(__DECODE_0__(0x1ce)) / 0x4 + -parseInt(__DECODE_0__(0x1d0)) / 0x5 * (parseInt(__DECODE_0__(0x1d9)) / 0x6) + -parseInt(__DECODE_0__(0x1d3)) / 0x7 + -parseInt(__DECODE_0__(0x1cd)) / 0x8 + -parseInt(__DECODE_0__(0x1d2)) / 0x9 * (-parseInt(__DECODE_0__(0x1da)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9d3ef);
function __DECODE_0__(IvtrlY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IvtrlY, key);
}
process[__DECODE_0__(0x1d4)]['resume']();
process[__DECODE_0__(0x1d4)][__DECODE_0__(0x1cf)](__DECODE_0__(0x1d7));
var lines = [];
var reader = require(__DECODE_0__(0x1db))['createInterface']({
  'input': process[__DECODE_0__(0x1d4)],
  'output': process[__DECODE_0__(0x1d8)]
});
reader['on'](__DECODE_0__(0x1dc), line => {
  lines['push'](line);
});
reader['on'](__DECODE_0__(0x1dd), () => {
  const N = lines[0x0] - 0x0;
  let tmp = 0x0;
  for (let i = 0x1; i <= 0xf4240; i++) {
    tmp *= 0xa;
    tmp += 0x7;
    tmp %= N;
    if (tmp === 0x0) {
      console[__DECODE_0__(0x1d1)](i);
      return;
    }
  }
  console[__DECODE_0__(0x1d1)](-0x1);
});
function check(ans) {
  return !![];
}
function __STRING_ARRAY__() {
  var _0x43a72d = ['758607DEMORv', '2333374mQLrbI', 'utf8', 'stdout', '36NkbUeY', '338610NeLwZf', 'readline', 'line', 'close', '1LczYLV', '10092720NEAgZv', '821948eGHGLA', 'setEncoding', '902735UbCthO', 'log', '1179cwGtHb', '1629397KolJhf', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x43a72d;
  };
  return __STRING_ARRAY__();
}
