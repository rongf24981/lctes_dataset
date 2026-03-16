(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("4hPRYXS") / 1 * (-parseInt("556898rLqxoh") / 2) + -parseInt("3tUjeGs") / 3 * (parseInt("4249212kQDNGa") / 4) + -parseInt("4736095naPFSf") / 5 + -parseInt("72NrJZux") / 6 * (-parseInt("230559deIZoA") / 7) + parseInt("8122744wlyQDI") / 8 + -parseInt("234iGoCKE") / 9 * (parseInt("342340mpIuYE") / 10) + parseInt("10542499nNMGPU") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 583186);
function Main(input) {
  var input = input.split(" ");
  var n = input[0];
  var a = input[1];
  var b = input[2];
  var Sum = 0;
  for (j = 1; j <= n; j++) {
    if (j >= 0 && j <= 9) {
      if (a <= j && j <= b) {
        Sum += j;
      }
    } else {
      var str = j.toString();
      var arr = str.split("")["map"](n => parseInt(n));
      var x = arr.reduce(function (prev, current, i, arr) {
        return prev + current;
      });
    }
    ;
    if (a <= x && x <= b) {
      Sum += j;
    }
  }
  console["log"](Sum);
}
function __STRING_ARRAY__() {
  var _0x11f138 = ["readFileSync", "utf8", "log", "234iGoCKE", "230559deIZoA", "/dev/stdin", "72NrJZux", "4736095naPFSf", "map", "342340mpIuYE", "10542499nNMGPU", "4hPRYXS", "3tUjeGs", "556898rLqxoh", "4249212kQDNGa", "8122744wlyQDI"];
  __STRING_ARRAY__ = function () {
    return _0x11f138;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XnFoda, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 476;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XnFoda, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
