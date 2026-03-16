function __DECODE_0__(EtSKSb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 443;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EtSKSb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1UEuypG") / 1 * (-parseInt("102766hRsHOT") / 2) + -parseInt("472800dQvmXJ") / 3 + parseInt("404388fjjpHP") / 4 + -parseInt("673345eBGZJM") / 5 * (-parseInt("12eHXScy") / 6) + -parseInt("602504nDiWfR") / 7 + -parseInt("2875528ZBAbgz") / 8 + parseInt("5116833IpTsiW") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 284476);
var tmp = {};
function __STRING_ARRAY__() {
  var _0x741faf = ["472800dQvmXJ", "102766hRsHOT", "2875528ZBAbgz", "602504nDiWfR", "12eHXScy", "404388fjjpHP", "673345eBGZJM", "split", "log", "1UEuypG", "5116833IpTsiW", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x741faf;
  };
  return __STRING_ARRAY__();
}
function main(chunk) {
  var lines = chunk["split"]("\n");
  var n = Number(lines[0]);
  var map = {};
  for (var i = 2; i < n + 1; i++) {
    var a = Number(lines[i - 1]);
    if (map[a]) {
      map[a].t++;
      map[a].p.push(i);
    } else {
      map[a] = {};
      map[a].t = 1;
      map[a].p = [i];
    }
  }
  console["log"](calc(map, 1) + 1);
}
function calc(map, n) {
  if (tmp[n]) {
    return tmp[n];
  }
  var ans = 0;
  for (var i in map[n].p) {
    var p = map[n].p[i];
    if (map[p]) {
      ans = Math.max(ans, map[p].t + calc(map, p));
    }
  }
  tmp[n] = ans;
  return ans;
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
