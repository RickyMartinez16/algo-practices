function contact(hallway) {
    const gaps = hallway.match(/>-*</g)     //match the gaps
    return !gaps ? -1 : Math.min(...gaps.map(s=>s.length)) >> 1     //if no matches return -1 else return min of spread gaps.map array
  }