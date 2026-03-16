function __DECODE_0__(EILEyf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 454;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EILEyf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3019jKieEr") / 1 * (parseInt("314ltYjii") / 2) + -parseInt("3HXnelB") / 3 * (-parseInt("92804tHoDge") / 4) + -parseInt("17585QHgwLT") / 5 * (parseInt("654SNuETl") / 6) + parseInt("42nKnLVb") / 7 * (-parseInt("954232ekzQCI") / 8) + parseInt("7650936wxomgk") / 9 + -parseInt("920TbVvLg") / 10 * (parseInt("73282XIqKDA") / 11) + parseInt("23123652iimwQL") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 614362);
function Main(input) {
  input = input.split("\n");
  tmp = input["shift"]();
  N = parseInt(tmp["split"](" ")[0]);
  M = tmp["split"](" ")[1];
  S = input;
  A = "n"["repeat"](N)["split"]("");
  flag = true;
  S["forEach"](v => {
    t = v["split"](" ")["map"](v => parseInt(v));
    if (A[t[0] - 1] != "n" && A[t[0] - 1] != t[1]) {
      flag = false;
    }
    A[t[0] - 1] = t[1];
  });
  A = A.join("");
  A = A["replace"](/^nn([0-9])/, "10$1");
  A = A["replace"](/^n([0-9])/, "1$1");
  A = A["replace"](/n/g, "0");
  A = parseInt(A);
  if (flag && (A + "")["length"] == N) {
    console["log"](A);
  } else {
    console["log"](-1);
  }
}
function __STRING_ARRAY__() {
  var _0x404c9 = ["73282XIqKDA", "17585QHgwLT", "split", "3019jKieEr", "map", "23123652iimwQL", "3HXnelB", "920TbVvLg", "42nKnLVb", "replace", "length", "314ltYjii", "954232ekzQCI", "92804tHoDge", "repeat", "/dev/stdin", "forEach", "readFileSync", "log", "shift", "7650936wxomgk", "654SNuETl"];
  __STRING_ARRAY__ = function () {
    return _0x404c9;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
