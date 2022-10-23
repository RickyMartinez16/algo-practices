String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
  };


  String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }