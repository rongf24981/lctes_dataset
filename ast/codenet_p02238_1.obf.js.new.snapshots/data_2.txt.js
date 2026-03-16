function __DECODE_0__(CMfICl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x128;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CMfICl, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x12a)) / 0x1 + -parseInt(__DECODE_0__(0x135)) / 0x2 + parseInt(__DECODE_0__(0x129)) / 0x3 * (parseInt(__DECODE_0__(0x136)) / 0x4) + -parseInt(__DECODE_0__(0x12e)) / 0x5 + parseInt(__DECODE_0__(0x12d)) / 0x6 * (-parseInt(__DECODE_0__(0x12c)) / 0x7) + parseInt(__DECODE_0__(0x12f)) / 0x8 + -parseInt(__DECODE_0__(0x128)) / 0x9 * (-parseInt(__DECODE_0__(0x133)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7ea0f);
(function main() {
  const lines = require('fs')[__DECODE_0__(0x130)]('/dev/stdin', 'utf8')[__DECODE_0__(0x134)]()['split']('\x0a');
  const n = Number(lines['shift']());
  const adjLists = Array[__DECODE_0__(0x132)](Array(n), () => []);
  lines[__DECODE_0__(0x131)]((l, i) => l[__DECODE_0__(0x12b)]('\x20')['splice'](0x2)['forEach'](e => adjLists[i]['push'](e - 0x1)));
  const d = [];
  const f = [];
  dfs(adjLists, d, f);
  for (let i = 0x0; i < n; i++) {
    console['log'](i + 0x1 + '\x20' + d[i] + '\x20' + f[i]);
  }
})();
function dfs(adjLists, d, f) {
  const WHITE = 0x0;
  const GRAY = 0x1;
  const BLACK = 0x2;
  const size = adjLists['length'];
  const color = Array['from'](adjLists, () => WHITE);
  let time = 0x0;
  function visit(u) {
    color[u] = GRAY;
    d[u] = ++time;
    adjLists[u][__DECODE_0__(0x131)](v => {
      if (color[v] === WHITE) {
        visit(v);
      }
    });
    color[u] = BLACK;
    f[u] = ++time;
  }
  adjLists[__DECODE_0__(0x131)]((e, u) => {
    if (color[u] === WHITE) {
      visit(u);
    }
  });
}
function __STRING_ARRAY__() {
  const _0x101cde = ['split', '7seeBHb', '3188316ykofWe', '3829880IzBLzP', '1938728SXlNCP', 'readFileSync', 'forEach', 'from', '50noOPvG', 'trim', '466592MrYdhv', '16HVgztM', '4197996ZtkSop', '197322ThAXzR', '788328MJFjMC'];
  __STRING_ARRAY__ = function () {
    return _0x101cde;
  };
  return __STRING_ARRAY__();
}
