(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("237159kMNWpM") / 1 * (-parseInt("6bctfFC") / 2) + -parseInt("2222589IkhSYn") / 3 + parseInt("3366760ZFDPao") / 4 + parseInt("7159250xYIHeX") / 5 + parseInt("13698DkCZVG") / 6 * (parseInt("3269TqTogA") / 7) + -parseInt("3005512xGalco") / 8 * (parseInt("18QWunpN") / 9) + -parseInt("1643150ipbwyS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 971668);
function Main(input) {
  input = input.split("\n");
  var a = parseInt(input[0].split(" ")[0], 10);
  var b = parseInt(input[0]["split"](" ")[1], 10);
  var s = input[1];
  var regex = new RegExp("^[0-9]{" + a + "}-[0-9]{" + b + "}$", "g");
  var f = s["match"](regex);
  console["log"](f == null ? "No" : "Yes");
}
function __DECODE_0__(FChRcd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 451;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FChRcd, key);
}
function __STRING_ARRAY__() {
  var _0xdec6f5 = ["7159250xYIHeX", "18QWunpN", "split", "log", "match", "6bctfFC", "^[0-9]{", "readFileSync", "3269TqTogA", "237159kMNWpM", "2222589IkhSYn", "Yes", "3005512xGalco", "3366760ZFDPao", "13698DkCZVG", "1643150ipbwyS", "}-[0-9]{"];
  __STRING_ARRAY__ = function () {
    return _0xdec6f5;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
