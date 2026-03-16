(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("23zwVIww") / 1 * (-parseInt("3556EioEAG") / 2) + -parseInt("837mdPyhv") / 3 * (-parseInt("3508HjYPLO") / 4) + -parseInt("889940DlTUcl") / 5 + -parseInt("18rExVlT") / 6 * (-parseInt("791Zefutk") / 7) + parseInt("1790080ANgePJ") / 8 + -parseInt("2193786xMqFUQ") / 9 + parseInt("1378440kNmqGP") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 143990);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(ofmuAf, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 392;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ofmuAf, key);
}
function __STRING_ARRAY__() {
  const _0x3f0be7 = ["1378440kNmqGP", "2193786xMqFUQ", "3556EioEAG", "split", "log", "push", "791Zefutk", "889940DlTUcl", "23zwVIww", "18rExVlT", "837mdPyhv", "map", "readFileSync", "1790080ANgePJ", "max", "forEach", "pop", "/dev/stdin", "3508HjYPLO"];
  __STRING_ARRAY__ = function () {
    return _0x3f0be7;
  };
  return __STRING_ARRAY__();
}
(input => {
  const rows = input["split"]("\n");
  const [N, M, Q] = rows[0].split(" ")["map"](Number);
  const A = [];
  for (let i = 0; i < Q; i++) {
    A[i] = rows[i + 1]["split"](" ")["map"](Number);
  }
  const ss = [];
  const s = [];
  let d = 0;
  let v = 0;
  while (v !== undefined) {
    if (d === N) {
      ss.push([...s]);
      s["pop"]();
      v++;
      d--;
    } else if (v >= M) {
      v = s.pop();
      d--;
    } else {
      s["push"](v + 1);
      d++;
    }
  }
  let res = 0;
  ss.forEach(s => {
    let sum = 0;
    A["forEach"](a => {
      if (s[a[1] - 1] - s[a[0] - 1] === a[2]) {
        sum += a[3];
      }
    });
    res = Math["max"](res, sum);
  });
  console["log"](res);
})(input);
