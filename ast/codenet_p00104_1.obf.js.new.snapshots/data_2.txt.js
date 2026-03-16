(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x194)) / 0x1 * (parseInt(__DECODE_0__(0x191)) / 0x2) + parseInt(__DECODE_0__(0x197)) / 0x3 + -parseInt(__DECODE_0__(0x190)) / 0x4 * (parseInt(__DECODE_0__(0x196)) / 0x5) + parseInt(__DECODE_0__(0x18f)) / 0x6 + -parseInt(__DECODE_0__(0x18a)) / 0x7 * (parseInt(__DECODE_0__(0x195)) / 0x8) + parseInt(__DECODE_0__(0x19c)) / 0x9 * (-parseInt(__DECODE_0__(0x18d)) / 0xa) + parseInt(__DECODE_0__(0x193)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2bbc6);
process[__DECODE_0__(0x18e)][__DECODE_0__(0x19d)]();
function __STRING_ARRAY__() {
  var _0xd76c71 = ['3204905xRAaDj', '609HzDiyz', '9544LgAhsC', '2195xdpbBO', '137868azMROA', 'split', 'LOOP', 'data', 'utf8', '450315ozCBTe', 'resume', '1547dsWHVb', 'log', 'trim', '30WJpWNZ', 'stdin', '2112570ZQCUip', '2372VvTVRP', '538oqJFyE', 'setEncoding'];
  __STRING_ARRAY__ = function () {
    return _0xd76c71;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QveLCt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QveLCt, key);
}
process['stdin'][__DECODE_0__(0x192)](__DECODE_0__(0x19b));
process[__DECODE_0__(0x18e)]['on'](__DECODE_0__(0x19a), function (chunk) {
  main(chunk[__DECODE_0__(0x18c)]());
});
function main(chunk) {
  var lines = chunk[__DECODE_0__(0x198)]('\x0a');
  for (var n = 0x0; n < lines['length'] - 0x1;) {
    var H = Number(lines[n][__DECODE_0__(0x198)]('\x20')[0x0]);
    var W = Number(lines[n][__DECODE_0__(0x198)]('\x20')[0x1]);
    var map = [];
    n++;
    for (var i = 0x0; i < H; i++) {
      map[i] = lines[n][__DECODE_0__(0x198)]('');
      n++;
    }
    console[__DECODE_0__(0x18b)](calc(map, 0x0, 0x0));
  }
}
function calc(map, h, w) {
  if (map[h][w] == '.') {
    return w + '\x20' + h;
  }
  if (map[h][w] == '1') {
    return __DECODE_0__(0x199);
  }
  switch (map[h][w]) {
    case '>':
      map[h][w] = '1';
      return calc(map, h, w + 0x1);
    case '<':
      map[h][w] = '1';
      return calc(map, h, w - 0x1);
    case 'v':
      map[h][w] = '1';
      return calc(map, h + 0x1, w);
    case '^':
      map[h][w] = '1';
      return calc(map, h - 0x1, w);
  }
}
