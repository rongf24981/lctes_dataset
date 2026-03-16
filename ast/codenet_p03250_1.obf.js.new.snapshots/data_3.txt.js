(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("507482qCSxij") / 1 + -parseInt("1928120JmnuBI") / 2 + -parseInt("1497QwMTwS") / 3 * (-parseInt("6044KzuQZU") / 4) + parseInt("2155swOoJQ") / 5 * (parseInt("26058DBGcQh") / 6) + parseInt("672595fQNIuF") / 7 * (parseInt("104XjMIca") / 8) + -parseInt("15124797VTPElN") / 9 + -parseInt("7938160LbwfFL") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 944000);
function __STRING_ARRAY__() {
  var _0x363d93 = ["log", "2155swOoJQ", "7938160LbwfFL", "split", "sort", "1497QwMTwS", "15124797VTPElN", "507482qCSxij", "readFileSync", "6044KzuQZU", "104XjMIca", "1928120JmnuBI", "26058DBGcQh", "672595fQNIuF"];
  __STRING_ARRAY__ = function () {
    return _0x363d93;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kZWBqw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 293;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kZWBqw, key);
}
function main(input) {
  abc = input["split"](" ");
  abc = abc["sort"]();
  a = "";
  a += abc[2];
  a += abc[1];
  a = parseInt(a, 10);
  b = parseInt(abc[0], 10);
  console["log"](a + b);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
