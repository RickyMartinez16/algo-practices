function vertMirror(str) {
    return str.split('\n')  //split the input by the spaces.
      .map(line => line.split('').reverse().join(''))   //map the line. split each line then reverse it then join it again
      .join('\n')   //join the lines by the \
}
function horMirror(str) {
    return str.split('\n')  //rsplit the string by the \
      .reverse()        //reverse it 
      .join('\n')       //join it
}
function oper(fct, s) {     // takes which function as an input and a string inpit
    return fct(s)       //return the result of using that function on a string
}

//practice map