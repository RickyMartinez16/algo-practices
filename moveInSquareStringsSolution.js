function vertMirror(str) {
    return str.split('\n')  //split the input by the spaces.
      .map(line => line.split('').reverse().join(''))   //map the line. split each line then reverse it then join it again
      .join('\n')   //join the lines by the \
}
function horMirror(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}