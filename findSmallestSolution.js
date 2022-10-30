class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallArray = args.sort((a, b) => a - b);      //sort the array
      return smallArray[0]  //return first index of small array
    }
  }