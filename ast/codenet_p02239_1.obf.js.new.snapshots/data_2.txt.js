(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x7f)) / 0x1 + parseInt(__DECODE_0__(0x78)) / 0x2 * (parseInt(__DECODE_0__(0x80)) / 0x3) + -parseInt(__DECODE_0__(0x81)) / 0x4 * (-parseInt(__DECODE_0__(0x7a)) / 0x5) + -parseInt(__DECODE_0__(0x7d)) / 0x6 + parseInt(__DECODE_0__(0x82)) / 0x7 * (parseInt(__DECODE_0__(0x76)) / 0x8) + parseInt(__DECODE_0__(0x6f)) / 0x9 * (parseInt(__DECODE_0__(0x83)) / 0xa) + -parseInt(__DECODE_0__(0x7b)) / 0xb * (parseInt(__DECODE_0__(0x70)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa4dd2);
function main(_stdin) {
  const stdin = _stdin['split']('\x0a');
  const len = parseInt(stdin[__DECODE_0__(0x74)](), 0xa);
  const data = stdin[__DECODE_0__(0x73)]((e, i) => i < len)[__DECODE_0__(0x7c)](e => e['split']('\x20')[__DECODE_0__(0x7c)](e => parseInt(e, 0xa)));
  const dists = [null, 0x0];
  bfs(data[0x0], dists, data);
  for (const node of data) {
    if (dists[node[0x0]] === undefined) {
      dists[node[0x0]] = -0x1;
    }
  }
  dists[__DECODE_0__(0x74)]();
  dists[__DECODE_0__(0x79)]((e, i) => {
    console[__DECODE_0__(0x75)](i + 0x1, e);
  });
}
function __DECODE_0__(kNWBOZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kNWBOZ, key);
}
function __STRING_ARRAY__() {
  const _0x9dee99 = ['log', '8rtbFXT', 'slice', '346366TomxAt', 'forEach', '495CCLnWR', '1885697llzXxr', 'map', '2928180tiFPRf', 'readFileSync', '410784XbnKBH', '3MJoxTt', '33580aDaHeV', '1644167SnCtbf', '10nJzpoa', '/dev/stdin', '9505818uaabQa', '108lwLsHd', 'utf8', 'find', 'filter', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x9dee99;
  };
  return __STRING_ARRAY__();
}
function bfs(node, dists, data) {
  const key = node[0x0];
  const next = dists[key] + 0x1;
  const children = node[__DECODE_0__(0x77)](0x2);
  for (const child of children) {
    if (dists[child] === undefined || dists[child] > next) {
      const nextNode = data[__DECODE_0__(0x72)](e => e[0x0] === child);
      dists[child] = next;
      bfs(nextNode, dists, data);
    }
  }
}
main(require('fs')[__DECODE_0__(0x7e)](__DECODE_0__(0x6e), __DECODE_0__(0x71)));
