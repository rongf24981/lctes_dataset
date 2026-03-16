'use strict';

function __DECODE_0__(wSZrry, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 289;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wSZrry, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("83357XPteVC") / 1 * (parseInt("10wozjTH") / 2) + -parseInt("577251GVDySn") / 3 * (-parseInt("12wIheAW") / 4) + parseInt("1537015owArej") / 5 + parseInt("1434bJuRNf") / 6 * (-parseInt("3731LodnVL") / 7) + parseInt("598576NGBCSx") / 8 + parseInt("4067748jYIpWa") / 9 * (-parseInt("10LZQbYz") / 10) + -parseInt("792omqfNj") / 11 * (parseInt("82644oegOfG") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 301038);
function __STRING_ARRAY__() {
  const _0x172f9b = ["fill", "83357XPteVC", "utf8", "10LZQbYz", "4067748jYIpWa", "598576NGBCSx", "12wIheAW", "792omqfNj", "3731LodnVL", "filter", "map", "/dev/stdin", "82644oegOfG", "1434bJuRNf", "577251GVDySn", "10wozjTH", "length", "1537015owArej", "shift", "split"];
  __STRING_ARRAY__ = function () {
    return _0x172f9b;
  };
  return __STRING_ARRAY__();
}
function main(stdin) {
  const input = stdin["split"]("\n");
  const N = input["shift"]().split(" ")["map"](v => parseInt(v, 10))[0];
  const gates = input["map"](g => g.split(" ").map(v => parseInt(v, 10)));
  const cards = new Array(N)["fill"](true);
  gates.forEach(g => {
    for (let i = 0; i < g[0] - 1; ++i) {
      cards[i] = false;
    }
    for (let i = g[1]; i < N; ++i) {
      cards[i] = false;
    }
  });
  console.log(cards["filter"](c => c)["length"]);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
