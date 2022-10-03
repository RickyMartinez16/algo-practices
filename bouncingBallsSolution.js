function bouncingBall(h,  bounce,  window) {
    // Qualify the condition that must be met
    const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;
    // Check the condition
    if (cond) {
        // If condition is met, the ball will be seen once going up...
        // And once coming down, as well as the first time its dropped
        return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
    } else {
        // If condition is not met, per instructions, return -1
        return -1;
    }
}


//-----best prac----//

function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1  //if the conditions arent met return -1
    let seen = 0;    //count variable
    
    while(h > window){      //while the hieight is greater than the window
      seen += 1     //add one to seen var
      h *= bounce       //height is times bounce
      if(h > window) seen += 1      //if the height is greater than the windpw add one to seen
    }
    
    return seen;
  }