function __STRING_ARRAY__() {
  const _0x3dbcca = ['487115UIcJqL', '64oPCacp', '1252365ihfYJQ', '63wCYjYu', '77608mZXUIw', '1557vrteLI', 'utf8', '4274hLzJna', '55Sfvcsa', '17585020syIhsb', 'log', '1170NkCIal', '58296yxuDLK', 'readFileSync', '8467668vOBlci'];
  __STRING_ARRAY__ = function () {
    return _0x3dbcca;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x185)) / 0x1 + parseInt(__DECODE_0__(0x17b)) / 0x2 * (parseInt(__DECODE_0__(0x188)) / 0x3) + parseInt(__DECODE_0__(0x184)) / 0x4 * (-parseInt(__DECODE_0__(0x183)) / 0x5) + parseInt(__DECODE_0__(0x17f)) / 0x6 * (-parseInt(__DECODE_0__(0x180)) / 0x7) + -parseInt(__DECODE_0__(0x187)) / 0x8 * (parseInt(__DECODE_0__(0x186)) / 0x9) + -parseInt(__DECODE_0__(0x17d)) / 0xa + parseInt(__DECODE_0__(0x17c)) / 0xb * (parseInt(__DECODE_0__(0x182)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd6f8e);
const Main = () => {
  let line = require('fs')[__DECODE_0__(0x181)]('/dev/stdin', __DECODE_0__(0x17a));
  const mod = {};
  let count = 0x0;
  for (let i = line['length']; 0x0 < i; i--) {
    const n = parseInt(line, 0xa);
    const m = n % 0x7e3;
    if (mod[m] || m === 0x0) {
      count++;
    }
    mod[m] = !![];
    line = line['slice'](0x1);
  }
  console[__DECODE_0__(0x17e)](count);
};
function __DECODE_0__(jDnYHl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jDnYHl, key);
}
Main();
