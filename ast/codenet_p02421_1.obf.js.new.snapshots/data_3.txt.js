function __DECODE_0__(zeIfLt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 214;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zeIfLt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("49636AKUhCH") / 1 * (-parseInt("18cDPiwP") / 2) + -parseInt("1384458Rdoozh") / 3 * (-parseInt("4YXmvZd") / 4) + parseInt("1723045fqrQTH") / 5 + parseInt("126bRZdZV") / 6 * (-parseInt("365540JMXQkJ") / 7) + parseInt("6229304LOPZop") / 8 + -parseInt("6488892mWIwnA") / 9 * (parseInt("20sMSdZs") / 10) + parseInt("25316500HnFRbD") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 900938);
var input = "";
function __STRING_ARRAY__() {
  var _0x6093be = ["6229304LOPZop", "end", "25316500HnFRbD", "1384458Rdoozh", "20sMSdZs", "4YXmvZd", "49636AKUhCH", "length", "split", "18cDPiwP", "365540JMXQkJ", "126bRZdZV", "resume", "utf-8", "stdin", "1723045fqrQTH", "6488892mWIwnA"];
  __STRING_ARRAY__ = function () {
    return _0x6093be;
  };
  return __STRING_ARRAY__();
}
var readable = process["stdin"];
readable["resume"]();
readable.setEncoding("utf-8");
readable.on("data", function (chunk) {
  input += chunk;
});
readable.on("end", function () {
  var data = input["split"]("\n");
  var n = data[0];
  var tscore = 0;
  var hscore = 0;
  for (var i = 1; i < data["length"]; i++) {
    var taha = data[i]["split"](" ");
    if (taha[0] < taha[1]) {
      hscore += 3;
    } else if (taha[1] < taha[0]) {
      tscore += 3;
    } else {
      hscore += 1;
      tscore += 1;
    }
  }
  console.log(tscore + " " + hscore);
});
