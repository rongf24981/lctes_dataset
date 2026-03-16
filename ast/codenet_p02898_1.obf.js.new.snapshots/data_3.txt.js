'use strict';

function __DECODE_0__(qAhnCC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 171;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qAhnCC, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("137381UokrEx") / 1 + -parseInt("2DxWFfD") / 2 * (-parseInt("494313RLxBVt") / 3) + -parseInt("2632wtiWIb") / 4 * (-parseInt("255WgIlpJ") / 5) + -parseInt("426534LNkXBA") / 6 + parseInt("7EPdErj") / 7 * (parseInt("425032MgjmDg") / 8) + -parseInt("1947357tjBlik") / 9 + parseInt("15970aJcrXG") / 10 * (parseInt("242PKGvwy") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 136511);
function main(input) {
  let pass_friend_num = parseInt(input["split"]("\n")[0]["split"](" ")[0]);
  const pass_height = parseInt(input["split"]("\n")[0]["split"](" ")[1]);
  const friend_height_data = input["split"]("\n")[1]["split"](" ");
  for (let i = 0; i < friend_height_data["length"]; i++) {
    if (pass_height > parseInt(friend_height_data[i])) {
      pass_friend_num--;
    }
  }
  console["log"](pass_friend_num);
}
function __STRING_ARRAY__() {
  const _0x34666a = ["426534LNkXBA", "255WgIlpJ", "242PKGvwy", "split", "2DxWFfD", "425032MgjmDg", "2632wtiWIb", "readFileSync", "137381UokrEx", "log", "494313RLxBVt", "7EPdErj", "UTF-8", "/dev/stdin", "15970aJcrXG", "length", "1947357tjBlik"];
  __STRING_ARRAY__ = function () {
    return _0x34666a;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "UTF-8"));
