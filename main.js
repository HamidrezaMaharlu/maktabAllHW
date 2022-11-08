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
            arr.splice(index, 1)
        }
    })
}

let arrQ13 = [5, 3, 8, 1];
filterRangeInPlace(arrQ13, 1, 4); // removed the numbers except from 1 to 4
console.log(arrQ13); // [3, 1]

//---------------------------------q1-4----------------------------------
function Calculator() {
    return ({
        calc: {
            "+": (a, b) => a + b,
        },
        calculate(str) {
            //we can use split if we sure that always we have space
            //remove white space
            str = str.replace(/ /g, "");
            let arr = [];
            let operate = "";
            //loop over it to find the number and operator
            [...str].forEach(item => {
                if (isFinite(item)) {
                    arr.push(+item)
                }
                if (!isFinite(item)) {
                    operate += item
                }
            })
            //merge number and operator
            let [num1, num2] = arr
            return this.calc[operate](num1, num2)
        },
        addMethod(name, func) {
            this.calc[name] = func;
        }
    })

}

let calc = new Calculator;
// console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8

//--------------------------------q1-5-------------------------
let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // John Smith

//----------------------------q1-6-----------------------------

let johnn = {name: "John", age: 25};
let petee = {name: "Pete", age: 30};
let maryy = {name: "Mary", age: 29};
let arr = [johnn, petee, maryy];

function getAverageAge(arr) {
    return arr.reduce((acc, currentItem) => acc + currentItem.age, 0) / arr.length
}

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//-------------------------------q1-7-----------------------------

function getSecondsToday() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let result = now - today;
    console.log(`pass Seconds: ${result / 1000}`)
    console.log(`pass Hours: ${new Date(result).getUTCHours()} hours`)
    console.log(`pass Minutes: ${new Date(result).getUTCMinutes()} minutes`)
}

// getSecondsToday() // (3600 * 10)

//-------------------------------q1-8-------------------------------
function formatDate(date) {
    let dateMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let differenceInMs = new Date() - date;
    let differenceSec = Math.round(differenceInMs / 1000);
    let differenceMin = differenceSec / 60;
    let differenceHour = differenceMin / 60;

    // add 0 to month date hour and min which are 1 digit for yesterday
    month = month < 10 ? '0' + month : month;
    dateMonth = dateMonth < 10 ? '0' + dateMonth : dateMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (differenceSec < 1) {
        return 'right now';
    } else if (differenceMin < 1) {
        return `${differenceSec} sec. ago`
    } else if (differenceHour < 1) {
        return `${differenceMin} min. ago`
    } else {
        return `${dateMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

// console.log( formatDate(new Date(new Date - 1)) ); // "right now"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5min. ago"
// yesterday's date like 31.12.16 20:00
// console.log( formatDate(new Date(new Date - 86400 * 1000)) );

//----------------------------------q1-9------------------------
function printNumbers(from, to) {
    const intervalId = setInterval(() => {
        console.log(from);
        from++
        if (from === to+1) {
            clearInterval(intervalId)
        }

    }, 1000)

}
function printNumbersSettimeOut(from,to) {
    setTimeout(function show() {
        console.log(from)
        from++
        const setTimeOutIdInner=setTimeout(show,1000)
        if (from === to+1) {
            clearTimeout(setTimeOutIdInner)
        }

    },1000)
}

// printNumbers(1, 5)
// printNumbersSettimeOut(7, 8)