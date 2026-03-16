(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc8)) / 0x1 * (parseInt(__DECODE_0__(0xc9)) / 0x2) + parseInt(__DECODE_0__(0xcb)) / 0x3 + -parseInt(__DECODE_0__(0xc7)) / 0x4 + parseInt(__DECODE_0__(0xbf)) / 0x5 * (parseInt(__DECODE_0__(0xc4)) / 0x6) + -parseInt(__DECODE_0__(0xbc)) / 0x7 + -parseInt(__DECODE_0__(0xc0)) / 0x8 + -parseInt(__DECODE_0__(0xc1)) / 0x9 * (-parseInt(__DECODE_0__(0xcc)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x20567);
function Main(input) {
  input = input['split']('\x0a');
  if (input[input[__DECODE_0__(0xca)] - 0x1] === '') {
    input['pop']();
  }
  const N = input[0x0]['split']('\x20')[0x0] - 0x0;
  const M = input[0x0][__DECODE_0__(0xc6)]('\x20')[0x1] - 0x0;
  var parent = new Array(N + 0x1)[__DECODE_0__(0xbe)](0x0);
  for (var i = 0x1; i <= M; i++) {
    if (root(input[i]['split']('\x20')[0x0] - 0x0) !== root(input[i][__DECODE_0__(0xc6)]('\x20')[0x1] - 0x0)) {
      parent[root(input[i][__DECODE_0__(0xc6)]('\x20')[0x1] - 0x0)] = root(input[i][__DECODE_0__(0xc6)]('\x20')[0x0]) - 0x0;
    }
  }
  console[__DECODE_0__(0xc2)](parent['reduce']((acc, cur) => {
    return acc + (cur === 0x0 ? 0x1 : 0x0);
  }, 0x0) - 0x1);
  function root(node) {
    var array = [];
    var point = node;
    while (parent[point] !== 0x0) {
      array[__DECODE_0__(0xbd)](point);
      point = parent[point];
    }
    array[__DECODE_0__(0xc3)](e => {
      parent[e] = point;
    });
    return point;
  }
}
function __STRING_ARRAY__() {
  var _0x303608 = ['317940UPoBhS', 'readFileSync', 'split', '533908mFjNfY', '1CBRAyg', '411296qzazzg', 'length', '687279IhLaiI', '2418710ddtsiH', '813631xiqmuh', 'push', 'fill', '15gIlhHr', '336968VeWTcd', '9BQypPS', 'log', 'forEach'];
  __STRING_ARRAY__ = function () {
    return _0x303608;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bagKqu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bagKqu, key);
}
Main(require('fs')[__DECODE_0__(0xc5)]('/dev/stdin', 'utf8'));
