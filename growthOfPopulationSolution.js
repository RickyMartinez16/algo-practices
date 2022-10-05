function nbYear(p0, percent, aug, p, years = 0) {
  return p0 >= p //if p0 is equal to or greater than p return years(set to 0 in input)
    ? years //if not recursive function run it again
    : nbYear(
        Math.floor(p0 + p0 * (percent / 100)) + aug, //round down for p0
        percent, //percent
        aug, //aug
        p, //p
        years + 1 //years plus 1
      );
}

//easier to read//

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {        //loop thru while p0 is less than p
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);       //change the p0 and check again
  }
  return years;
}

//can also use while loop?? ^^^ 