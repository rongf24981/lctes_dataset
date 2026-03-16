(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2123qBhYBW") / 1 + -parseInt("578626GVNBMw") / 2 + -parseInt("17727fpAcbv") / 3 * (-parseInt("96HKPVgy") / 4) + parseInt("86585ULHXut") / 5 * (-parseInt("60AtPFdn") / 6) + -parseInt("49AdFgsT") / 7 * (-parseInt("136568SgvJzJ") / 8) + -parseInt("10026MGeTvc") / 9 + -parseInt("138500YIfWPJ") / 10 * (-parseInt("275MZtXOs") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 146089);
function myin() {
  return require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
}
function __DECODE_0__(ZTPKLl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 137;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZTPKLl, key);
}
function myout(t) {
  console.log(t);
}
function myconv(i, no) {
  switch (no) {
    case 0:
      return i;
    case 1:
      return parseInt(i);
    case 2:
      return i["split"](" ");
    case 3:
      return i["split"]("\n");
    case 4:
      return i["split"](" ")["map"](a => Number(a));
    case 5:
      return i["split"]("\n")["map"](a => Number(a));
    case 6:
      return i["split"]("");
    case 7:
      return i.split("").map(a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 3);
  var N = myconv(input[0], 1);
  var list = myconv(input[1], 4);
  var tmpList = [];
  for (var i = 0; i < N; i++) {
    tmpList["push"](list[i] - (i + 1));
  }
  tmpList.sort(function (a, b) {
    return a - b;
  });
  var b = tmpList[myconv(tmpList["length"] / 2, 1)];
  var output = 0;
  for (var i = 0; i < N; i++) {
    output += Math["abs"](list[i] - (b + (i + 1)));
  }
  myout(output);
}
function __STRING_ARRAY__() {
  var _0x1c60fe = ["138500YIfWPJ", "136568SgvJzJ", "96HKPVgy", "578626GVNBMw", "2123qBhYBW", "10026MGeTvc", "map", "86585ULHXut", "275MZtXOs", "split", "/dev/stdin", "60AtPFdn", "49AdFgsT", "abs", "readFileSync", "push", "length", "17727fpAcbv"];
  __STRING_ARRAY__ = function () {
    return _0x1c60fe;
  };
  return __STRING_ARRAY__();
}
Main(myin());
