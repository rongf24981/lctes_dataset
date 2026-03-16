(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1103511HlLtbi") / 1 + -parseInt("8634aPDiCA") / 2 * (-parseInt("129SjfwKr") / 3) + -parseInt("597348BQtrBt") / 4 + parseInt("165nhTJcg") / 5 * (-parseInt("327372SVkmeN") / 6) + parseInt("10893841cpLBEL") / 7 + -parseInt("10791200HyXWwK") / 8 + parseInt("27IzGtmP") / 9 * (parseInt("4750670NvpfAK") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 971823);
function Main(input) {
  var S = input["split"]("");
  var Slong = S.length;
  var Muki = ">";
  var Out = 1;
  var V = [];
  var Left = 0;
  var Right = 0;
  var Sum = 0;
  for (var i = 0; i < Slong; i++) {
    if (S[i] == Muki) {
      if (Muki == ">") {
        Left++;
      } else {
        Right++;
      }
      Out = 0;
    } else if (Muki == "<") {
      V["push"]({
        L: Left,
        R: Right
      });
      Muki = ">";
      Left = 0;
      Right = 0;
      Left++;
      Out = 1;
    } else {
      Muki = "<";
      Right++;
      Out = 0;
    }
  }
  if (Out == 0) {
    V["push"]({
      L: Left,
      R: Right
    });
  }
  for (var i = 1; i < V["length"]; i++) {
    if (V[i - 1].R < V[i].L) {
      V[i - 1].R--;
    } else {
      V[i].L--;
    }
  }
  for (var i = 0; i < V["length"]; i++) {
    Sum += V[i].L * (V[i].L + 1) / 2;
    Sum += V[i].R * (V[i].R + 1) / 2;
  }
  console["log"](Sum);
}
function __STRING_ARRAY__() {
  var _0x5a5c62 = ["10791200HyXWwK", "327372SVkmeN", "10893841cpLBEL", "129SjfwKr", "push", "597348BQtrBt", "length", "27IzGtmP", "utf8", "4750670NvpfAK", "log", "8634aPDiCA", "split", "165nhTJcg", "1103511HlLtbi", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x5a5c62;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rtKTwQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 198;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rtKTwQ, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
