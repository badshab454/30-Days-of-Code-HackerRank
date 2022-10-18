function processData(input){
    //Enter your code here
}

processData.stdin.resume();
process.stdin.setEncodint("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});