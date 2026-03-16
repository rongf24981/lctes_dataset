(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("165364DSiMJw") / 1 + parseInt("1249842NBYiPR") / 2 * (parseInt("6OPbmzE") / 3) + -parseInt("388JyJELg") / 4 * (parseInt("51195dANgBI") / 5) + -parseInt("768xvyKsI") / 6 * (-parseInt("69671PTejZO") / 7) + parseInt("8edQeSW") / 8 * (parseInt("8725419dtfwLP") / 9) + parseInt("10sPdrus") / 10 * (-parseInt("476223gSoZTM") / 11) + -parseInt("21795684tbjEKB") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 805898);
function __STRING_ARRAY__() {
  var _0x336c04 = ["utf8", "10sPdrus", "1249842NBYiPR", "hasOwnProperty", "/dev/stdin", "6OPbmzE", "165364DSiMJw", "768xvyKsI", "length", "8edQeSW", "51195dANgBI", "slice", "split", "readFileSync", "21795684tbjEKB", "trim", "476223gSoZTM", "388JyJELg", "8725419dtfwLP", "shift", "69671PTejZO"];
  __STRING_ARRAY__ = function () {
    return _0x336c04;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(OSWgGb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 350;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OSWgGb, key);
}
var Arr = input["trim"]()["split"]("\n");
while (Arr.length > 1) {
  var AL = Arr["shift"]();
  var hash = {};
  for (var i = 0; i < AL; i++) {
    var arr = Arr[i].trim()["split"](" ");
    hash[arr[0]] = arr[1];
  }
  Arr = Arr["slice"](AL, Arr["length"] + 1);
  var AL = Arr["shift"]();
  var str = "";
  for (var i = 0; i < AL; i++) {
    var k = Arr[i]["trim"]();
    str += hash["hasOwnProperty"](k) ? hash[k] : k;
  }
  Arr = Arr["slice"](AL, Arr["length"] + 1);
  console.log(str);
  if (Arr[0] == "0") {
    break;
  }
}
