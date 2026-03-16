(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1hhJPSU") / 1 * (parseInt("2085380VLvcfH") / 2) + parseInt("1403277yWQtQL") / 3 + parseInt("2110288aolFEN") / 4 + parseInt("8045RDUOZD") / 5 * (-parseInt("3048XDrtMd") / 6) + -parseInt("2829323pxRWNb") / 7 * (parseInt("16vKjSDV") / 8) + parseInt("3518226mpNClJ") / 9 + -parseInt("2615350dfZgOA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 541650);
function __STRING_ARRAY__() {
  var _0xaaaaea = ["utf8", "1403277yWQtQL", "8045RDUOZD", "2615350dfZgOA", "3518226mpNClJ", "log", "2085380VLvcfH", "2829323pxRWNb", "split", "3048XDrtMd", "1hhJPSU", "2110288aolFEN", "16vKjSDV"];
  __STRING_ARRAY__ = function () {
    return _0xaaaaea;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  lines = input["split"]("\n");
  firstLine = lines[0]["split"](" ");
  N = +firstLine[0];
  X = +firstLine[1];
  secondLine = lines[1]["split"](" ");
  distanceTravelled = 0;
  numBounces = 1;
  for (i = 0; i < N; i++) {
    distanceTravelled += +secondLine[i];
    if (distanceTravelled <= X) {
      numBounces += 1;
    }
  }
  console["log"](numBounces);
}
function __DECODE_0__(ZFBXio, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 128;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZFBXio, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
