function __DECODE_0__(mhqXKk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x109;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mhqXKk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x10e)) / 0x1 * (-parseInt(__DECODE_0__(0x10d)) / 0x2) + parseInt(__DECODE_0__(0x116)) / 0x3 * (parseInt(__DECODE_0__(0x11a)) / 0x4) + parseInt(__DECODE_0__(0x111)) / 0x5 * (-parseInt(__DECODE_0__(0x110)) / 0x6) + parseInt(__DECODE_0__(0x119)) / 0x7 + -parseInt(__DECODE_0__(0x10c)) / 0x8 + parseInt(__DECODE_0__(0x118)) / 0x9 + -parseInt(__DECODE_0__(0x10a)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcc28e);
function Main(input) {
  input = input['split']('\x0a');
  input1 = input[0x0]['split']('\x20');
  const N = parseInt(input1[0x0]);
  const K = parseInt(input1[0x1]);
  const As = input[0x1][__DECODE_0__(0x115)]('\x20');
  var filtered = [];
  var results = [''];
  for (i = 0x0; i < K; i++) {
    for (j = 0x0; j < N; j++) {
      if (filtered[__DECODE_0__(0x112)](As[j]) != -0x1) {
        var id = filtered[__DECODE_0__(0x112)](As[j]);
        filtered = filtered['slice'](0x0, id);
      } else {
        filtered[__DECODE_0__(0x114)](As[j]);
      }
    }
    if (results['indexOf'](filtered[__DECODE_0__(0x113)]('\x20')) == -0x1) {
      results[__DECODE_0__(0x114)](filtered[__DECODE_0__(0x113)]('\x20'));
    } else {
      break;
    }
  }
  const roopstart = results['indexOf'](filtered[__DECODE_0__(0x113)]('\x20'));
  if (roopstart == K) {
    console['log'](results[roopstart]);
  } else {
    const roopId = (K - roopstart) % (results[__DECODE_0__(0x10b)] - roopstart);
    console[__DECODE_0__(0x10f)](results[roopstart + roopId]);
  }
}
function __STRING_ARRAY__() {
  const _0xb01d61 = ['2LLTgYh', 'log', '9200652UCiehC', '5zuntCZ', 'indexOf', 'join', 'push', 'split', '1544604gTnaVF', '/dev/stdin', '729585MafIPS', '8465604fNQGFn', '4MwSUCa', 'readFileSync', '1611770vcHGMo', 'length', '2621888QBudAt', '1053288oMpBwu'];
  __STRING_ARRAY__ = function () {
    return _0xb01d61;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x109)](__DECODE_0__(0x117), 'utf8'));
