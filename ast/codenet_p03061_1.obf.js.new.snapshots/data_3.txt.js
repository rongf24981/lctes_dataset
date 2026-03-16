function __DECODE_0__(ZJWrGw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 487;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZJWrGw, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("103cxkKkF") / 1 * (-parseInt("7538paAnUZ") / 2) + parseInt("671763jirdEr") / 3 + parseInt("42396vFTmgC") / 4 * (-parseInt("415ArSSYW") / 5) + -parseInt("3550260oAJRqf") / 6 + -parseInt("1391586TGhJpZ") / 7 + parseInt("1257320fPsXcD") / 8 + -parseInt("20269341NvplKY") / 9 * (-parseInt("10OYrEzp") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 574803);
function gcd(arr) {
  var f = (a, b) => b ? f(b, a % b) : a;
  var ans = arr[0];
  for (var i = 1; i < arr["length"]; i++) {
    ans = f(ans, arr[i]);
  }
  return ans;
}
function getExcep(c) {
  var min = Math["min"](...c);
  var max = Math["max"](...c);
  var mincount = 0;
  var maxcount = 0;
  var findValue = 0;
  for (var i = 0; i < c["length"]; i++) {
    if (c[i] === min) {
      mincount++;
    }
  }
  if (mincount === 1) {
    findValue = min;
  } else {
    findValue = max;
  }
  for (var i = 0; i < c["length"]; i++) {
    if (c[i] === findValue) {
      return i;
    }
  }
}
function main(arg) {
  arg = arg.trim()["split"]("\n");
  var N = Number(arg[0]);
  var A = arg[1]["split"](" ").map(Number);
  var c = new Array(A["length"])["fill"](0);
  var result = 0;
  for (var i = 0; i < A["length"]; i++) {
    var _A = A["slice"]();
    _A["splice"](i, 1);
    var n = gcd(_A);
    c[i] = n;
  }
  var idx = getExcep(c);
  A[idx] = A[idx + 1];
  console["log"](gcd(A));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x58bf70 = ["split", "readFileSync", "1391586TGhJpZ", "1257320fPsXcD", "length", "103cxkKkF", "utf8", "splice", "42396vFTmgC", "671763jirdEr", "20269341NvplKY", "fill", "log", "max", "10OYrEzp", "7538paAnUZ", "/dev/stdin", "min", "415ArSSYW", "slice", "3550260oAJRqf"];
  __STRING_ARRAY__ = function () {
    return _0x58bf70;
  };
  return __STRING_ARRAY__();
}
