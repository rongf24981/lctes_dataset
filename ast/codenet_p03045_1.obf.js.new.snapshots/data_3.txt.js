(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1CBRAyg") / 1 * (parseInt("411296qzazzg") / 2) + parseInt("687279IhLaiI") / 3 + -parseInt("533908mFjNfY") / 4 + parseInt("15gIlhHr") / 5 * (parseInt("317940UPoBhS") / 6) + -parseInt("813631xiqmuh") / 7 + -parseInt("336968VeWTcd") / 8 + -parseInt("9BQypPS") / 9 * (-parseInt("2418710ddtsiH") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 132455);
function Main(input) {
  input = input.split("\n");
  if (input[input["length"] - 1] === "") {
    input.pop();
  }
  const N = input[0].split(" ")[0] - 0;
  const M = input[0]["split"](" ")[1] - 0;
  var parent = new Array(N + 1)["fill"](0);
  for (var i = 1; i <= M; i++) {
    if (root(input[i].split(" ")[0] - 0) !== root(input[i]["split"](" ")[1] - 0)) {
      parent[root(input[i]["split"](" ")[1] - 0)] = root(input[i]["split"](" ")[0]) - 0;
    }
  }
  console["log"](parent.reduce((acc, cur) => {
    return acc + (cur === 0 ? 1 : 0);
  }, 0) - 1);
  function root(node) {
    var array = [];
    var point = node;
    while (parent[point] !== 0) {
      array["push"](point);
      point = parent[point];
    }
    array["forEach"](e => {
      parent[e] = point;
    });
    return point;
  }
}
function __STRING_ARRAY__() {
  var _0x303608 = ["317940UPoBhS", "readFileSync", "split", "533908mFjNfY", "1CBRAyg", "411296qzazzg", "length", "687279IhLaiI", "2418710ddtsiH", "813631xiqmuh", "push", "fill", "15gIlhHr", "336968VeWTcd", "9BQypPS", "log", "forEach"];
  __STRING_ARRAY__ = function () {
    return _0x303608;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bagKqu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 188;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bagKqu, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
