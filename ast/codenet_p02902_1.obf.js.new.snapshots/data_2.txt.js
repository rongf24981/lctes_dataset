(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a3)) / 0x1 + parseInt(__DECODE_0__(0x1a4)) / 0x2 * (parseInt(__DECODE_0__(0x19f)) / 0x3) + -parseInt(__DECODE_0__(0x1a7)) / 0x4 * (parseInt(__DECODE_0__(0x198)) / 0x5) + -parseInt(__DECODE_0__(0x199)) / 0x6 + -parseInt(__DECODE_0__(0x1a1)) / 0x7 + parseInt(__DECODE_0__(0x1a2)) / 0x8 + -parseInt(__DECODE_0__(0x19a)) / 0x9 * (-parseInt(__DECODE_0__(0x1a0)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xddae1);
function Main(input) {
  input = input['split']('\x0a');
  if (input[input[__DECODE_0__(0x1a6)] - 0x1] === '') {
    input['pop']();
  }
  const N = input[0x0][__DECODE_0__(0x19d)]('\x20')[0x0] - 0x0;
  const M = input[0x0][__DECODE_0__(0x19d)]('\x20')[0x1] - 0x0;
  var direct = [];
  for (var i = 0x0; i <= N; i++) {
    direct[__DECODE_0__(0x19c)]([]);
  }
  for (var i = 0x1; i < input[__DECODE_0__(0x1a6)]; i++) {
    direct[input[i][__DECODE_0__(0x19d)]('\x20')[0x0] - 0x0]['push'](input[i][__DECODE_0__(0x19d)]('\x20')[0x1] - 0x0);
  }
  var memo = [];
  for (var i = 0x1; i <= N; i++) {
    memo[__DECODE_0__(0x19c)]([i]);
  }
  var temp;
  var str;
  while (memo[__DECODE_0__(0x1a6)] > 0x0) {
    str = '';
    temp = [];
    memo['forEach'](e => {
      direct[e[e[__DECODE_0__(0x1a6)] - 0x1]][__DECODE_0__(0x1a5)](f => {
        temp[__DECODE_0__(0x19c)](e[__DECODE_0__(0x196)]([f]));
      });
    });
    memo = temp[__DECODE_0__(0x1a8)]();
    memo['forEach'](e => {
      if (e[e[__DECODE_0__(0x1a6)] - 0x1] === e[0x0]) {
        temp = e[__DECODE_0__(0x1a8)]();
        temp[__DECODE_0__(0x19b)]();
        str = temp[__DECODE_0__(0x1a6)] + '\x0a' + temp[__DECODE_0__(0x195)]('\x0a');
      }
    });
    if (str !== '') {
      console[__DECODE_0__(0x19e)](str);
      return;
    }
  }
  console[__DECODE_0__(0x19e)](-0x1);
}
function __DECODE_0__(wmHqnw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wmHqnw, key);
}
Main(require('fs')[__DECODE_0__(0x197)]('/dev/stdin', 'utf8'));
function __STRING_ARRAY__() {
  var _0x5597e4 = ['forEach', 'length', '164dtqNSj', 'slice', 'join', 'concat', 'readFileSync', '207590cPJtKP', '9822810LaSlIn', '23660559jikawf', 'shift', 'push', 'split', 'log', '39OYPtvP', '10xdhgMZ', '11481022fQdumF', '11431728DOTyrz', '1728450afJGUx', '15562ObFyyE'];
  __STRING_ARRAY__ = function () {
    return _0x5597e4;
  };
  return __STRING_ARRAY__();
}
