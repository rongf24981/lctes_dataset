(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1321970FflwvT") / 1 + parseInt("891142gpornp") / 2 * (parseInt("3sVBpKs") / 3) + parseInt("2204zOSYjL") / 4 * (-parseInt("4055hPBBOy") / 5) + -parseInt("8682984ahZKst") / 6 + parseInt("1850366XhsCRB") / 7 + -parseInt("792672vvksLx") / 8 + parseInt("6702912JIHZOP") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 783538);
config = {
  input: "/dev/stdin",
  newline: "\n"
};
line = require("fs")["readFileSync"](config["input"], "ascii")["split"](config["newline"]);
line[0] = line[0].split(" ")["map"](Number);
H = line[0][0];
function __STRING_ARRAY__() {
  var _0x1cfc6f = ["6702912JIHZOP", "ascii", "indexOf", "split", "%d %d", "slice", "input", "readFileSync", "map", "hasOwnProperty", "newline", "1321970FflwvT", "4055hPBBOy", "8682984ahZKst", "1850366XhsCRB", "2204zOSYjL", "891142gpornp", "792672vvksLx", "3sVBpKs", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1cfc6f;
  };
  return __STRING_ARRAY__();
}
W = line[0][1];
function __DECODE_0__(OvufkI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 183;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OvufkI, key);
}
field = line["slice"](1, 1 + H);
line[1 + H] = line[1 + H]["split"](" ")["map"](Number);
R = line[1 + H][0];
C = line[1 + H][1];
pat = line.slice(1 + H + 1, 1 + H + 1 + R);
mem = new Array(H);
for (i = 0; i < H; i++) {
  mem[i] = new Array(R);
  for (j = 0; j < R; j++) {
    mem[i][j] = {};
    k = field[i]["indexOf"](pat[j]);
    while (k !== -1) {
      mem[i][j][k] = true;
      k = field[i].indexOf(pat[j], k + 1);
    }
  }
}
for (i = 0; i <= H - R; i++) {
  for (j = 0; j <= W - C; j++) {
    flag = true;
    for (k = 0; k < R; k++) {
      if (!mem[i + k][k]["hasOwnProperty"](j)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log("%d %d", i, j);
    }
  }
}
