function __STRING_ARRAY__() {
  const _0x32846c = ["186178XynzBR", "log", "split", "4638160dgpztr", "3fNjooY", "40MIpBUl", "2024364JrQCYc", "trim", "764991FJPjtL", "2329663BBakKb", "170svSkAO", "21726BGxFML", "1396308vSbxma", "utf8", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x32846c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(YHdzhT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 293;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YHdzhT, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("3fNjooY") / 1 * (-parseInt("186178XynzBR") / 2) + parseInt("1396308vSbxma") / 3 + parseInt("2024364JrQCYc") / 4 + parseInt("170svSkAO") / 5 * (-parseInt("21726BGxFML") / 6) + -parseInt("2329663BBakKb") / 7 + -parseInt("40MIpBUl") / 8 * (parseInt("764991FJPjtL") / 9) + parseInt("4638160dgpztr") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 275158);
function Main(input) {
  input = input["trim"]()["split"]("\n");
  const N = parseInt(input[0]);
  const array = input[1]["split"](" ");
  const S = array[0];
  const T = array[1];
  let ans = "";
  for (let i = 0; i < N; ++i) {
    ans += S[i];
    ans += T[i];
  }
  console["log"](ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
