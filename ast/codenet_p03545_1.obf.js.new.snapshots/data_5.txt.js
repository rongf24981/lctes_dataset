'use strict';

var lines = require("fs")["readFileSync"](0, "utf8").split("\n");
var str = lines[0];
var n = str["length"] - 1;
var dfs = (i, sum, order) => {
  if (i === n) {
    if (eval(order + str[n]) == 7) {
      return order + str[n];
    } else {
      return "";
    }
  }
  var temp = dfs(i + 1, sum, order + str[i] + "+");
  if (temp) {
    return temp;
  } else {
    return dfs(i + 1, sum, order + str[i] + "-");
  }
};
var ans = dfs(0, 0, "");
console["log"](ans ? ans + "=7" : "");
