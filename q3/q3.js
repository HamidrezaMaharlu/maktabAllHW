//-----------------------------Q3---------------------
function counterMaker() {
    let count=0
    return function (val) {
        if (val) {
            count += val;
            return count;
        } else {
            return count
        }
    };
}
const counter = counterMaker()
console.log(counter())
counter(1)
counter(3)
counter(-5)
console.log(counter())