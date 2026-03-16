(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("405773UmVdhu") / 1 + parseInt("161998HxibEx") / 2 * (parseInt("24JjCueY") / 3) + -parseInt("6141028EloaAv") / 4 + -parseInt("6174440wKqjCc") / 5 + parseInt("5630874RiMzxc") / 6 + -parseInt("1253JlNrqr") / 7 * (parseInt("17144gcQXRa") / 8) + -parseInt("26161983gHrJwb") / 9 * (-parseInt("10nBOjaO") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 933843);
function __DECODE_0__(FtyJGC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 429;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FtyJGC, key);
}
(function (input) {
  var inputs = input["replace"](/\r/g, "")["split"]("\n");
  while (true) {
    var cards = [];
    var line = inputs.shift()["split"](" ");
    var n = parseInt(line[0]);
    var r = parseInt(line[1]);
    if (n === 0 && r === 0) {
      break;
    }
    for (var i = n; i > 0; i--) {
      cards["push"](i);
    }
    while (r--) {
      var line = inputs["shift"]().split(" ");
      var p = parseInt(line[0]) - 1;
      var c = parseInt(line[1]);
      var tmp;
      tmp = cards.splice(p, c);
      cards = tmp["concat"](cards);
    }
    console["log"](cards["shift"]());
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x4c8553 = ["replace", "push", "405773UmVdhu", "/dev/stdin", "17144gcQXRa", "24JjCueY", "shift", "5630874RiMzxc", "log", "split", "readFileSync", "utf8", "6174440wKqjCc", "26161983gHrJwb", "1253JlNrqr", "concat", "161998HxibEx", "6141028EloaAv", "10nBOjaO"];
  __STRING_ARRAY__ = function () {
    return _0x4c8553;
  };
  return __STRING_ARRAY__();
}
