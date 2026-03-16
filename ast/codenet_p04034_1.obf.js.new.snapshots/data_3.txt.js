(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1oWuPMQ") / 1 * (parseInt("202358yZVaFH") / 2) + -parseInt("69kXHKBB") / 3 * (-parseInt("253312NqmGGW") / 4) + parseInt("5547360VSyzsF") / 5 + -parseInt("764082TYvxWE") / 6 + -parseInt("49GDyfpV") / 7 * (-parseInt("1661592DGCoKK") / 8) + parseInt("18tqApdy") / 9 * (-parseInt("7669070zhWfqq") / 10) + -parseInt("11eLOZHe") / 11 * (parseInt("16418076dLnBxZ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 889396);
input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
lines = input.split("\n");
line = lines.shift()["split"](" ");
function __DECODE_0__(xEQWqj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 446;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xEQWqj, key);
}
N = line[0] * 1;
M = line[1] * 1;
b = [];
function __STRING_ARRAY__() {
  var _0xa61eb9 = ["readFileSync", "split", "202358yZVaFH", "18tqApdy", "69kXHKBB", "7669070zhWfqq", "764082TYvxWE", "49GDyfpV", "11eLOZHe", "16418076dLnBxZ", "1oWuPMQ", "utf8", "1661592DGCoKK", "/dev/stdin", "5547360VSyzsF", "log", "253312NqmGGW"];
  __STRING_ARRAY__ = function () {
    return _0xa61eb9;
  };
  return __STRING_ARRAY__();
}
r = [];
for (i = 1; i <= N; i++) {
  b[i] = 1;
  r[i] = 0;
}
r[1] = 1;
for (i = 0; i < M; i++) {
  l = lines[i]["split"](" ");
  x = l[0] * 1;
  y = l[1] * 1;
  if (r[x]) {
    r[y] += 1;
  }
  if (r[x] && b[x] == 1) {
    r[x] = 0;
  }
  b[x] -= 1;
  b[y] += 1;
}
cnt = 0;
for (i = 1; i <= N; i++) {
  if (r[i] > 0) {
    cnt++;
  }
}
console["log"](cnt);
