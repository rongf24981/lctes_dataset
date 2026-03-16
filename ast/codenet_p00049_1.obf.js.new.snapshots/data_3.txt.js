(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("188834PNxxeR") / 1 + -parseInt("2tpKFhp") / 2 * (parseInt("140061mQRvel") / 3) + -parseInt("397884veTooZ") / 4 + -parseInt("85230sLLBFA") / 5 + parseInt("1075686xlMfUy") / 6 + parseInt("254632CHvefo") / 7 + parseInt("380344YOljxR") / 8 * (parseInt("45yMiQHN") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 101334);
function __STRING_ARRAY__() {
  var _0x26b3ed = ["380344YOljxR", "/dev/stdin", "85230sLLBFA", "254632CHvefo", "readFileSync", "1075686xlMfUy", "log", "utf8", "45yMiQHN", "397884veTooZ", "split", "140061mQRvel", "188834PNxxeR", "2tpKFhp"];
  __STRING_ARRAY__ = function () {
    return _0x26b3ed;
  };
  return __STRING_ARRAY__();
}
w = x = y = z = 0;
i = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"](/\s|,/);
c = j = -1;
for (; c = i[j += 2]; n = "\n") {
  if (c == "A") {
    w++;
  } else if (c == "B") {
    x++;
  } else if (c == "O") {
    z++;
  } else {
    y++;
  }
}
function __DECODE_0__(tXoZfN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 201;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tXoZfN, key);
}
console["log"](w + n + x + n + y + n + z);
