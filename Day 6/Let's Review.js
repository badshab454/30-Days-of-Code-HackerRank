function processData(input) {
    //Enter your code here
    const stringArr = input.split('\n');
    for(let i = 1; i <= parseInt(stringArr[0]); i++ ) {
        let evenStr = '';
        let oddStr = '';
        for(let j = 0; j < stringArr[i].length; j++ ) {
            (j % 2 === 0) ? evenStr += stringArr[i][j] : oddStr += stringArr[i][j];
        }
        console.log(`${evenStr} ${oddStr}`) 
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});