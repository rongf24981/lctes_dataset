function __STRING_ARRAY__() {
  var _0x478055 = ["2AizNjK", "182164dHSBJW", "readFileSync", "49IsgnLP", "9WRKrbO", "949670znPxYN", "6350qoZeYg", "/dev/stdin", "split", "log", "utf8", "155815oGTmvB", "60RJJBxn", "14968uCQxUS", "234RfjgXu", "61026vpYonQ", "228370JaJbUY"];
  __STRING_ARRAY__ = function () {
    return _0x478055;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jHLmdS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 434;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jHLmdS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2AizNjK") / 1 * (parseInt("6350qoZeYg") / 2) + -parseInt("9WRKrbO") / 3 * (-parseInt("182164dHSBJW") / 4) + parseInt("949670znPxYN") / 5 + -parseInt("61026vpYonQ") / 6 * (parseInt("49IsgnLP") / 7) + parseInt("14968uCQxUS") / 8 * (-parseInt("234RfjgXu") / 9) + -parseInt("228370JaJbUY") / 10 + parseInt("155815oGTmvB") / 11 * (-parseInt("60RJJBxn") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 106702);
function Main(input) {
  var [a, b] = input["split"](" ").map(Number);
  if (b > a) {
    [a, b] = [b, a];
  }
  var r;
  do {
    r = a % b;
    a = b;
    b = r;
  } while (r);
  console["log"](a);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
