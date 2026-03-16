new Promise(function (resolve, reject) {
  let cin = "";
  process["stdin"].on("data", chunk => {
    cin += chunk;
  }).on("end", () => {
    resolve([cin, process["stdout"]]);
  });
})["then"](function ([cin, cout]) {
  for (const b of cin.split(/[ \n]/).map(elt => parseInt(elt))) {
    if (b === 0) {
      break;
    }
    let opt = "\n";
    for (let m = 1; m * (m - 1) < b * 2; ++m) {
      const det = b * 2 - m * (m - 1);
      if (det % (m * 2) === 0) {
        opt = det / (m * 2) + " " + m + "\n";
      }
    }
    cout["write"](opt);
  }
});
