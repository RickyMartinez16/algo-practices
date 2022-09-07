function noSpace(x) {
  return x.replace(/\s+/g, "");
}


// JavaScript’s string.replace() method supports regular expressions (Regex) to find matches within the string. 
//There’s a dedicated Regex to match any whitespace character:\s.

// Combine this Regex to match all whitespace appearances in the string to ultimately remove them:

// const stripped = '    My String With A    Lot Whitespace  '.replace(/\s+/g, '')

// // 'MyStringWithALotWhitespace'
// Let’s look at the individual parts of the Regex and determine what they do:

// \s: matches any whitespace symbol: spaces, tabs, and line breaks
// +: match one ore more of the preceding tokens (referencing \s)
// g: the g at the end indicates iterative searching throughout the full string