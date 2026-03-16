function __STRING_ARRAY__() {
  var _0x382231 = ["4325016mqEuQF", "6214180qoHnXl", "2758QzdRrG", "1016ZgONee", "5236686TFtXSy", "map", "split", "1745961UvgAAT", "readFileSync", "log", "/dev/stdin", "149238NwJjEs", "toFixed", "46HkyQls", "1310704aqDtyw", "slice"];
  __STRING_ARRAY__ = function () {
    return _0x382231;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("46HkyQls") / 1 * (-parseInt("2758QzdRrG") / 2) + parseInt("4325016mqEuQF") / 3 + -parseInt("1310704aqDtyw") / 4 + -parseInt("6214180qoHnXl") / 5 + -parseInt("5236686TFtXSy") / 6 + -parseInt("1745961UvgAAT") / 7 + -parseInt("1016ZgONee") / 8 * (-parseInt("149238NwJjEs") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 918304);
function __DECODE_0__(GzwPAV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 367;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GzwPAV, key);
}
function Main(input) {
  var input = input["split"]("\n");
  var arya = input[0].split(" ")["map"](val => parseInt(val, 10))["slice"](0, 4);
  var w = arya[0];
  var h = arya[1];
  var x = arya[2];
  var y = arya[3];
  if (x == 0 & y == 0 || x == w && y == h) {
    console.log((w * h / 2)["toFixed"](6) + " 0");
    return true;
  }
  var a1 = x * h;
  var a2 = (w - x) * h;
  var b1 = y * w;
  var b2 = (h - y) * w;
  var a = a1;
  var b = b1;
  var counter = 0;
  if (a1 > a2) {
    a = a2;
  }
  if (b1 > b2) {
    b = b2;
  }
  var reault = a;
  if (a < b) {
    reault = b;
  }
  if (a == b) {
    var counter = 1;
  }
  console["log"](reault["toFixed"](6) + " " + counter);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
