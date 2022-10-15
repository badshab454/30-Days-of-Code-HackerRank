process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);
    let result = '';
    if (N % 2 === 0) {
        (N >= 6 && N <= 20) ? result = 'Weird' : result = 'Not Weird';
    } else {
        result = 'Weird'
    }
    console.log(result);
}