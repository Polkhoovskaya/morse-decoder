const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let arrOfElements = [];
    let arrOfEncodedElements = [];
    let arrOfMorseCode = [];
    for (var i = 0; i < expr.length; i++) {
        let j = Math.trunc(i/10);
        arrOfElements[j] += expr[i];
    }
    arrOfElements.forEach(function(element){
        arrOfEncodedElements.push(element.replace(undefined , '')); 
    });

    arrOfEncodedElements.forEach(function(element){
        let code = '';
        for (let i = 0; i < element.length; i++){
            if (element[i] === '1' & element[i+1] === '0') {
                code = code + '.';
                i++;
                continue;
            } 
            if (element[i] === '1' & element[i+1] === '1') {
                code = code + '-';
                i++;
                continue;
            } 
            if (expr[i] === '*') {
                code = code + ' ';
                i+=10;
                continue;
            } 
        }
        arrOfMorseCode.push(code);
    });

    arrOfMorseCode.forEach(function(element){
        if (element == ''){
            result = result + ' ';
        } else {
            result = result + MORSE_TABLE[element];
        }     
    });

    return result;
}
module.exports = {
    decode
}