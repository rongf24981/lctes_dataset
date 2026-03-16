var a0_0x20b2e7 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x59e62a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x59e62a(0xe2)) / 0x1 * (-parseInt(_0x59e62a(0xdc)) / 0x2) + -parseInt(_0x59e62a(0xe8)) / 0x3 * (-parseInt(_0x59e62a(0xe1)) / 0x4) + -parseInt(_0x59e62a(0xde)) / 0x5 + parseInt(_0x59e62a(0xe5)) / 0x6 * (parseInt(_0x59e62a(0xe3)) / 0x7) + parseInt(_0x59e62a(0xd9)) / 0x8 * (parseInt(_0x59e62a(0xdd)) / 0x9) + parseInt(_0x59e62a(0xe7)) / 0xa * (-parseInt(_0x59e62a(0xd7)) / 0xb) + -parseInt(_0x59e62a(0xd5)) / 0xc * (-parseInt(_0x59e62a(0xd8)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x251ec);
var input = require('fs')[a0_0x20b2e7(0xda)]('/dev/stdin', 'utf8');
function __STRING_ARRAY__() {
  var _0x50ff0b = ['50340nPaqPi', '3136biImvs', '126ZlpcHS', 'keys', '77304eaZZQG', 'slice', '10AhbWfc', '33gZukXu', 'length', 'forEach', 'hasOwnProperty', '24sdxWrM', 'trim', '3333253reRjpm', '977327dXSSTY', '24hhvAUI', 'readFileSync', 'split', '108tyWDiP', '749583wLDLOh', '730775VWSEvC', 'shift', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x50ff0b;
  };
  return __STRING_ARRAY__();
}
var Arr = input[a0_0x20b2e7(0xd6)]()[a0_0x20b2e7(0xdb)]('\x0a');
function __DECODE_0__(vnILyA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vnILyA, key);
}
while (!![]) {
  var n = Arr[a0_0x20b2e7(0xdf)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var first = Arr['shift']()['split'](':');
  first = first[0x1][a0_0x20b2e7(0xe6)](0x0, -0x1)[a0_0x20b2e7(0xdb)](',');
  var F = {};
  first[a0_0x20b2e7(0xea)](function (v) {
    F[v] = !![];
  });
  var obj = {};
  for (var i = 0x0; i < n - 0x1; i++) {
    var arr = Arr['shift']()['split'](':');
    obj[arr[0x0]] = arr[0x1][a0_0x20b2e7(0xe6)](0x0, -0x1)[a0_0x20b2e7(0xdb)](',');
  }
  var L = 0x0;
  while (!![]) {
    if (L == Object[a0_0x20b2e7(0xe4)](F)[a0_0x20b2e7(0xe9)]) {
      break;
    }
    L = Object[a0_0x20b2e7(0xe4)](F)[a0_0x20b2e7(0xe9)];
    for (var k in F) {
      if (obj['hasOwnProperty'](k) && F[k]) {
        obj[k][a0_0x20b2e7(0xea)](function (v) {
          F[v] = !![];
        });
        F[k] = ![];
      }
    }
  }
  var cnt = 0x0;
  for (var k in F) {
    if (obj[a0_0x20b2e7(0xeb)](k) == ![]) {
      cnt++;
    }
  }
  console[a0_0x20b2e7(0xe0)](cnt);
}
