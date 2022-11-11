function minValue(values) {
  let set = new Set();
  values.forEach((number) => set.add(number));
  let sorted = [...set].sort(function (a, b) {
    return a - b;
  });
  return Number(sorted.join(""));
}
