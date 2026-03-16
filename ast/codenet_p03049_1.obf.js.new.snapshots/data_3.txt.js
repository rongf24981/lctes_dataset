'use strict';

function __DECODE_0__(nFBMQG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 307;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nFBMQG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("609663guPGQl") / 1 + -parseInt("2298206UlYEtS") / 2 + parseInt("2201610BlDFmg") / 3 + parseInt("1684388FtSiYZ") / 4 + parseInt("3475365ChUWce") / 5 * (parseInt("6aEUHrA") / 6) + parseInt("366317GDFAuV") / 7 * (-parseInt("24yTtftd") / 8) + parseInt("522eMOKzQ") / 9 * (-parseInt("88260yXZOjO") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 641699);
function counter(str, seq) {
  return str["split"](seq)["length"] - 1;
}
function __STRING_ARRAY__() {
  const _0x4064a2 = ["forEach", "1684388FtSiYZ", "6aEUHrA", "max", "split", "88260yXZOjO", "3475365ChUWce", "readFileSync", "2298206UlYEtS", "2201610BlDFmg", "charAt", "366317GDFAuV", "utf8", "522eMOKzQ", "length", "shift", "/dev/stdin", "609663guPGQl", "24yTtftd", "min"];
  __STRING_ARRAY__ = function () {
    return _0x4064a2;
  };
  return __STRING_ARRAY__();
}
function main(stdin) {
  const input = stdin["split"]("\n");
  input["shift"]();
  let ans = 0;
  let startsB = 0;
  let endsA = 0;
  let startsBandEndsA = 0;
  input["forEach"](s => {
    ans += counter(s, "AB");
    if (s["charAt"](0) === "B") {
      if (s["charAt"](s["length"] - 1) === "A") {
        ++startsBandEndsA;
      } else {
        ++startsB;
      }
    } else if (s["charAt"](s.length - 1) === "A") {
      ++endsA;
    }
  });
  const smaller = Math["min"](startsB, endsA);
  const bigger = Math.max(startsB, endsA);
  const shortage = bigger - smaller;
  let extra = Math["max"](0, startsBandEndsA - shortage);
  if (shortage === 0 && extra !== 0) {
    --extra;
  }
  ans += smaller;
  ans += Math["min"](shortage, startsBandEndsA);
  ans += extra;
  console.log(ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
