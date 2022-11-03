function sumStr(a, b) {
  if (!a && b) {            //if no a but b is truthy
    a = 0;      //make a to 0 
    return String(parseInt(a) + parseInt(b));       //add them and then stringy them
  } else if (!b && a) {
    b = 0;
    return String(parseInt(a) + parseInt(b));
  } else if (!a && !b) {
    return "0";
  } else {
    return String(parseInt(a) + parseInt(b));
  }
}
