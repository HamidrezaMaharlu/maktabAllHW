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
        for (let i = 1; i <= Math.ceil((arr.length - 1) / 2); i++) {
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

// check()
// --------------------------------q1-2---------------------------------
function filterRange(arr, min, max) {
    return arr.filter(item => item >= min && item <= max)
}

let arrQ12 = [5, 3, 8, 1];
let filtered = filterRange(arrQ12, 1, 4);
// alert(filtered); // 3,1 (matching values)
// alert(arrQ12); // 5,3,8,1 (not modified)

//---------------------------------q1-3---------------------------------
function filterRangeInPlace(arr, min, max) {
    arr.forEach((item, index) => {
        if (item < min || item > max) {
            arr.splice(index,1)
        }
    })
}

let arrQ13 = [5, 3, 8, 1];
filterRangeInPlace(arrQ13, 1, 4); // removed the numbers except from 1 to 4
console.log(arrQ13); // [3, 1]

//---------------------------------q1-4----------------------------------

