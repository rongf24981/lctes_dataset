(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("410784XbnKBH") / 1 + parseInt("346366TomxAt") / 2 * (parseInt("3MJoxTt") / 3) + -parseInt("33580aDaHeV") / 4 * (-parseInt("495CCLnWR") / 5) + -parseInt("2928180tiFPRf") / 6 + parseInt("1644167SnCtbf") / 7 * (parseInt("8rtbFXT") / 8) + parseInt("9505818uaabQa") / 9 * (parseInt("10nJzpoa") / 10) + -parseInt("1885697llzXxr") / 11 * (parseInt("108lwLsHd") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 675282);
function main(_stdin) {
  const stdin = _stdin.split("\n");
  const len = parseInt(stdin["shift"](), 10);
  const data = stdin["filter"]((e, i) => i < len)["map"](e => e.split(" ")["map"](e => parseInt(e, 10)));
  const dists = [null, 0];
  bfs(data[0], dists, data);
  for (const node of data) {
    if (dists[node[0]] === undefined) {
      dists[node[0]] = -1;
    }
  }
  dists["shift"]();
  dists["forEach"]((e, i) => {
    console["log"](i + 1, e);
  });
}
function __DECODE_0__(kNWBOZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 110;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kNWBOZ, key);
}
function __STRING_ARRAY__() {
  const _0x9dee99 = ["log", "8rtbFXT", "slice", "346366TomxAt", "forEach", "495CCLnWR", "1885697llzXxr", "map", "2928180tiFPRf", "readFileSync", "410784XbnKBH", "3MJoxTt", "33580aDaHeV", "1644167SnCtbf", "10nJzpoa", "/dev/stdin", "9505818uaabQa", "108lwLsHd", "utf8", "find", "filter", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x9dee99;
  };
  return __STRING_ARRAY__();
}
function bfs(node, dists, data) {
  const key = node[0];
  const next = dists[key] + 1;
  const children = node["slice"](2);
  for (const child of children) {
    if (dists[child] === undefined || dists[child] > next) {
      const nextNode = data["find"](e => e[0] === child);
      dists[child] = next;
      bfs(nextNode, dists, data);
    }
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
