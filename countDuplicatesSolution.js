//------not working-----//

function duplicateCount(text) {
  let upperCaseText = text.toUpperCase();
  let splitText = upperCaseText.split("");
  let count = 0;
  for (let i = 0; i < splitText.length; i++) {
    for (let k = i + 1; k < splitText.length; k++) {
      if (splitText[i] === splitText[k]) {
        count++;
        console.log(count);
      }
    }
  }
  return count;
}

//------working-----//

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }