// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//not working

function switcheroo(x){
    return x.split("").reverse().join("")
  }


//working

function switcheroo(x){
    return x.split('').map(function(e){     //split the input to make an array then map thru the array
      //if the e (letter) is b return a to new map (this changes the order)
      if (e =='b')return 'a';
      //if the letter is a return b
      if (e == 'a') return 'b';
      //if the letter is c leave it alone
      if(e=='c') return 'c'
      //join the map
    }).join('');
  }