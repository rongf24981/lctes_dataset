function __DECODE_0__(CMfICl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 296;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CMfICl, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("788328MJFjMC") / 1 + -parseInt("466592MrYdhv") / 2 + parseInt("197322ThAXzR") / 3 * (parseInt("16HVgztM") / 4) + -parseInt("3829880IzBLzP") / 5 + parseInt("3188316ykofWe") / 6 * (-parseInt("7seeBHb") / 7) + parseInt("1938728SXlNCP") / 8 + -parseInt("4197996ZtkSop") / 9 * (-parseInt("50noOPvG") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 518671);
(function main() {
  const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n");
  const n = Number(lines.shift());
  const adjLists = Array["from"](Array(n), () => []);
  lines["forEach"]((l, i) => l["split"](" ").splice(2).forEach(e => adjLists[i].push(e - 1)));
  const d = [];
  const f = [];
  dfs(adjLists, d, f);
  for (let i = 0; i < n; i++) {
    console.log(i + 1 + " " + d[i] + " " + f[i]);
  }
})();
function dfs(adjLists, d, f) {
  const WHITE = 0;
  const GRAY = 1;
  const BLACK = 2;
  const size = adjLists.length;
  const color = Array.from(adjLists, () => WHITE);
  let time = 0;
  function visit(u) {
    color[u] = GRAY;
    d[u] = ++time;
    adjLists[u]["forEach"](v => {
      if (color[v] === WHITE) {
        visit(v);
      }
    });
    color[u] = BLACK;
    f[u] = ++time;
  }
  adjLists["forEach"]((e, u) => {
    if (color[u] === WHITE) {
      visit(u);
    }
  });
}
function __STRING_ARRAY__() {
  const _0x101cde = ["split", "7seeBHb", "3188316ykofWe", "3829880IzBLzP", "1938728SXlNCP", "readFileSync", "forEach", "from", "50noOPvG", "trim", "466592MrYdhv", "16HVgztM", "4197996ZtkSop", "197322ThAXzR", "788328MJFjMC"];
  __STRING_ARRAY__ = function () {
    return _0x101cde;
  };
  return __STRING_ARRAY__();
}
