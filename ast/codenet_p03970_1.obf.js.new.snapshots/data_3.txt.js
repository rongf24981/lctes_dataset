(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("167esSreY") / 1 * (-parseInt("7298syJYHO") / 2) + -parseInt("1181928NIGDXx") / 3 + parseInt("6673560SwqFib") / 4 + parseInt("7331165UglLFe") / 5 + parseInt("18zzPVcp") / 6 * (-parseInt("1442735jjaPkv") / 7) + parseInt("7107904PnukUp") / 8 + parseInt("1080mIkMGu") / 9 * (-parseInt("219290MsejUe") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 988723);
function Main(input) {
  input = input["trim"]();
  var output = 0;
  var seijou = "CODEFESTIVAL2016";
  for (var i = 0; i < input["length"]; i++) {
    var tmp1 = input["slice"](i, i + 1);
    var tmp2 = seijou["slice"](i, i + 1);
    if (tmp1 != tmp2) {
      output++;
    }
  }
  console.log(output);
}
function __STRING_ARRAY__() {
  var _0x254fe8 = ["CODEFESTIVAL2016", "length", "7331165UglLFe", "/dev/stdin", "1442735jjaPkv", "1181928NIGDXx", "readFileSync", "1080mIkMGu", "7298syJYHO", "18zzPVcp", "167esSreY", "7107904PnukUp", "trim", "219290MsejUe", "6673560SwqFib", "slice"];
  __STRING_ARRAY__ = function () {
    return _0x254fe8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XvarMO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 433;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XvarMO, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
