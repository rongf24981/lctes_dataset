function __DECODE_0__(UdxMYg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 495;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UdxMYg, key);
}
function __STRING_ARRAY__() {
  var _0x421b38 = ["3973392hSodNv", "10131iripWh", "590fKcCCN", "forEach", "log", "872538azeyzH", "8neTtnl", "65RJLHnY", "574074DQDXfo", "split", "length", "2892652fDkQrL", "splice", "/dev/stdin", "readFileSync", "keys", "648637QBoAzc", "1746451QVhdGP", "1056RhcfTK"];
  __STRING_ARRAY__ = function () {
    return _0x421b38;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("872538azeyzH") / 1 + parseInt("2892652fDkQrL") / 2 + parseInt("10131iripWh") / 3 * (parseInt("1056RhcfTK") / 4) + parseInt("65RJLHnY") / 5 * (parseInt("574074DQDXfo") / 6) + -parseInt("1746451QVhdGP") / 7 * (-parseInt("8neTtnl") / 8) + -parseInt("3973392hSodNv") / 9 + -parseInt("590fKcCCN") / 10 * (parseInt("648637QBoAzc") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 783171);
function Main(input) {
  var N = input[0].split(" ")[0] - 0;
  var M = input[0]["split"](" ")[1] - 0;
  var list = {};
  for (var i = 1; i <= M; i++) {
    var a = input[i]["split"](" ")[0] - 0;
    var b = input[i]["split"](" ")[1] - 0;
    list[a] = list[a] || {};
    list[b] = list[b] || {};
    list[a][b] = i;
    list[b][a] = i;
  }
  var ans = 0;
  for (var i = 1; i <= M; i++) {
    if (check(list, i) != N) {
      ans++;
    }
  }
  console["log"](ans);
}
function check(list, i) {
  var stack = [1];
  var checked = {};
  while (stack["length"] > 0) {
    var now = stack["splice"](0, 1)[0];
    if (checked[now]) {
      continue;
    }
    checked[now] = true;
    var next = Object.keys(list[now]);
    next["forEach"](nxt => {
      if (list[now][nxt] != i) {
        stack.push(nxt);
      }
    });
  }
  return Object["keys"](checked)["length"];
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n"));
