module.exports = function toReadable(number) {

    if (number === 0)
    {
        return 'zero';
    }
    let localNumber = ('' + number).split('').reverse();

    let functions = [getUnitsName, getDozensName, getHundredsName];

    let resultArray = [];
    localNumber.forEach((digit, index) => {
        if (digit !== '0') {
            if (index == 1 && digit === '1') {
                let units = resultArray.shift();
                resultArray.unshift(getUnder20Name(localNumber[0]));
            }
            else {
                resultArray.unshift(functions[index](digit));
            }
        }
    });

    console.log(resultArray);
    return resultArray.join(' ').trim();
}

function getUnitsName(number) {
    switch (number) {
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';

        default: return '';
    }
}

function getUnder20Name(number) {
    switch (number) {
        case '0': return 'ten';
        case '1': return 'eleven';
        case '2': return 'twelve';
        case '3': return 'thirteen';
        case '4': return 'fourteen';
        case '5': return 'fifteen';
        case '8': return 'eighteen';
        case '6':
        case '7':
        case '8':
        case '9': return getUnitsName(number) + 'teen';
        default: return '';
    }
}

function getDozensName(number) {
    switch (number) {
        case '2': return 'twenty';
        case '3': return 'thirty';
        case '4': return 'forty';
        case '5': return 'fifty';
        case '8': return 'eighty';
        case '6':
        case '7':
        case '9': return getUnitsName(number) + 'ty';
        default: return '';
    }
}

function getHundredsName(number) {
    return getUnitsName(number) + ' hundred';
}
