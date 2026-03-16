(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("7607NSguBJ") / 1 * (-parseInt("6kgOljq") / 2) + parseInt("169461NSGmXN") / 3 + parseInt("51292OsMGNQ") / 4 * (parseInt("15vgaGYL") / 5) + -parseInt("1069590cufBYA") / 6 + -parseInt("1321173Jktsdt") / 7 + parseInt("635856ASgAWx") / 8 + parseInt("27sgiIhq") / 9 * (parseInt("1111640sOhKdy") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 118105);
const mod = 1000000007;
function __STRING_ARRAY__() {
  var _0x63f1d8 = ["51292OsMGNQ", "635856ASgAWx", "split", "trim", "15vgaGYL", "utf8", "1069590cufBYA", "27sgiIhq", "7607NSguBJ", "/dev/stdin", "169461NSGmXN", "readFileSync", "6kgOljq", "1321173Jktsdt", "1111640sOhKdy"];
  __STRING_ARRAY__ = function () {
    return _0x63f1d8;
  };
  return __STRING_ARRAY__();
}
function pow(x, y) {
  var r = 1;
  for (var i = 1; i <= y; i++) {
    r = r * x % mod;
  }
  return r;
}
;
function __DECODE_0__(OcNnAu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 314;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OcNnAu, key);
}
function Main(input) {
  const [N] = input["trim"]()["split"](" ").map(x => parseInt(x));
  var count = pow(10, N) - pow(9, N) * 2 + pow(8, N);
  count = count % mod;
  count = (count + mod) % mod;
  console.log(count);
}
;
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
