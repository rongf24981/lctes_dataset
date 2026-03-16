(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("30kOZShF") / 1 * (-parseInt("1756wdEsgd") / 2) + parseInt("1195263wSMjEc") / 3 + -parseInt("4932xZLRhL") / 4 * (parseInt("585loMecB") / 5) + -parseInt("6KmeKgG") / 6 * (parseInt("6859727ElBoQz") / 7) + -parseInt("8467256ZuFFRk") / 8 + -parseInt("192618vjskHm") / 9 * (-parseInt("550vQIcrb") / 10) + parseInt("14231767SBKpUP") / 11 * (parseInt("12hPRiSf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 713039);
function __DECODE_0__(EVDmRE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 109;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EVDmRE, key);
}
function main(input) {
  let tmp = input["split"]("\n");
  let vacations = [];
  for (let i = 1; i < tmp["length"]; i++) {
    let vacation = tmp[i]["split"](" ")["map"](element => parseInt(element, 10));
    vacations.push(vacation);
  }
  let dp = [0, 0, 0];
  for (let day = 0; day < vacations["length"]; day++) {
    let vacation = vacations[day];
    let new_dp = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== j) {
          new_dp[j] = Math.max(new_dp[j], dp[i] + vacation[j]);
        }
      }
    }
    dp = new_dp;
  }
  console["log"](Math.max(dp[0], dp[1], dp[2]));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x40dd68 = ["/dev/stdin", "6KmeKgG", "map", "log", "550vQIcrb", "4932xZLRhL", "192618vjskHm", "readFileSync", "split", "length", "12hPRiSf", "585loMecB", "8467256ZuFFRk", "30kOZShF", "14231767SBKpUP", "1195263wSMjEc", "6859727ElBoQz", "1756wdEsgd"];
  __STRING_ARRAY__ = function () {
    return _0x40dd68;
  };
  return __STRING_ARRAY__();
}
