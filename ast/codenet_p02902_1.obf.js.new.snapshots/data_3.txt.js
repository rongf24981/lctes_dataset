(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1728450afJGUx") / 1 + parseInt("15562ObFyyE") / 2 * (parseInt("39OYPtvP") / 3) + -parseInt("164dtqNSj") / 4 * (parseInt("207590cPJtKP") / 5) + -parseInt("9822810LaSlIn") / 6 + -parseInt("11481022fQdumF") / 7 + parseInt("11431728DOTyrz") / 8 + -parseInt("23660559jikawf") / 9 * (-parseInt("10xdhgMZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 908001);
function Main(input) {
  input = input.split("\n");
  if (input[input["length"] - 1] === "") {
    input.pop();
  }
  const N = input[0]["split"](" ")[0] - 0;
  const M = input[0]["split"](" ")[1] - 0;
  var direct = [];
  for (var i = 0; i <= N; i++) {
    direct["push"]([]);
  }
  for (var i = 1; i < input["length"]; i++) {
    direct[input[i]["split"](" ")[0] - 0].push(input[i]["split"](" ")[1] - 0);
  }
  var memo = [];
  for (var i = 1; i <= N; i++) {
    memo["push"]([i]);
  }
  var temp;
  var str;
  while (memo["length"] > 0) {
    str = "";
    temp = [];
    memo.forEach(e => {
      direct[e[e["length"] - 1]]["forEach"](f => {
        temp["push"](e["concat"]([f]));
      });
    });
    memo = temp["slice"]();
    memo.forEach(e => {
      if (e[e["length"] - 1] === e[0]) {
        temp = e["slice"]();
        temp["shift"]();
        str = temp["length"] + "\n" + temp["join"]("\n");
      }
    });
    if (str !== "") {
      console["log"](str);
      return;
    }
  }
  console["log"](-1);
}
function __DECODE_0__(wmHqnw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wmHqnw, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x5597e4 = ["forEach", "length", "164dtqNSj", "slice", "join", "concat", "readFileSync", "207590cPJtKP", "9822810LaSlIn", "23660559jikawf", "shift", "push", "split", "log", "39OYPtvP", "10xdhgMZ", "11481022fQdumF", "11431728DOTyrz", "1728450afJGUx", "15562ObFyyE"];
  __STRING_ARRAY__ = function () {
    return _0x5597e4;
  };
  return __STRING_ARRAY__();
}
