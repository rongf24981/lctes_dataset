(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe9)) / 0x1 * (-parseInt(__DECODE_0__(0xf1)) / 0x2) + parseInt(__DECODE_0__(0xee)) / 0x3 * (parseInt(__DECODE_0__(0xf4)) / 0x4) + -parseInt(__DECODE_0__(0xed)) / 0x5 * (parseInt(__DECODE_0__(0xe4)) / 0x6) + parseInt(__DECODE_0__(0xf2)) / 0x7 + -parseInt(__DECODE_0__(0xe5)) / 0x8 * (parseInt(__DECODE_0__(0xeb)) / 0x9) + -parseInt(__DECODE_0__(0xf0)) / 0xa * (-parseInt(__DECODE_0__(0xea)) / 0xb) + -parseInt(__DECODE_0__(0xe3)) / 0xc * (-parseInt(__DECODE_0__(0xe6)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6f2bb);
function main(lines) {
  const [N, M] = na();
  const nodes = Array(N + 0x1)[__DECODE_0__(0xf6)](0x0)[__DECODE_0__(0xef)](() => new Set());
  for (let i = 0x1; i <= M; i++) {
    const [a, b] = na();
    nodes[a][__DECODE_0__(0xf3)](b);
    nodes[b][__DECODE_0__(0xf3)](a);
  }
  let ans = 0x0;
  searchRoute(nodes[0x1], [0x1]);
  function searchRoute(node, passed) {
    if (passed['length'] == N) {
      return ++ans;
    }
    for (let n of node) {
      if (passed['includes'](n)) {
        continue;
      }
      searchRoute(nodes[n], passed[__DECODE_0__(0xe8)](n));
    }
  }
  return ans;
}
const lines = require('fs')[__DECODE_0__(0xec)]('/dev/stdin', 'utf8')[__DECODE_0__(0xe7)]()['split']('\x0a');
let lineCount = 0x0;
function __STRING_ARRAY__() {
  const _0x1b6d2b = ['readFileSync', '285iYKnhX', '27vONWIv', 'map', '470820jXsiMA', '2IswTvt', '4107726jBSCXz', 'add', '250748Hncpaw', 'split', 'fill', '617448wdJFfX', '58974uqmygz', '1074912KgJBfw', '26BeKGdd', 'trim', 'concat', '299147pIhJrm', '77ZptGjz', '18PnwjdP'];
  __STRING_ARRAY__ = function () {
    return _0x1b6d2b;
  };
  return __STRING_ARRAY__();
}
const s = () => lines[lineCount++];
const n = () => Number(s());
function __DECODE_0__(bQMhev, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bQMhev, key);
}
const b = () => BigInt(s());
const sa = () => s()[__DECODE_0__(0xf5)]('\x20');
const na = () => sa()['map'](Number);
const ba = () => sa()[__DECODE_0__(0xef)](BigInt);
const ans = main(lines);
console['log'](ans);
