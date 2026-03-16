(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("227357GbhsbD") / 1 + parseInt("370dcVFMI") / 2 * (parseInt("699iBrgRN") / 3) + -parseInt("8VNCIIL") / 4 * (-parseInt("406015GPVpfl") / 5) + parseInt("6wLtzOM") / 6 * (parseInt("830998eDUsoj") / 7) + parseInt("377648fDlGGJ") / 8 + parseInt("650304eBPQtQ") / 9 + -parseInt("999180QsXKlp") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 116412);
function Main(input) {
  input = input.split("\n");
  if (input[input["length"] - 1] === "") {
    input["pop"]();
  }
  const N = input[0]["split"](" ")[0] - 0;
  const Z = input[0]["split"](" ")[1] - 0;
  const W = input[0]["split"](" ")[2] - 0;
  const a = input[1]["split"](" ")["map"](e => {
    return e - 0;
  });
  if (a["length"] === 1) {
    console["log"](Math["abs"](W - a[0]));
    return;
  }
  var x;
  var y;
  x = new Array(N);
  y = new Array(N);
  for (var i = N - 1; i >= 0; i--) {
    if (i === N - 1) {
      y[i] = Math["abs"](a[N - 1] - a[N - 2]);
      x[i] = Math["abs"](a[N - 1] - a[N - 2]);
      continue;
    }
    y[i] = Math["min"](...x["slice"](i + 1), i !== 0 ? Math["abs"](a[i - 1] - a[N - 1]) : Math["abs"](Z - a[N - 1]));
    x[i] = Math["max"](...y["slice"](i + 1), i !== 0 ? Math["abs"](a[i - 1] - a[N - 1]) : Math.abs(W - a[N - 1]));
  }
  console["log"](Math.max(...x));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(zrNOCO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 147;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zrNOCO, key);
}
function __STRING_ARRAY__() {
  const _0x2b3667 = ["650304eBPQtQ", "log", "length", "8VNCIIL", "999180QsXKlp", "slice", "readFileSync", "max", "370dcVFMI", "split", "map", "377648fDlGGJ", "min", "utf8", "6wLtzOM", "/dev/stdin", "830998eDUsoj", "227357GbhsbD", "pop", "699iBrgRN", "406015GPVpfl", "abs"];
  __STRING_ARRAY__ = function () {
    return _0x2b3667;
  };
  return __STRING_ARRAY__();
}
