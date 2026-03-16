function __DECODE_0__(UcUUUY, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UcUUUY, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x73)) / 0x1 + -parseInt(__DECODE_0__(0x74)) / 0x2 * (-parseInt(__DECODE_0__(0x7e)) / 0x3) + -parseInt(__DECODE_0__(0x76)) / 0x4 + parseInt(__DECODE_0__(0x71)) / 0x5 + -parseInt(__DECODE_0__(0x79)) / 0x6 + -parseInt(__DECODE_0__(0x7d)) / 0x7 + parseInt(__DECODE_0__(0x6e)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x72b0c);
const input = require('fs')['readFileSync'](__DECODE_0__(0x7c), __DECODE_0__(0x6f));
const lines = input['trim']()[__DECODE_0__(0x75)]('\x0a');
while (line = lines[__DECODE_0__(0x77)]()) {
  const [n, max] = line['split']('\x20')[__DECODE_0__(0x72)](Number);
  if (n === 0x0 && max === 0x0) {
    break;
  }
  const prices = lines[__DECODE_0__(0x77)]()[__DECODE_0__(0x75)]('\x20')['map'](Number);
  const allSum = [];
  prices[__DECODE_0__(0x72)]((priceA, indexA) => {
    prices[__DECODE_0__(0x72)]((priceB, indexB) => {
      if (indexA !== indexB) {
        const sum = priceA + priceB;
        if (sum <= max) {
          allSum[__DECODE_0__(0x7b)](sum);
        }
      }
    });
  });
  const answer = allSum[__DECODE_0__(0x78)]((a, b) => b - a)[0x0];
  if (answer) {
    console[__DECODE_0__(0x70)](answer);
    continue;
  }
  console[__DECODE_0__(0x70)](__DECODE_0__(0x7a));
}
function __STRING_ARRAY__() {
  const _0x173979 = ['split', '1899796wmrsfv', 'shift', 'sort', '4351806YELcYL', 'NONE', 'push', '/dev/stdin', '5368125rcntWQ', '9ptAcPL', '8510280mNjUGj', 'utf8', 'log', '3540830nImdrA', 'map', '454067KvjoPt', '140586EFhBCl'];
  __STRING_ARRAY__ = function () {
    return _0x173979;
  };
  return __STRING_ARRAY__();
}
