(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("649803ZiOLTy") / 1 + parseInt("15932JrWmUO") / 2 * (parseInt("9shIdAq") / 3) + -parseInt("3861252vQJbVG") / 4 + parseInt("312465tufcAz") / 5 + -parseInt("397026NsIyun") / 6 + parseInt("387401SIwzPO") / 7 * (-parseInt("72bmwbXt") / 8) + parseInt("23469939jxidCm") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 514788);
function __STRING_ARRAY__() {
  var _0x8fb2ee = ["/dev/stdin", "397026NsIyun", "15932JrWmUO", "23469939jxidCm", "None", "length", "abcdefghijklmnopqrstuvwxyz", "utf8", "push", "3861252vQJbVG", "649803ZiOLTy", "indexOf", "9shIdAq", "72bmwbXt", "387401SIwzPO", "split", "312465tufcAz", "filter", "log"];
  __STRING_ARRAY__ = function () {
    return _0x8fb2ee;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jRcakP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 350;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jRcakP, key);
}
function main(input) {
  const S = input["split"]("");
  alphabetList = "abcdefghijklmnopqrstuvwxyz"["split"]("");
  arr = S["filter"](function (x, i, self) {
    return self["indexOf"](x) === i;
  }).sort();
  tmp = arrDiff(arr, alphabetList);
  function arrDiff(arr, alphabetList) {
    var a = [];
    var diff = [];
    for (var i = 0; i < arr["length"]; i++) {
      a[arr[i]] = true;
    }
    for (var i = 0; i < alphabetList["length"]; i++) {
      if (a[alphabetList[i]]) {
        delete a[alphabetList[i]];
      } else {
        a[alphabetList[i]] = true;
      }
    }
    for (var k in a) {
      diff["push"](k);
    }
    return diff;
  }
  if (tmp["length"] > 0) {
    ans = tmp[0];
  } else {
    ans = "None";
  }
  console["log"](ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
