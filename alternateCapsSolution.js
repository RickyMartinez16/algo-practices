//-------not working-------//

function capitalize(s){

    let a1 = s.split("").filter((x, i)=>i%2==0)
    let a2 = s.split("").filter((x, i) => i % 2 !=0)
    console.log(a1)
  //   for(let i = 0; i < s.length; i++){
  //     if(s[i] != s[i].toUpperCase()){
  //       a1.push(s[i].toUpperCase())
  //     }
  //   }
  };


//--------workinng--------//

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");  //split the string into an array. map the array taking letter and index. if index is not divisible by 2 make it uppercase. if is take letter as is. then join
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };