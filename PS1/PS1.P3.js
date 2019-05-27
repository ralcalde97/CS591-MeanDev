const execFun = (string, func) => func(string);

console.log(execFun('supercalifragilisticexpialidocious', string => string.split(/(?=c)/)));
console.log(execFun('supercalifragilisticexpialidocious', string => obj = {
    originalString: string,
    modifiedString: string.replace(/a/g, 'A'),
    numberReplaced: (string.replace(/a/g, 'A')).split(/A/g).length - 1,
    length: (string.replace(/a/g, 'A')).length

}));
