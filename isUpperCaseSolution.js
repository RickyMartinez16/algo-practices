String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);     //test if this string is not lowercase
  };


  String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }