function __DECODE_0__(hTdKXK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 480;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hTdKXK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("367GSJkvc") / 1 * (parseInt("4700RxUYWa") / 2) + parseInt("10545YsqvmU") / 3 * (parseInt("692IzZIMa") / 4) + -parseInt("3519970wHvnvy") / 5 + -parseInt("3704052lqFuBa") / 6 + -parseInt("7576534MmoSAZ") / 7 + -parseInt("11334576TPGxEw") / 8 + parseInt("28200771fxIGLN") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 783444);
function main(arg) {
  var arg2 = arg["split"](/\n/g);
  var honbun = arg2[1];
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (i = 0; i < alphabet["length"]; i++) {
    var iro = alphabet["substr"](i, 1);
    var regkun = new RegExp(iro + "+", "g");
    honbun = honbun["replace"](regkun, iro);
  }
  console.log(honbun["length"]);
}
function __STRING_ARRAY__() {
  var _0x2901dc = ["28200771fxIGLN", "10545YsqvmU", "3519970wHvnvy", "3704052lqFuBa", "11334576TPGxEw", "7576534MmoSAZ", "split", "replace", "length", "692IzZIMa", "readFileSync", "4700RxUYWa", "substr", "367GSJkvc", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2901dc;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
