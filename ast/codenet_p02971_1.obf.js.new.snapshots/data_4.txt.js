'use strict';

function main(arg) {
  var input = arg["split"]("\n");
  var retu = input[0];
  var kazu = [];
  for (var i = 1; retu >= i; i++) {
    kazu["push"](input[i]);
  }
  for (var x = 0, len = kazu.length; x < len; ++x) {
    var kazu2 = kazu["slice"](0, kazu["length"]);
    kazu2["splice"](x, 1);
    console["log"](Math["max"]["apply"](null, kazu2));
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
