function __DECODE_0__(YZOsoD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 375;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YZOsoD, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("429455BDpoJx") / 1 + -parseInt("626848ZmKswf") / 2 + parseInt("65955zFnUjm") / 3 * (parseInt("12QkqIjG") / 4) + -parseInt("688510QkcmNR") / 5 + parseInt("1274070JHItmq") / 6 + parseInt("7RmaYBO") / 7 * (-parseInt("2559992Qfaowy") / 8) + parseInt("2554632hoWrKn") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 220478);
Main(function (input) {
  input = input.trim().split("\n");
  input["shift"]();
  input["forEach"](function (line) {
    var tmp = line["split"](" ");
    var c = +tmp[0];
    var a = +tmp[1];
    var n = +tmp[2];
    var ans = 0;
    var min;
    min = Math["min"](c, a, n);
    c -= min;
    a -= min;
    n -= min;
    ans += min;
    min = Math["min"](Math["floor"](c / 2), a);
    c -= min * 2;
    a -= min;
    ans += min;
    ans += Math["floor"](c / 3);
    console["log"](ans);
  });
});
function __STRING_ARRAY__() {
  var _0x175e26 = ["forEach", "429455BDpoJx", "split", "utf8", "688510QkcmNR", "log", "2554632hoWrKn", "2559992Qfaowy", "1274070JHItmq", "7RmaYBO", "12QkqIjG", "65955zFnUjm", "626848ZmKswf", "shift", "setEncoding", "min", "floor", "stdin", "end", "resume"];
  __STRING_ARRAY__ = function () {
    return _0x175e26;
  };
  return __STRING_ARRAY__();
}
function Main(main) {
  var input = "";
  process["stdin"]["resume"]();
  process["stdin"]["setEncoding"]("utf8");
  process["stdin"].on("data", function (chunk) {
    input += chunk;
  });
  process["stdin"].on("end", function () {
    main(input);
  });
}
;
