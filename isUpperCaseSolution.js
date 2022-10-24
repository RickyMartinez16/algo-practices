String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);     //test if this string is not lowercase
  };


  String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();  //returns true if this string to uppercase is the same as this string
  }