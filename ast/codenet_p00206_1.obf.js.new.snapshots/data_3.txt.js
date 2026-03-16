function __DECODE_0__(JmEIOm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 145;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JmEIOm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("130000bmHOGH") / 1 + -parseInt("135874lEHWbU") / 2 * (parseInt("3EsSFXU") / 3) + -parseInt("8wMJFIG") / 4 * (-parseInt("131635oTaBFd") / 5) + -parseInt("324930nTLBCP") / 6 * (parseInt("7arIDDB") / 7) + parseInt("79472dAAmoP") / 8 * (-parseInt("144zKRckb") / 9) + parseInt("6356550mGjqHr") / 10 + parseInt("4558235NMphPN") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 691658);
function main() {
  var i = 0;
  var j;
  var flag;
  var L;
  var MN;
  while (true) {
    L = Number(input[i++]);
    if (L === 0) {
      break;
    }
    flag = true;
    for (j = 0; j < 12; j++) {
      MN = input[i++]["split"](" ").map(Number);
      L -= MN[0] - MN[1];
      if (flag && L <= 0) {
        console["log"](j + 1);
        flag = false;
      }
    }
    if (flag) {
      console["log"]("NA");
    }
  }
}
var input = "";
process.stdin["resume"]();
function __STRING_ARRAY__() {
  var _0x39453b = ["8wMJFIG", "144zKRckb", "7arIDDB", "79472dAAmoP", "131635oTaBFd", "data", "utf8", "setEncoding", "log", "split", "4558235NMphPN", "135874lEHWbU", "324930nTLBCP", "stdin", "resume", "end", "6356550mGjqHr", "130000bmHOGH", "3EsSFXU"];
  __STRING_ARRAY__ = function () {
    return _0x39453b;
  };
  return __STRING_ARRAY__();
}
process["stdin"]["setEncoding"]("utf8");
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  main();
});
