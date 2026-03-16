(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1plBpDx") / 1 * (parseInt("603102ZHcXKw") / 2) + parseInt("29097ELCrep") / 3 + -parseInt("1061352rlkvAi") / 4 + -parseInt("5bWLVRx") / 5 * (-parseInt("1545522IpuLye") / 6) + parseInt("2559095caqUoN") / 7 + parseInt("1739440shIARl") / 8 + -parseInt("341163eHlggq") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 245505);
function divisor(n) {
  var ret = [];
  for (var i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      ret["push"](i);
      if (i * i != n) {
        ret.push(n / i);
      }
    }
  }
  return ret;
}
function __DECODE_0__(ukIMQG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 476;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ukIMQG, key);
}
function f(a, b) {
  return Math.max(("" + a)["length"], ("" + b).length);
}
function __STRING_ARRAY__() {
  var _0x5ce679 = ["341163eHlggq", "2559095caqUoN", "readFileSync", "603102ZHcXKw", "utf8", "floor", "push", "1739440shIARl", "1061352rlkvAi", "length", "1plBpDx", "5bWLVRx", "/dev/stdin", "29097ELCrep", "log", "1545522IpuLye", "split", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x5ce679;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var inputs = input["split"]("\n");
  var n = parseInt(inputs[0], 10);
  var divisors = divisor(n)["sort"]((a, b) => a - b);
  var surplus = divisors["length"] % 2;
  var lastIndex = divisors["length"] - 1;
  var halfLen = Math["floor"](divisors["length"] / 2);
  var minF = ("" + n).length;
  for (var i = 0; i < halfLen - surplus; i++) {
    minF = Math.min(minF, f(divisors[i], divisors[lastIndex - i]));
  }
  if (surplus == 1) {
    minF = Math.min(minF, ("" + divisors[halfLen])["length"]);
  }
  console["log"](minF);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
