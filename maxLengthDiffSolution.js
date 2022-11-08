//------not working-------//

function mxdiflg(a1, a2) {
    if(a1 && a2){
      let item1 = a1[Math.floor(Math.random()*a1.length)];
      let item2 = a2[Math.floor(Math.random()*a2.length)];
      return Math.abs(item1.length - item2.length)
    } else if (a1 && !a2){
      let item1 = a1[Math.floor(Math.random()*a1.length)];
      return Math.abs(item1.length - -1)
    } else {
      let item2 = a2[Math.floor(Math.random()*a2.length)];
      return Math.abs(item2.length - -1)
    }
  }



//-----working----//