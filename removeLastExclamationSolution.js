function remove (string) {
    if(string.charAt(string.length -1) === "!"){
      return string.slice(0, -1)
    }
    return string
  }