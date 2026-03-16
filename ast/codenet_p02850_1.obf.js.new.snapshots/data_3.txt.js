'use strict';

function __STRING_ARRAY__() {
  const _0x22985f = ["195820VAmbAy", "32270FXGTVI", "push", "2990064KkZEvi", "490QgDYDJ", "map", "fill", "906hiRFAv", "shift", "forEach", "log", "3083941AmRicm", "289150nEpAfD", "1347123ftirgY", "length", "split", "readFileSync", "utf8", "333ejIwHG", "18ZWqlQa"];
  __STRING_ARRAY__ = function () {
    return _0x22985f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("490QgDYDJ") / 1 * (parseInt("906hiRFAv") / 2) + parseInt("1347123ftirgY") / 3 + -parseInt("195820VAmbAy") / 4 + parseInt("289150nEpAfD") / 5 * (-parseInt("18ZWqlQa") / 6) + -parseInt("3083941AmRicm") / 7 + parseInt("2990064KkZEvi") / 8 + parseInt("333ejIwHG") / 9 * (-parseInt("32270FXGTVI") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 262362);
function __DECODE_0__(xXmNrs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 384;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xXmNrs, key);
}
function main(inp) {
  inp = inp.trim()["split"]("\n");
  const N = Number(inp["shift"]());
  let G = [...new Array(N)]["map"](a => []);
  let vp = new Array();
  inp["forEach"](r => {
    r = r["split"](" ")["map"](n => n - 1);
    G[r[0]]["push"](r[1]);
    G[r[1]].push(r[0]);
    vp["push"](r[0] + "-" + r[1]);
  });
  let K = 0;
  let I = new Map();
  let cs = new Array(N)["fill"](0);
  let used = new Array(N)["fill"](0);
  let que = new Array();
  used[0] = 1;
  que.push(0);
  while (que["length"]) {
    let v = que["shift"]();
    if (K < G[v].length) {
      K = G[v]["length"];
    }
    let cur = 1;
    for (const u of G[v]) {
      if (used[u]) {
        continue;
      }
      if (cur === cs[v]) {
        cur++;
      }
      cs[u] = I[u + "-" + v] = I[v + "-" + u] = cur++;
      used[u] = 1;
      que["push"](u);
    }
  }
  console["log"](K);
  vp["forEach"](v => {
    console["log"](I[v]);
  });
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
