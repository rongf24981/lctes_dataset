(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("61967qsNJVT") / 1 * (-parseInt("10yPAQgP") / 2) + -parseInt("623868bTYFEi") / 3 + -parseInt("1359300jISWtw") / 4 + parseInt("2945JcnrKJ") / 5 * (parseInt("2286KqgzDN") / 6) + parseInt("1043omEISr") / 7 * (parseInt("19568HOQtGH") / 8) + parseInt("8487lnWxwq") / 9 * (-parseInt("3790uowOAx") / 10) + parseInt("2849517KVVRjS") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 252567);
function __DECODE_0__(XqGLVq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 482;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XqGLVq, key);
}
function main(input) {
  input = input["split"](" ");
  var max = input[1] < input[2] ? input[1] : input[2];
  var min = input[0] - input[1] > input[2] ? 0 : input[2] - (input[0] - input[1]);
  console.log(max + " " + min);
}
function __STRING_ARRAY__() {
  var _0x308f5a = ["61967qsNJVT", "readFileSync", "1359300jISWtw", "3790uowOAx", "19568HOQtGH", "2945JcnrKJ", "623868bTYFEi", "8487lnWxwq", "/dev/stdin", "split", "2849517KVVRjS", "utf8", "2286KqgzDN", "1043omEISr", "10yPAQgP"];
  __STRING_ARRAY__ = function () {
    return _0x308f5a;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
