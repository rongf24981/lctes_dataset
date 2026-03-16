(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("692161GXNcOz") / 1 + parseInt("734936uCViwi") / 2 + -parseInt("610803DmxBJV") / 3 * (-parseInt("4rjjbiX") / 4) + -parseInt("730940FcAzwz") / 5 + -parseInt("5474688PjFAoN") / 6 + -parseInt("1218203CYcxIz") / 7 + -parseInt("7397456yaqCJq") / 8 * (-parseInt("18gLxVVg") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 495607);
function Main(input) {
  input = input["split"]("\n");
  if (input[input.length - 1] === "") {
    input.pop();
  }
  const N = input[0]["split"](" ")[0] - 0;
  const K = input[0].split(" ")[1] - 0;
  var A = input[1]["split"](" ")["map"](e => {
    return e - 0;
  }).sort((a, b) => {
    return a - b;
  });
  var F = input[2]["split"](" ")["map"](e => {
    return e - 0;
  }).sort((a, b) => {
    return b - a;
  });
  var possible = 0;
  for (var i = 0; i < N; i++) {
    possible = Math["max"](possible, A[i] * F[i]);
  }
  var impossible = -1;
  var temp;
  var sum;
  while (possible - impossible > 1) {
    temp = Math.ceil((impossible + possible) / 2);
    sum = 0;
    for (var i = 0; i < N; i++) {
      sum += Math["max"](0, A[i] - Math["floor"](temp / F[i]));
    }
    if (sum <= K) {
      possible = temp;
    } else {
      impossible = temp;
    }
  }
  console["log"](possible);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(YpKUoa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 328;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YpKUoa, key);
}
function __STRING_ARRAY__() {
  var _0x3a9539 = ["readFileSync", "730940FcAzwz", "4rjjbiX", "map", "18gLxVVg", "692161GXNcOz", "log", "split", "5474688PjFAoN", "1218203CYcxIz", "floor", "7397456yaqCJq", "utf8", "734936uCViwi", "max", "610803DmxBJV"];
  __STRING_ARRAY__ = function () {
    return _0x3a9539;
  };
  return __STRING_ARRAY__();
}
