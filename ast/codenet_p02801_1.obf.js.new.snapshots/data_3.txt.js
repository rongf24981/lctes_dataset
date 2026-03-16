function __STRING_ARRAY__() {
  var _0x15c37e = ["7KQznvR", "5823880rUSItp", "4275372IyKhUx", "split", "459120EnnWsN", "join", "51AwEuRC", "log", "trim", "738177cbrwEJ", "map", "460hoZlvm", "indexOf", "utf8", "error", "62138RixTvT", "351216RSyKcz", "7929680PFHXXc"];
  __STRING_ARRAY__ = function () {
    return _0x15c37e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("738177cbrwEJ") / 1 + -parseInt("62138RixTvT") / 2 * (-parseInt("51AwEuRC") / 3) + -parseInt("459120EnnWsN") / 4 + -parseInt("5823880rUSItp") / 5 + -parseInt("4275372IyKhUx") / 6 * (parseInt("7KQznvR") / 7) + parseInt("7929680PFHXXc") / 8 + parseInt("351216RSyKcz") / 9 * (parseInt("460hoZlvm") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 584192);
Main(myin());
function myin() {
  return require("fs").readFileSync("/dev/stdin", "utf8")["trim"]();
}
function myout(t) {
  console["log"](t);
}
function myerr(t) {
  console["error"](t);
}
function __DECODE_0__(MvPruC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 135;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MvPruC, key);
}
function myconv(i, no) {
  switch (no) {
    case 1:
      return parseInt(i);
    case 2:
      return i["split"](" ");
    case 3:
      return i["split"]("\n");
    case 4:
      return i["split"](" ")["map"](a => Number(a));
    case 5:
      return i["split"]("\n")["map"](a => Number(a));
    case 6:
      return i.split("");
    case 7:
      return i["split"]("")["map"](a => Number(a));
    case 8:
      return i.join(" ");
    case 9:
      return i.join("\n");
    case 0:
      return i["join"]("");
    default:
      return i;
  }
}
function Main(input) {
  input = myconv(input, null);
  var list = "abcdefghijklmnopqrstivwxyz".split("");
  myout(list[list["indexOf"](input) + 1]);
}
