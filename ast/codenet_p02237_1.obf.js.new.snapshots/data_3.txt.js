(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1MtfIrq") / 1 * (parseInt("3055678zQFvjs") / 2) + parseInt("1035sDQXjU") / 3 * (-parseInt("5716juzhdH") / 4) + -parseInt("11530aqVDxn") / 5 * (parseInt("2994gMysnI") / 6) + parseInt("10087bMdCIi") / 7 * (-parseInt("2384Fjypbh") / 8) + -parseInt("18UDSXch") / 9 * (-parseInt("4595870aqKrYH") / 10) + -parseInt("1823767QReSgw") / 11 * (-parseInt("36QPijjV") / 12) + parseInt("665665QJMcyw") / 13 * (parseInt("854rnQjxb") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 939114);
config = {
  input: "/dev/stdin",
  newline: "\n"
};
function __STRING_ARRAY__() {
  var _0x2d812a = ["log", "1MtfIrq", "2994gMysnI", "1823767QReSgw", "ascii", "854rnQjxb", "trim", "665665QJMcyw", "shift", "11530aqVDxn", "4595870aqKrYH", "3055678zQFvjs", "split", "input", "readFileSync", "18UDSXch", "1035sDQXjU", "push", "10087bMdCIi", "36QPijjV", "2384Fjypbh", "5716juzhdH"];
  __STRING_ARRAY__ = function () {
    return _0x2d812a;
  };
  return __STRING_ARRAY__();
}
line = require("fs")["readFileSync"](config["input"], "ascii")["trim"]()["split"](config.newline);
n = Number(line.shift());
adj = {};
for (i in line) {
  ary = line[i]["split"](" ");
  j = ary["shift"]();
  ary["shift"]();
  adj[j] = ary;
}
function __DECODE_0__(sCtbRS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 345;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sCtbRS, key);
}
for (i = 1; i <= n; i++) {
  ary = [];
  for (j = 1; j <= n; j++) {
    if (adj[i].indexOf(String(j)) !== -1) {
      ary["push"](1);
    } else {
      ary.push(0);
    }
  }
  console["log"](ary.join(" "));
}
