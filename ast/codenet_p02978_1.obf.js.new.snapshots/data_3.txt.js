function __DECODE_0__(aRylai, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 119;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aRylai, key);
}
function __STRING_ARRAY__() {
  var _0x249d15 = ["length", "utf8", "8000368VWdaqR", "split", "log", "/dev/stdin", "1511290xTlWbR", "4293RKlvpC", "push", "58yhUkns", "8068IWKnaU", "4tZNkuz", "3881568jSqYhk", "121nuySzx", "594595yHOjyE", "2663457IiHABB", "7rKIyZn"];
  __STRING_ARRAY__ = function () {
    return _0x249d15;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("58yhUkns") / 1 * (-parseInt("8068IWKnaU") / 2) + parseInt("2663457IiHABB") / 3 * (-parseInt("4tZNkuz") / 4) + -parseInt("594595yHOjyE") / 5 + -parseInt("3881568jSqYhk") / 6 * (-parseInt("7rKIyZn") / 7) + -parseInt("8000368VWdaqR") / 8 + parseInt("4293RKlvpC") / 9 + parseInt("1511290xTlWbR") / 10 * (parseInt("121nuySzx") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 537012);
function Main(input) {
  input = input.split("\n");
  const N = parseInt(input[0]);
  const As = input[1]["split"](" ").map(x => parseInt(x));
  var now = As;
  while (true) {
    var min = -1;
    var next = [];
    for (i = 1; i < now.length - 1; i++) {
      if (min == -1 || now[min] > now[i]) {
        min = i;
      }
      if (min == now[i] && now[i - 1] + now[i + 1] < now[min - 1] + now[min + 1]) {
        min = i;
      }
    }
    if (now[min] * 2 > now[now["length"] - 2]) {
      min = now["length"] - 2;
    }
    for (i = 0; i < now["length"]; i++) {
      if (i == min - 1) {
        next["push"](now[min - 1] + now[min]);
      } else if (i == min) {} else if (i == min + 1) {
        next.push(now[min + 1] + now[min]);
      } else {
        next["push"](now[i]);
      }
    }
    now = next;
    if (now["length"] == 2) {
      break;
    }
  }
  console["log"](now[0] + now[1]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
