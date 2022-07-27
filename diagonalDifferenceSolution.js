
function diagonalDifference(arr) {
    
    let principalDiagonal = 0;    //set principal diagonal var to 0
    let secondaryDiagonal = 0;    //set second diaognal var to 0
    
    for (let i = 0; i < arr.length; i++){       //outerloop checks the row
        for (let j = 0; j < arr.length; j++){      //inner loop checks colum. each element.    inner loop runs to completion before outer loop runs again
            //Condition for principalDiagonal
            //The row-column condition is row = column. 
            if(i == j){                     //if row index [i] equals the colum index [j]
                let element = arr[i][j];        //you have the element  [i][j] (row and columun)
                principalDiagonal += element;       //+= to principalDiagonal 
            }
            //Condition for secondaryDiagonal
            //The row-column condition is row = numberOfRows - column - 1
            if((i + j) == (arr.length - 1)){        //if row index[i] plus colu, index [j] equals array length - 1
                let element = arr[i][j];            //you have the element  [i][j] (row and columun)
                secondaryDiagonal += element;       //+= to secondaryDiagonal 
            }
        }
    }
    
    return Math.abs(principalDiagonal - secondaryDiagonal);   //math.abs returns postive number no matter what of the two digaonals
    
}