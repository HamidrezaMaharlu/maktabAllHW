const user = {};

function generator(key) {
    return function (val) {
        this[key] = val;
        return this
    }
}


const nameSetter = generator("name").bind(user)
nameSetter("jack");
console.log(user)


//--------------solution 2----------------
function setterGenerator(obj, key) {
    return function (val) {
        function test() {
            this[key] = val;
        }
        return test.call(obj)
    }
}
 const nameSetter2 =setterGenerator(user,"name2")
nameSetter2("ali")
console.log(user)
