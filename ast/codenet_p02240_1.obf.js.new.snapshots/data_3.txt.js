(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1SITSSk") / 1 * (parseInt("35570WKUeTW") / 2) + -parseInt("1005384VMZzLW") / 3 + -parseInt("528308qAbnmn") / 4 + parseInt("1048455KVYkBT") / 5 + -parseInt("42258rYCxZj") / 6 * (-parseInt("91tOoWVD") / 7) + -parseInt("31832lAIPTd") / 8 * (parseInt("81xcmxzv") / 9) + parseInt("3559130ZugKzk") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 171932);
function __STRING_ARRAY__() {
  var _0x37c078 = ["1048455KVYkBT", "sort", "split", "81xcmxzv", "map", "35570WKUeTW", "528308qAbnmn", "newline", "/dev/stdin", "slice", "1005384VMZzLW", "42258rYCxZj", "3559130ZugKzk", "1SITSSk", "yes", "readFileSync", "91tOoWVD", "31832lAIPTd", "trim", "ascii", "min"];
  __STRING_ARRAY__ = function () {
    return _0x37c078;
  };
  return __STRING_ARRAY__();
}
config = {
  input: "/dev/stdin",
  newline: "\n"
};
line = require("fs")["readFileSync"](config.input, "ascii")["trim"]()["split"](config["newline"])["map"](function (line) {
  return line.split(" ")["map"](Number);
});
n = line[0][0];
m = line[0][1];
q = line[m + 1][0];
function __DECODE_0__(RkVZVm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 374;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RkVZVm, key);
}
adj = new Array(n);
for (i = 0; i < n; i++) {
  adj[i] = null;
}
conn = line["slice"](1, m + 1);
conn["sort"](function (a, b) {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
for (i in conn) {
  min0 = id0 = conn[i][0];
  min1 = id1 = conn[i][1];
  while (adj[min0] !== null) {
    min0 = adj[min0];
  }
  while (adj[min1] !== null) {
    min1 = adj[min1];
  }
  min = Math["min"](min0, min1);
  if (id0 !== min) {
    adj[id0] = min;
  }
  if (id1 !== min) {
    adj[id1] = min;
  }
}
q = line.slice(m + 2, m + 2 + q);
for (i in q) {
  min0 = q[i][0];
  min1 = q[i][1];
  while (adj[min0] !== null) {
    min0 = adj[min0];
  }
  while (adj[min1] !== null) {
    min1 = adj[min1];
  }
  console.log(min0 === min1 ? "yes" : "no");
}
