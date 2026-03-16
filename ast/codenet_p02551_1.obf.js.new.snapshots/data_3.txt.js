(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("102779phVcps") / 1 + -parseInt("34724EvUgXN") / 2 + -parseInt("771636oSyohc") / 3 + parseInt("26416FfsLDT") / 4 * (-parseInt("140TWUgVm") / 5) + parseInt("1018146JcrJVc") / 6 + -parseInt("60634RJdhsp") / 7 + parseInt("4356136SnouGA") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 143281);
function Main(input) {
  input = input["split"]("\n");
  tmp = input[0]["split"](" ");
  var N = parseInt(tmp[0]);
  var Q = parseInt(tmp[1]);
  var minRows = Array(N - 2);
  var minCols = Array(N - 2);
  minRows["fill"](N - 2);
  minCols["fill"](N - 2);
  var result = BigInt((N - 2) * (N - 2));
  for (var i = 0; i < Q; i++) {
    var query = input[i + 1]["split"](" ");
    var q_1 = parseInt(query[0]);
    var q_2 = parseInt(query[1]);
    var myArray = minRows;
    var myArray2 = minCols;
    var index = q_2 - 2;
    var closest = minCols[index];
    if (q_1 == 1) {
      myArray = minCols;
      myArray2 = minRows;
      closest = minRows[index];
    }
    result -= BigInt(closest);
    for (var j = 0; j < closest; j++) {
      if (myArray[j] > index) {
        myArray[j] = index;
      }
    }
    myArray2[index] = 0;
  }
  console["log"]("%d", Number(result));
}
function __DECODE_0__(UOerly, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 381;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UOerly, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x43aea6 = ["fill", "26416FfsLDT", "4356136SnouGA", "1018146JcrJVc", "140TWUgVm", "771636oSyohc", "split", "102779phVcps", "readFileSync", "60634RJdhsp", "log", "34724EvUgXN"];
  __STRING_ARRAY__ = function () {
    return _0x43aea6;
  };
  return __STRING_ARRAY__();
}
