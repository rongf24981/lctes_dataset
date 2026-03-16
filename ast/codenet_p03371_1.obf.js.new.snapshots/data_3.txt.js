(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1nNnpIH") / 1 * (-parseInt("2635066dprjHI") / 2) + parseInt("851670fMuyif") / 3 + parseInt("22460LiznyZ") / 4 * (parseInt("235JSWktu") / 5) + parseInt("7507212ieausn") / 6 * (-parseInt("7qqKgie") / 7) + parseInt("9622928NPAMJA") / 8 + -parseInt("2126466JQNnrR") / 9 + -parseInt("6592240GicVUm") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 921494);
function Main(input) {
  input = input["split"]("\n");
  A = parseInt(input[0]["split"](" ")[0]);
  B = parseInt(input[0].split(" ")[1]);
  C = parseInt(input[0]["split"](" ")[2]);
  X = parseInt(input[0].split(" ")[3]);
  Y = parseInt(input[0].split(" ")[4]);
  var ans = 0;
  if (C <= (A + B) / 2 && C >= Math.min(A, B)) {
    if (X <= Y) {
      ans = C * X * 2 + B * (Y - X);
    } else {
      ans = C * Y * 2 + A * (X - Y);
    }
  } else if (C <= (A + B) / 2 && C < Math["min"](A, B)) {
    ans = C * Math.max(X, Y) * 2;
  } else {
    ans = X * A + Y * B;
  }
  console.log("%s", ans);
}
function debug() {
  var input = document.getElementById("input")["value"];
  Main(input);
}
function __DECODE_0__(smImoM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(smImoM, key);
}
function __STRING_ARRAY__() {
  var _0x607ebf = ["7qqKgie", "1nNnpIH", "min", "235JSWktu", "6592240GicVUm", "/dev/stdin", "utf8", "value", "22460LiznyZ", "readFileSync", "7507212ieausn", "split", "851670fMuyif", "2126466JQNnrR", "9622928NPAMJA", "2635066dprjHI"];
  __STRING_ARRAY__ = function () {
    return _0x607ebf;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
