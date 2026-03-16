(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x134)) / 0x1 + -parseInt(__DECODE_0__(0x133)) / 0x2 + -parseInt(__DECODE_0__(0x138)) / 0x3 + -parseInt(__DECODE_0__(0x12e)) / 0x4 * (parseInt(__DECODE_0__(0x12d)) / 0x5) + -parseInt(__DECODE_0__(0x13b)) / 0x6 * (-parseInt(__DECODE_0__(0x12f)) / 0x7) + parseInt(__DECODE_0__(0x135)) / 0x8 + parseInt(__DECODE_0__(0x136)) / 0x9 * (-parseInt(__DECODE_0__(0x139)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45a5c);
const input = require('fs')[__DECODE_0__(0x12b)](__DECODE_0__(0x137), __DECODE_0__(0x130))[__DECODE_0__(0x13a)]();
const lines = input[__DECODE_0__(0x13a)]()[__DECODE_0__(0x131)]('\x0a');
const nextDay = (y, m, d) => {
  d = d + 0x1;
  if (y % 0x3 === 0x0) {
    if (d > 0x14) {
      d = 0x1;
      m += 0x1;
      if (m === 0xb) {
        m = 0x1;
        y++;
      }
    }
  } else {
    if (d > 0x14) {
      d = 0x1;
      m += 0x1;
      if (m === 0xb) {
        m = 0x1;
        y++;
      }
    } else {
      if (d > 0x13 && m % 0x2 === 0x0) {
        d = 0x1;
        m += 0x1;
        if (m === 0xb) {
          m = 0x1;
          y++;
        }
      }
    }
  }
  return [y, m, d];
};
function __STRING_ARRAY__() {
  const _0x707991 = ['30EZmVdD', 'readFileSync', 'map', '119585WfEUDy', '4aNuCZU', '663103EhviUW', 'utf8', 'split', 'forEach', '511714jEFuVC', '173264YbKJpk', '3485664PbvfeT', '27oPWfkm', '/dev/stdin', '318879JvcQyk', '215820UgRYar', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x707991;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rkbOEK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rkbOEK, key);
}
lines['shift']();
lines[__DECODE_0__(0x132)](line => {
  let [y, m, d] = line[__DECODE_0__(0x13a)]()[__DECODE_0__(0x131)]('\x20')[__DECODE_0__(0x12c)](Number);
  let count = 0x1;
  while (y !== 0x3e8 || m !== 0x1 || d !== 0x1) {
    [y, m, d] = nextDay(y, m, d);
    count++;
  }
  console['log'](count - 0x1);
});
