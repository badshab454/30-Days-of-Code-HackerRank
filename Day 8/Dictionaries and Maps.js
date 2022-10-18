function processData(input){
    //Enter your code here
    const inputArr = input.split("\n");
    const index = parseInt(inputArr[0]);
    const phonebook = [];
    

    for (let i = 0; i< index; i++){
        let line = inputArr[i+1];
        line = line.split(' ');
        phonebook[line[0]] = line[1]
    }
    
    for(let i = index+1; i < inputArr.length; i++) {
        if(phonebook[inputArr[i]]) {
            console.log(inputArr[i] + '=' + phonebook[inputArr[i]]);
        } else {
            console.log('Not found')
        }
    }
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