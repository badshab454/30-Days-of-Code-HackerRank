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
    // YOU CAN DEFINE THE DIMENSION ARRAY IN HERE SO IT WILL WORK FOR ANOTHER ARRAY DIMENSION. AS EXAMPLE CHANGE VALUE 6 TO 7 FOR 7X7 DIMENSION
let arr = Array(6);

    for (let i = 0; i <6; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
}
sumHourglassMaker(arr);    
    } 

    function sumHourglassMaker(arrayRaw){
var arrayHourglassSum = [];
for(var v = 0 ; v < arrayRaw.length - 2 ; v++){
    for(var h = 0 ; h < arrayRaw.length - 2; h++){            
    //take the upper hourglass
    let upperHead = arrayRaw[v][h] + arrayRaw[v][h+1] + arrayRaw[v][h+2];
    //take the middle hourglass (belly)
    let middleBelly = arrayRaw[v + 1][h+1];
    //take the bottom hourglass
    let bottomLeg =  arrayRaw[v+2][h] + arrayRaw[v+2][h+1] + arrayRaw[v+2][h+2];
    arrayHourglassSum.push(upperHead+ middleBelly + bottomLeg);
    }
}               







console.log(Math.max(...arrayHourglassSum));
}
}