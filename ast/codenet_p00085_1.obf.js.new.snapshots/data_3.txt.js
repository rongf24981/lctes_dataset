(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1099287zSIQGa") / 1 + parseInt("415458BtIEyH") / 2 * (parseInt("18OBqJHC") / 3) + parseInt("8bzdzQO") / 4 * (parseInt("1570365ejrWow") / 5) + parseInt("5993346xpgMBs") / 6 * (parseInt("7tFyAUJ") / 7) + -parseInt("1499976WCMCAJ") / 8 + -parseInt("335349BBAAix") / 9 * (parseInt("220MnzMEv") / 10) + -parseInt("1410464fSdKOp") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 638661);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x551a43 = ["335349BBAAix", "length", "trim", "1410464fSdKOp", "readFileSync", "7tFyAUJ", "5993346xpgMBs", "1499976WCMCAJ", "18OBqJHC", "220MnzMEv", "1570365ejrWow", "utf8", "split", "1099287zSIQGa", "/dev/stdin", "8bzdzQO", "map", "415458BtIEyH"];
  __STRING_ARRAY__ = function () {
    return _0x551a43;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(ZGGzgH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 423;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZGGzgH, key);
}
for (var i = 0; i < Arr["length"]; i++) {
  if (Arr[i] == "0 0") {
    break;
  }
  var arr = Arr[i]["split"](" ")["map"](Number);
  var N = arr[0];
  var m = arr[1];
  var n = {};
  for (var j = 0; j < N; j++) {
    n[j] = null;
  }
  var x = 0;
  for (var k = 0; k < N; k++) {
    var y = 0;
    do {
      x++;
      if (x == N) {
        x = 0;
      }
      if (n[x] === null) {
        y++;
      }
    } while (y != m);
    n[x] = k;
  }
  console.log(x);
}
