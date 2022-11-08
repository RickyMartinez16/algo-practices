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

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }