function wordsToMarks(str)
{
  var sum = 0;      //make a sum var
  for (let i = 0; i < str.length; i++)      //loop thru string
    sum += str.charCodeAt(i) - 96;      //sum equals plus charcode - 96
  return sum;       //return sum 
}