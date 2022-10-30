class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallArray = args.sort((a, b) => a - b);
      return smallArray[0]
    }
  }