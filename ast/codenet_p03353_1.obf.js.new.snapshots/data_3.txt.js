function __STRING_ARRAY__() {
  var _0x2a3102 = ["log", "length", "/dev/stdin", "1540105DywDNa", "readFileSync", "sort", "32658KKzgAJ", "indexOf", "push", "8cZOvwD", "2713167YjHJXZ", "split", "385463cEiTXo", "4079684OSKubi", "fromCharCode", "839280UtzElC", "utf8", "slice", "312cSGqrA", "1338510gKqPHg", "2wIzLit"];
  __STRING_ARRAY__ = function () {
    return _0x2a3102;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(qiacdE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 493;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qiacdE, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("385463cEiTXo") / 1 * (-parseInt("2wIzLit") / 2) + -parseInt("32658KKzgAJ") / 3 * (-parseInt("312cSGqrA") / 4) + -parseInt("1540105DywDNa") / 5 + -parseInt("1338510gKqPHg") / 6 + -parseInt("4079684OSKubi") / 7 + -parseInt("8cZOvwD") / 8 * (-parseInt("2713167YjHJXZ") / 9) + parseInt("839280UtzElC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 506044);
function Main(s) {
  s = s["split"]("\n");
  var k = +s[1];
  s = s[0];
  var a = 96;
  var sl = s["length"];
  var ans = {};
  var j;
  loop: while (a <= 122) {
    a++;
    var n = s["indexOf"](String["fromCharCode"](a));
    while (n !== -1) {
      for (j = 0; j < k; j++) {
        if (n + j >= sl) {
          break;
        }
        ans[s["slice"](n, n + j + 1)] = 1;
      }
      n = s.indexOf(String["fromCharCode"](a), n + 1);
    }
    j = 0;
    var ans2 = [];
    for (i in ans) {
      j++;
      ans2["push"](i);
    }
    if (j >= k) {
      ans2["sort"]();
      console["log"](ans2[k - 1]);
      break loop;
    }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
