function sumStr(a, b) {
  if (!a && b) {
    a = 0;
    return String(parseInt(a) + parseInt(b));
  } else if (!b && a) {
    b = 0;
    return String(parseInt(a) + parseInt(b));
  } else if (!a && !b) {
    return "0";
  } else {
    return String(parseInt(a) + parseInt(b));
  }
}
