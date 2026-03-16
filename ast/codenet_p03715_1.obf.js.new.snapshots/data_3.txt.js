function __DECODE_0__(Hsnpej, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 383;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Hsnpej, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("295155koBUDE") / 1 + -parseInt("277670DqcApj") / 2 + parseInt("936996RMLFSu") / 3 + parseInt("4irKKiO") / 4 * (parseInt("2469765PjLUki") / 5) + -parseInt("2200074SDofkm") / 6 + parseInt("2365426fGfIgw") / 7 + -parseInt("4140760njxEbK") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 416249);
function Main(input) {
  input = input["trim"]()["split"]("\n").map(function (x) {
    return x["split"](" ");
  });
  var H = parseInt(input[0][0], 10);
  var W = parseInt(input[0][1], 10);
  var ans = calc(H, W);
  console["log"](ans);
}
function calc(H, W) {
  if (H % 3 === 0 || W % 3 === 0) {
    return 0;
  }
  var result = H * W;
  var tmp;
  var oldtmp = result;
  for (var i = 0; i <= W; i++) {
    tmp = Math["max"](Math["abs"](i * H - (W - i) * Math["ceil"](H / 2)), Math["abs"](i * H - (W - i) * Math["floor"](H / 2)), H % 2 * (W - i));
    result = Math.min(result, tmp);
    if (tmp > oldtmp) {
      break;
    }
    oldtmp = tmp;
  }
  [W, H] = [H, W];
  oldtmp = H * W;
  for (var i = 0; i <= W; i++) {
    tmp = Math.max(Math["abs"](i * H - (W - i) * Math["ceil"](H / 2)), Math.abs(i * H - (W - i) * Math.floor(H / 2)), H % 2 * (W - i));
    result = Math.min(result, tmp);
    if (tmp > oldtmp) {
      break;
    }
    oldtmp = tmp;
  }
  return Math.min(result, H, W);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x2e8fd1 = ["log", "295155koBUDE", "abs", "/dev/stdin", "936996RMLFSu", "floor", "ceil", "readFileSync", "max", "2365426fGfIgw", "4irKKiO", "277670DqcApj", "2469765PjLUki", "2200074SDofkm", "split", "trim", "4140760njxEbK"];
  __STRING_ARRAY__ = function () {
    return _0x2e8fd1;
  };
  return __STRING_ARRAY__();
}
