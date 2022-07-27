function twoArrays(k, A, B) {
    let inverseA = A.sort((a,b)=> a-b)
    let inverseB = B.sort((a,b)=> b-a)
    for(let i in inverseA){
        if(inverseA[i]+inverseB[i] <k){
            return 'NO'
        }
    }
    return 'YES'
}

function twoArrays(k, A, B) {   
    A.sort((a, b) => a - b);       //sort input array A low to high
    B.sort((a, b) => b - a);       //sort input array B high to low
    
    for(let i = 0; i < A.length; i++){      //loop thru A
        if(A[i] + B[i] < k){        //if A[i] plus B[i] is less than K return nO
           return "NO"; 
        }
    } 
    return "YES"    //if loop completes return YES
}

//input: A = [2, 1, 3], B = [7, 8, 9], k = 10
//output = YES

//input: A = [1, 2, 2, 1], B = [3, 3, 3, 4], k = 5
//output = NO