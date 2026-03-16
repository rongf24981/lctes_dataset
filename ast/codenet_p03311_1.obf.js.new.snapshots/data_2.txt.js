function __STRING_ARRAY__() {
  var _0x180e5f = ['concat', '/dev/stdin', 'length', '257064spfNMA', 'abs', 'map', '816GFvZMA', 'reduce', 'log', 'sort', '2955XEkGVf', '308ZhaWjc', '669919OUluTh', '1243368MTCdHh', '786NBZwFD', 'pop', '11394rZCCwr', '18406400FfEigz', '7984809ueqLWr', 'utf8', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x180e5f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ad)) / 0x1 + parseInt(__DECODE_0__(0x1b1)) / 0x2 * (parseInt(__DECODE_0__(0x1a7)) / 0x3) + parseInt(__DECODE_0__(0x1ae)) / 0x4 + parseInt(__DECODE_0__(0x1ab)) / 0x5 * (parseInt(__DECODE_0__(0x1af)) / 0x6) + parseInt(__DECODE_0__(0x1ac)) / 0x7 * (-parseInt(__DECODE_0__(0x1a4)) / 0x8) + -parseInt(__DECODE_0__(0x1b3)) / 0x9 + parseInt(__DECODE_0__(0x1b2)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc525b);
function Main(input) {
  input = input[__DECODE_0__(0x1a0)]('\x0a');
  if (input[input[__DECODE_0__(0x1a3)] - 0x1] === '') {
    input[__DECODE_0__(0x1b0)]();
  }
  const N = input[0x0][__DECODE_0__(0x1a0)]('\x20')[0x0] - 0x0;
  var array = input[0x1][__DECODE_0__(0x1a0)]('\x20')[__DECODE_0__(0x1a6)]((e, i) => {
    return e - i - 0x1;
  })[__DECODE_0__(0x1aa)]((a, b) => {
    return a - b;
  });
  console[__DECODE_0__(0x1a9)](array[__DECODE_0__(0x1a8)]((acc, cur) => {
    return acc + Math[__DECODE_0__(0x1a5)](cur - array[Math['floor'](array[__DECODE_0__(0x1a3)] / 0x2)]);
  }, 0x0));
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1a2), __DECODE_0__(0x19f)));
function __DECODE_0__(cPRQpj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cPRQpj, key);
}
function permutation(n, k) {
  var ret = [[]];
  var next;
  for (var i = 0x0; i < k; i++) {
    next = [];
    ret['forEach'](e => {
      for (var k = 0x1; k <= n; k++) {
        if (!e['includes'](k)) {
          next['push'](e[__DECODE_0__(0x1a1)]([k]));
        }
      }
    });
    ret = next[__DECODE_0__(0x1a1)]([]);
  }
  return ret;
}
