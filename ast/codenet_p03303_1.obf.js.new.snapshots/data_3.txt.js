(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1845131JtnbeM") / 1 + -parseInt("1265906XWiFsY") / 2 + parseInt("9aDplTT") / 3 * (-parseInt("374564nUYYFs") / 4) + -parseInt("10MYgFCU") / 5 * (-parseInt("3867492qjNpQZ") / 6) + -parseInt("4409097nGpVre") / 7 + -parseInt("5517248byqizS") / 8 * (parseInt("18kmeIBD") / 9) + -parseInt("120XffkFp") / 10 * (-parseInt("4048429BzQcva") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 937442);
function myout(text) {
  console["log"](text);
}
function __STRING_ARRAY__() {
  var _0x629cab = ["18kmeIBD", "4048429BzQcva", "5517248byqizS", "utf8", "10MYgFCU", "9aDplTT", "readFileSync", "trim", "3867492qjNpQZ", "374564nUYYFs", "shift", "log", "slice", "length", "1845131JtnbeM", "4409097nGpVre", "120XffkFp", "split", "1265906XWiFsY"];
  __STRING_ARRAY__ = function () {
    return _0x629cab;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XWRRZc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 224;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XWRRZc, key);
}
function Main(input) {
  input = input["split"]("\n");
  var S = input[0];
  var w = parseInt(input[1]);
  if (w == 1) {
    myout(S);
    return;
  }
  S = S["split"]("");
  var list = [];
  while (S["length"] != 0) {
    var tmp = "";
    for (var i = 0; i < w; i++) {
      if (S["length"] != 0) {
        tmp += S["shift"]();
      }
    }
    list.push(tmp);
  }
  var output = "";
  for (var i = 0; i < list["length"]; i++) {
    output += list[i]["slice"](0, 1);
  }
  myout(output);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
