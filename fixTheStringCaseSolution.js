//not working//

function solve(s) {
  let uppercase = s.match(/^[A-Z]/g);
  console.log(uppercase);
  let lowercase = s.match(/^[a-a]/g);
  console.log(lowercase);
  if (uppercase && lowercase) {
    if (uppercase.length > lowercase.length) {
      var modified = s.replace(/^[A-Z]/g, function (match) {
        return match.toLowerCase();
      });
    }
  }
  if (uppercase && lowercase) {
    if (uppercase.length < lowercase.length) {
      var modified = s.replace(/^[a-z]/g, function (match) {
        return match.toUpperCase();
      });
    }
  }
  if (uppercase.length === lowercase.length) {
    return s.toLowerCase();
  }
}
