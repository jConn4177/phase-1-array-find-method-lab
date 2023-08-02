const record = [
  {
    year: "2015",
    result: "W",
  },
  {
    year: "2014",
    result: "N/A",
  },
  {
    year: "2013",
    result: "L",
  },
];

function superbowlWin(record) {
  const winningYearObj = record.find((game) => game.result === "W");

  if (winningYearObj) {
    return winningYearObj.year;
  } else {
    return undefined;
  }
}
