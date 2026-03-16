function __STRING_ARRAY__() {
  var _0x2fb056 = ["984078mAnzOW", "/dev/stdin", "631135EthfXM", "split", "234pDBeeg", "77OAOtpA", "4870cdoQLD", "228jqslWb", "4pltUGA", "25064DynTJp", "315050EsiZHy", "forEach", "log", "includes", "1146404sBGqkL", "31075JbnbfN"];
  __STRING_ARRAY__ = function () {
    return _0x2fb056;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jCVhbx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 138;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jCVhbx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("31075JbnbfN") / 1 + -parseInt("4870cdoQLD") / 2 * (parseInt("228jqslWb") / 3) + -parseInt("4pltUGA") / 4 * (-parseInt("631135EthfXM") / 5) + -parseInt("984078mAnzOW") / 6 + parseInt("1146404sBGqkL") / 7 + parseInt("25064DynTJp") / 8 * (-parseInt("234pDBeeg") / 9) + -parseInt("315050EsiZHy") / 10 * (-parseInt("77OAOtpA") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 111078);
function Main(input) {
  input = input["split"](" ");
  input = input.map(Number);
  children = 2;
  function sub(arry, num) {
    var sum = 0;
    arry["forEach"](element => {
      sum += element;
    });
    return arry["includes"](sum / num);
  }
  if (sub(input, children)) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
