(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x15b)) / 0x1 + -parseInt(__DECODE_0__(0x156)) / 0x2 * (parseInt(__DECODE_0__(0x15c)) / 0x3) + -parseInt(__DECODE_0__(0x161)) / 0x4 + -parseInt(__DECODE_0__(0x15e)) / 0x5 + parseInt(__DECODE_0__(0x155)) / 0x6 + -parseInt(__DECODE_0__(0x152)) / 0x7 * (-parseInt(__DECODE_0__(0x159)) / 0x8) + -parseInt(__DECODE_0__(0x158)) / 0x9 * (-parseInt(__DECODE_0__(0x162)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5b35c);
var input = '';
var mem = new Array(0xe);
for (var i = 0x0; i < 0xe; i++) {
  mem[i] = new Array(0xe);
  for (var j = 0x0; j < 0xe; j++) {
    mem[i][j] = 0x0;
  }
}
function __STRING_ARRAY__() {
  var _0x3d2926 = ['utf8', '2481320CxrBpc', '20TEDHnZ', 'max', 'log', 'data', '889ofCEbM', 'setEncoding', 'split', '2080566EToYWt', '498KsAukp', 'resume', '1662237gbRagn', '40168nXFZnf', 'stdin', '529771lQEXFz', '4461cYqIdN', 'end', '2596980mWlEIY', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x3d2926;
  };
  return __STRING_ARRAY__();
}
var dx = [[0x0, -0x1, 0x0, 0x1, 0x0], [-0x1, 0x0, 0x1, -0x1, 0x0, 0x1, -0x1, 0x0, 0x1], [0x0, -0x1, 0x0, -0x1, -0x2, -0x1, 0x0, 0x1, 0x2, -0x1, 0x0, 0x1, 0x0]];
var dy = [[-0x1, 0x0, 0x0, 0x0, 0x1], [-0x1, -0x1, -0x1, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1], [-0x2, -0x1, -0x1, -0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2]];
process['stdin'][__DECODE_0__(0x157)]();
process[__DECODE_0__(0x15a)][__DECODE_0__(0x153)](__DECODE_0__(0x160));
process['stdin']['on'](__DECODE_0__(0x151), function (chunk) {
  input += chunk;
});
function __DECODE_0__(qCjyxu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x150;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qCjyxu, key);
}
process[__DECODE_0__(0x15a)]['on'](__DECODE_0__(0x15d), function () {
  input = input[__DECODE_0__(0x154)]('\x0a');
  for (var i = 0x0; i < input[__DECODE_0__(0x15f)]; i++) {
    s = input[i][__DECODE_0__(0x154)](',');
    x = Number(s[0x0]) + 0x2;
    y = Number(s[0x1]) + 0x2;
    v = Number(s[0x2]) - 0x1;
    for (var j in dx[v]) {
      mem[x + dx[v][j]][y + dy[v][j]]++;
    }
  }
  m = 0x0;
  b = 0x0;
  for (var i = 0x2; i < 0xc; i++) {
    for (var j = 0x2; j < 0xc; j++) {
      if (mem[i][j] == 0x0) {
        b++;
      }
      m = Math[__DECODE_0__(0x163)](m, mem[i][j]);
    }
  }
  console[__DECODE_0__(0x150)](b);
  console['log'](m);
});
