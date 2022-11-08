function check() {
    let result;
    let arr = [0];
    //get the number of inputs that user want to enter
    let num = +prompt("enter number of inputs");
    //check Whether the user has entered the number or not
    if (num) {
        // get input base on the prev step
        while (num > 0) {
            const getInput = +prompt("enter a number")
            arr.push(getInput)
            num--
        }

        //loop to check array is maghloob or not and loop to the middle of array
        for (let i = 1; i <= Math.ceil((arr.length-1)/2); i++) {
            console.log(i)
            if (arr.at(i) !== arr.at(-i)) {
                result = "Maghlob nist!!!"
                break;
            } else {
                result = "Maghlob hast"
            }

        }
        alert(result);
    } else {
        alert("you didnt enter a a valid number");
    }
    
}
check()
