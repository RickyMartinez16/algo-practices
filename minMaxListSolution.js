var min = function(list){
    
    return list.sort(function(a, b){return a-b}).shift()        //sort the array then get the first
}

var max = function(list){
    
    return list.sort(function(a, b){return a-b}).pop()          //sort the array then get the last
}