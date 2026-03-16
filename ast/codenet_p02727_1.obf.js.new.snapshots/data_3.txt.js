function __DECODE_0__(aJHMTM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 269;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aJHMTM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1217037nhRNWD") / 1 + -parseInt("305542iVAdej") / 2 + -parseInt("5175441TLacbP") / 3 + -parseInt("6381704RNifwi") / 4 + parseInt("60BmhRZH") / 5 * (parseInt("321534kWhENY") / 6) + parseInt("102137RvOBap") / 7 * (parseInt("280yBJslf") / 8) + parseInt("39630807ApBrTc") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 866795);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x3b2e30 = ["6381704RNifwi", "102137RvOBap", "reduce", "map", "/dev/stdin", "split", "utf8", "60BmhRZH", "5175441TLacbP", "321534kWhENY", "1217037nhRNWD", "280yBJslf", "sort", "305542iVAdej", "log", "readFileSync", "slice", "length", "39630807ApBrTc"];
  __STRING_ARRAY__ = function () {
    return _0x3b2e30;
  };
  return __STRING_ARRAY__();
}
var lines = input["split"]("\n");
const parse = (s, sep) => {
  return s["split"](sep)["map"](v => parseInt(v));
};
const split = (s, sep, result, keys) => {
  var arr = parse(s, sep);
  for (var i = 0; i < arr["length"]; i++) {
    result[keys[i]] = arr[i];
  }
};
var inp = {};
split(lines[0], " ", inp, ["x", "y", "a", "b", "c"]);
var p = parse(lines[1], " ")["sort"]((a, b) => b - a);
var q = parse(lines[2], " ")["sort"]((a, b) => b - a);
var r = parse(lines[3], " ")["sort"]((a, b) => b - a);
p = p.slice(0, inp.x);
q = q["slice"](0, inp.y);
console["log"](p.concat(q, r).sort((a, b) => b - a)["slice"](0, inp.x + inp.y)["reduce"]((a, b) => a + b, 0));
