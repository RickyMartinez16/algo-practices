function validBraces(braces) {
  let stack = [];       // set a new stack
  return (
    braces
      .split("")        //split each brace into a new array    
      .map((brace) => {     //map over the new brace array
        if ("({[".indexOf(brace) >= 0) {       // if the index of brace is in "({[" it will return 0 or greater. if not it will return -1
          stack.push(brace);    //if it is true then push that brace onto the map
          return true;      //return true
        } else {    //else if it isnt in "({[" it will return -1
          let e = stack.pop();      // new variable e =  the pop() of the stack. so the last one on the stack.
          return "({[".indexOf(e) == ")}]".indexOf(brace);
        }
      })
      .every((brace) => brace) && stack.length == 0
  );
}
