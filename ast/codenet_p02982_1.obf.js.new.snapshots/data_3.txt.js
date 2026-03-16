(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("571733IjJqwS") / 1 + parseInt("502964PGkDKs") / 2 + -parseInt("2002968wPbMXW") / 3 + -parseInt("3096900YBYnjf") / 4 + parseInt("280105Mcytjo") / 5 + -parseInt("3245568tIkIwt") / 6 + -parseInt("23051aDMLDg") / 7 * (-parseInt("6568bNqxdC") / 8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 456514);
function __STRING_ARRAY__() {
  var _0x2c23e6 = ["2002968wPbMXW", "3245568tIkIwt", "pow", "502964PGkDKs", "3096900YBYnjf", "log", "sqrt", "6568bNqxdC", "split", "isInteger", "/dev/stdin", "571733IjJqwS", "280105Mcytjo", "23051aDMLDg"];
  __STRING_ARRAY__ = function () {
    return _0x2c23e6;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const args = input["split"]("\n");
  const aiueo = args[0]["split"](" ");
  const N = parseInt(aiueo[0], 10);
  const D = parseInt(aiueo[1], 10);
  var arr = [];
  for (var i = 0; i < N; i++) {
    arr[i] = [];
    var subArgs = args[i + 1]["split"](" ");
    for (var j = 0; j < D + 1; j++) {
      arr[i].push(parseInt(subArgs[j], 10));
    }
  }
  var kakunin = 0;
  function kyori(arr1, arr2) {
    var sum = 0;
    for (var i = 0; i < D; i++) {
      sum = sum + Math["pow"](arr1[i] - arr2[i], 2);
    }
    if (Number["isInteger"](Math["sqrt"](sum)) == true) {
      return true;
    } else {
      return false;
    }
  }
  for (var i = 0; i < N; i++) {
    for (var j = i + 1; j < N; j++) {
      if (kyori(arr[i], arr[j]) == true) {
        kakunin++;
      }
    }
  }
  console["log"](kakunin);
}
function __DECODE_0__(VGyeJP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VGyeJP, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
