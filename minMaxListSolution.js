var min = function(list){
    
    return list.sort(function(a, b){return a-b}).shift()
}

var max = function(list){
    
    return list.sort(function(a, b){return a-b}).pop()
}