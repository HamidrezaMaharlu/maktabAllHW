const user = {};

function generator(key) {
    return function (val) {
        this[key] = val;
        return this
    }
}


const nameSetter = generator("name").bind(user)
const ageSetter = generator("age").bind(user)
nameSetter("jack");
console.log(ageSetter(21));