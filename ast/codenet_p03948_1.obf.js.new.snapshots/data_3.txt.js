function __DECODE_0__(OhBeEL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 489;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OhBeEL, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("568970OaRqxf") / 1 * (-parseInt("6skgkRX") / 2) + parseInt("657iJODoi") / 3 * (-parseInt("28352lFwQEF") / 4) + parseInt("1388215QIKTnX") / 5 + -parseInt("8676564VUIRld") / 6 + parseInt("5985PhcSSh") / 7 * (-parseInt("6464SpMDaG") / 8) + -parseInt("16145271OGDRWy") / 9 + -parseInt("431710OGouYV") / 10 * (-parseInt("1133zzfpur") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 948041);
function Main(input) {
  function space_strinput(line) {
    var arr = line["replace"](/(^\s+)|(\s+$)/g, "")["split"](" ");
    for (var i = 0; i < arr["length"]; ++i) {
      arr[i] = arr[i];
    }
    return arr;
  }
  function space_numinput(line) {
    var arr = line["replace"](/(^\s+)|(\s+$)/g, "")["split"](" ");
    for (var i = 0; i < arr["length"]; ++i) {
      arr[i] = +arr[i];
    }
    return arr;
  }
  function getmin(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  }
  lines = input["split"]("\n");
  var l0 = space_numinput(lines[0]);
  var n = l0[0];
  var t = l0[1];
  var a = space_numinput(lines[1]);
  var rieki = 0;
  var rieki_place_count = 0;
  var min = a[0];
  var max = a[0];
  for (var i = 0; i < n; ++i) {
    var val = a[i];
    if (val - min > rieki) {
      rieki = val - min;
      rieki_place_count = 1;
    } else if (val - min == rieki) {
      rieki_place_count++;
    }
    min = val < min ? val : min;
  }
  console["log"](getmin(rieki_place_count, Math["floor"](t / 2)));
}
function __STRING_ARRAY__() {
  var _0x48f498 = ["6464SpMDaG", "6skgkRX", "replace", "length", "431710OGouYV", "1388215QIKTnX", "1133zzfpur", "log", "utf8", "16145271OGDRWy", "8676564VUIRld", "657iJODoi", "floor", "readFileSync", "/dev/stdin", "split", "568970OaRqxf", "5985PhcSSh", "28352lFwQEF"];
  __STRING_ARRAY__ = function () {
    return _0x48f498;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
