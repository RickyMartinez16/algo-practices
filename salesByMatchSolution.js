function sockMerchant(n, ar) {
  let pairs = 0;
  const maps = new Map();
  for (let i = 0; i < ar.length; i++) {
    if (maps.has(ar[i])) {
      maps.delete(ar[i]);
      pairs++;
    } else {
      maps.set(ar[i]);
    }
  }
  return pairs;
}
