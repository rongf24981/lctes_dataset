var a0_0x48be7b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x39519f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x39519f(0x166)) / 0x1 * (parseInt(_0x39519f(0x15a)) / 0x2) + parseInt(_0x39519f(0x15f)) / 0x3 * (-parseInt(_0x39519f(0x164)) / 0x4) + -parseInt(_0x39519f(0x16e)) / 0x5 * (parseInt(_0x39519f(0x167)) / 0x6) + parseInt(_0x39519f(0x161)) / 0x7 * (-parseInt(_0x39519f(0x163)) / 0x8) + -parseInt(_0x39519f(0x15e)) / 0x9 * (-parseInt(_0x39519f(0x159)) / 0xa) + -parseInt(_0x39519f(0x168)) / 0xb * (-parseInt(_0x39519f(0x162)) / 0xc) + parseInt(_0x39519f(0x16c)) / 0xd * (parseInt(_0x39519f(0x16a)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe546a);
config = {
  'input': '/dev/stdin',
  'newline': '\x0a'
};
function __STRING_ARRAY__() {
  var _0x2d812a = ['log', '1MtfIrq', '2994gMysnI', '1823767QReSgw', 'ascii', '854rnQjxb', 'trim', '665665QJMcyw', 'shift', '11530aqVDxn', '4595870aqKrYH', '3055678zQFvjs', 'split', 'input', 'readFileSync', '18UDSXch', '1035sDQXjU', 'push', '10087bMdCIi', '36QPijjV', '2384Fjypbh', '5716juzhdH'];
  __STRING_ARRAY__ = function () {
    return _0x2d812a;
  };
  return __STRING_ARRAY__();
}
line = require('fs')[a0_0x48be7b(0x15d)](config[a0_0x48be7b(0x15c)], a0_0x48be7b(0x169))[a0_0x48be7b(0x16b)]()[a0_0x48be7b(0x15b)](config['newline']);
n = Number(line['shift']());
adj = {};
for (i in line) {
  ary = line[i][a0_0x48be7b(0x15b)]('\x20');
  j = ary[a0_0x48be7b(0x16d)]();
  ary[a0_0x48be7b(0x16d)]();
  adj[j] = ary;
}
function __DECODE_0__(sCtbRS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sCtbRS, key);
}
for (i = 0x1; i <= n; i++) {
  ary = [];
  for (j = 0x1; j <= n; j++) {
    if (adj[i]['indexOf'](String(j)) !== -0x1) {
      ary[a0_0x48be7b(0x160)](0x1);
    } else {
      ary['push'](0x0);
    }
  }
  console[a0_0x48be7b(0x165)](ary['join']('\x20'));
}
