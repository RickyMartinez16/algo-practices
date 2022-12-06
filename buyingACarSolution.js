function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    var months = 0, moneySaved = 0;     //make var for months count and money saved
      while (startPriceNew > startPriceOld + moneySaved){   //while the new pirce is greater than the old price plis the money svae
          moneySaved += savingperMonth; //money saved = plus the savings per month
          startPriceOld -= (startPriceOld * (percentLossByMonth / 100));    //the old price start is now loss / 100 times old price
          startPriceNew -= (startPriceNew * (percentLossByMonth / 100));    //the new price is now minus the loss / 100 times new price
          months++;     //add one to the months var
          if (months % 2 == 1){     //if months is not an even number
              percentLossByMonth += .5;     //the percent loss increases by .5
          }
      }
      return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];  //reutnr the months and round the old pirce plus the money saved minus the new price
  }