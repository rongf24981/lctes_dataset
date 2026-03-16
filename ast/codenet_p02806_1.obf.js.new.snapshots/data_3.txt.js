function __STRING_ARRAY__() {
  var _0x3e3024 = ["split", "1577406ttEszR", "33787CuooYv", "17912fTBXZR", "log", "30OdQKdA", "53000RMmxVx", "68750zDkXCS", "indexOf", "10mZPnpV", "407sDMzwv", "32jjZClb", "16356fDrGAk", "splice", "693wFkltH", "1320ORqrzM", "/dev/stdin", "1425592RiPVXt", "utf8", "length"];
  __STRING_ARRAY__ = function () {
    return _0x3e3024;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("32jjZClb") / 1 * (parseInt("17912fTBXZR") / 2) + parseInt("1577406ttEszR") / 3 + -parseInt("16356fDrGAk") / 4 * (parseInt("10mZPnpV") / 5) + -parseInt("30OdQKdA") / 6 * (-parseInt("1425592RiPVXt") / 7) + -parseInt("53000RMmxVx") / 8 * (parseInt("693wFkltH") / 9) + -parseInt("68750zDkXCS") / 10 * (parseInt("407sDMzwv") / 11) + parseInt("1320ORqrzM") / 12 * (-parseInt("33787CuooYv") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 772106);
function __DECODE_0__(MucBrx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 160;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MucBrx, key);
}
function Main(input) {
  var lines = input.split("\n");
  var titles = lines.map(l => l["split"](" ")[0])["splice"](1, lines["length"] - 2);
  var sleptAt = titles["indexOf"](lines[lines["length"] - 1]);
  var sum = 0;
  for (var i = sleptAt + 2; i < lines["length"] - 1; i++) {
    sum += Number(lines[i]["split"](" ")[1]);
  }
  console["log"](sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
