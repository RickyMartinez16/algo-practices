function validBraces(braces) {
  let stack = [];       // set a new stack
  return (
    braces
      .split("")        //split each brace into a new array    
      .map((brace) => {     //map over the new brace array
        if ("({[".indexOf(brace) >= 0) {       //
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
