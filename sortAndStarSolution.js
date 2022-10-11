function twoSort(s) {
  console.log(s.sort());
  let sorted = s.sort();
  let first = sorted[0];

  let firstSplit = first.split("");

  let final = firstSplit.join("***");

  return final;
}
