function __DECODE_0__(dEwPIE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 123;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dEwPIE, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1334005DnWBkY") / 1 + parseInt("2xmutwg") / 2 * (parseInt("5158563tmDgeZ") / 3) + parseInt("1937108rTNIXi") / 4 + parseInt("7503820QAWVKZ") / 5 + parseInt("3644856kkADIJ") / 6 * (-parseInt("14NhSrVz") / 7) + -parseInt("2555920pDcIlf") / 8 + parseInt("1331082pzUGul") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 984013);
function Main(input) {
  input = input["split"]("\n");
  const n = +input[0];
  if (n <= 2) {
    console["log"](1);
    return;
  }
  const xy = input["slice"](1).map(s => s["split"](" ").map(n => +n));
  const map = {};
  xy["forEach"](a => {
    xy["forEach"](b => {
      if (a === b) {
        return;
      }
      const vec = [b[0] - a[0], b[1] - a[1]];
      const m = vec["join"]("_");
      map[m] = map[m] == null ? 1 : map[m] + 1;
    });
  });
  const res = Object["keys"](map)["reduce"]((r, xystr) => {
    const count = map[xystr];
    if (count > r[0]) {
      return [count, xystr];
    } else {
      return [r[0], r[1]];
    }
  }, [0, ""]);
  console["log"](1 + (n - 1) - res[0]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x274a6d = ["3644856kkADIJ", "1937108rTNIXi", "split", "keys", "1334005DnWBkY", "5158563tmDgeZ", "forEach", "14NhSrVz", "join", "2xmutwg", "slice", "2555920pDcIlf", "/dev/stdin", "utf8", "7503820QAWVKZ", "1331082pzUGul", "reduce", "log"];
  __STRING_ARRAY__ = function () {
    return _0x274a6d;
  };
  return __STRING_ARRAY__();
}
