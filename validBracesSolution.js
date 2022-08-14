function validBraces(braces) {
  let stack = [];
  return (
    braces
      .split("")
      .map((brace) => {
        if ("({[".indexOf(brace) >= 0) {
          stack.push(brace);
          return true;
        } else {
          let e = stack.pop();
          return "({[".indexOf(e) == ")}]".indexOf(brace);
        }
      })
      .every((brace) => brace) && stack.length == 0
  );
}
