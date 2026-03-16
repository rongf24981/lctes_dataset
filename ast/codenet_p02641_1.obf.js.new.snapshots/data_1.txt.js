const a0_0x2c423c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x25bc8c = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x25bc8c(0x13d)) / 0x1 + parseInt(_0x25bc8c(0x140)) / 0x2 + parseInt(_0x25bc8c(0x13b)) / 0x3 * (-parseInt(_0x25bc8c(0x138)) / 0x4) + parseInt(_0x25bc8c(0x13c)) / 0x5 + parseInt(_0x25bc8c(0x13e)) / 0x6 + parseInt(_0x25bc8c(0x135)) / 0x7 + -parseInt(_0x25bc8c(0x134)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbad6e);
function __STRING_ARRAY__() {
  const _0x2c6dea = ['1914228blySXZ', 'length', '1866610bijEBY', 'utf8', 'indexOf', '2494736IPoClE', '5573414VxAdkx', '/dev/stdin', 'log', '2020hqGZow', 'split', 'readFileSync', '5565vLsSAm', '4694080dWQKJu', '973450CvsChg'];
  __STRING_ARRAY__ = function () {
    return _0x2c6dea;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const _0x221502 = __DECODE_0__;
  input = input[_0x221502(0x139)]('\x0a');
  let target = parseInt(input[0x0]['split']('\x20')[0x0]);
  let zerocheck = parseInt(input[0x0]['split']('\x20')[0x1]);
  if (zerocheck == 0x0) {
    console[_0x221502(0x137)](target);
  } else {
    let str = input[0x1][_0x221502(0x139)]('\x20');
    for (let i = 0x0; i < str[_0x221502(0x13f)]; i++) {
      let num = parseInt(str[i]);
      str[i] = target - num;
    }
    for (let ite = 0x1; ite <= 0x64; ite++) {
      const isp = str[_0x221502(0x142)](ite);
      const isn = str['indexOf'](-ite);
      if (isp == -0x1) {
        console[_0x221502(0x137)](target - ite);
        break;
      }
      if (isn == -0x1) {
        console['log'](target + ite);
        break;
      }
    }
  }
}
function __DECODE_0__(OpedKx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x134;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OpedKx, key);
}
Main(require('fs')[a0_0x2c423c(0x13a)](a0_0x2c423c(0x136), a0_0x2c423c(0x141)));
