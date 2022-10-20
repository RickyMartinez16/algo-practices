var number = function (busStops) {
  var totalPeople = 0;  //start a people counter
  for (var i = 0; i < busStops.length; i++) {       //loop thru the inputs
    totalPeople += busStops[i][0];      //add the first number of each pair to total people
    totalPeople -= busStops[i][1];      //subtract the srcond number of each pair to total people
  }
  return totalPeople;
};
