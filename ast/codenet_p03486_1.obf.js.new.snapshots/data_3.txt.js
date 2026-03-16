function __STRING_ARRAY__() {
  var _0x2159f3 = ["171pSItAs", "1137070piVEQe", "reverse", "130992LOPNRv", "3764690RjaFIM", "Yes", "41127gqaWXh", "1388640FttFUx", "readFileSync", "10898148LLGPGP", "7LkMDQW", "join", "sort", "33GohvuD", "116PejgdA", "UTF-8", "split", "481675Cazjal"];
  __STRING_ARRAY__ = function () {
    return _0x2159f3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("481675Cazjal") / 1 + -parseInt("116PejgdA") / 2 * (parseInt("41127gqaWXh") / 3) + parseInt("1388640FttFUx") / 4 + parseInt("3764690RjaFIM") / 5 + parseInt("10898148LLGPGP") / 6 * (parseInt("7LkMDQW") / 7) + parseInt("130992LOPNRv") / 8 * (-parseInt("171pSItAs") / 9) + -parseInt("1137070piVEQe") / 10 * (parseInt("33GohvuD") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 987432);
function __DECODE_0__(Daghjz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 299;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Daghjz, key);
}
function main(input) {
  var lines = input["split"]("\n");
  var s = lines[0]["split"]("");
  var t = lines[1]["split"]("");
  s = s["sort"]()["join"]();
  t = t["sort"]()["reverse"]().join();
  if (s < t) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "UTF-8"));
