//-----not working-----//

function onePunch(items) {
  if (!items) {
    return "Broken!";
  } else {
    return items.split(" ").sort().join(" ").replace(/[ae]/gi, "");
  }
}


//best prqactice----//

const onePunch=(i)=>typeof i=== 'string' && i.length>0? i.split(` `).sort((a,b)=>a.localeCompare(b)).join` `.replace(/[ea]/gi,''):'Broken!'