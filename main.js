class Shape {
    #shapeName;

    constructor(shapeName) {
        this.#shapeName = shapeName
    }

    get area() {

    }

    get perimeter() {

    }

    get getShapeName() {
        return this.#shapeName
    }

    set setShapeName(shapeName) {
        this.#shapeName = shapeName
    }
}

//------------------------q1-2---------------------
class Polygon extends Shape {
    #width;
    #height;

    constructor(shapeName, width, height) {
        super(shapeName)
        this.#width = width
        this.#height = height
    }

    set setWidth(width) {
        this.#width = width
    }

    get getWidth() {
        return this.#width
    }

    set setHeight(height) {
        this.#height = height
    }

    get getHeight() {
        return this.#height
    }

    get area() {
        return this.#width * this.#height
    }

    get perimeter() {
        return (this.#width + this.#height) * 2
    }
}

//---------------------q1-3----------------------
class NonPolygon extends Shape {
    #radius

    constructor(shapeName, radius) {
        super(shapeName)
        this.#radius = radius
    }

    get getRadius() {
        return this.#radius
    }

    set setRadius(radius) {
        this.#radius = radius
    }

    get area() {
        return this.#radius * this.#radius * Math.PI
    }

    get perimeter() {
        return 2 * Math.PI * this.#radius
    }
}

//----------------------q1-4---------------------
class RectAngle extends Polygon {
}

class Square extends Polygon {
    constructor(shapeName, width) {
        super(shapeName, width, width)
    }
}

//-----------------------q1-5-----------------------
class Circle extends NonPolygon {

}

//-----------------------q1-6-----------------------
class Cylindrical extends Circle {
    #height;

    constructor(shapeName, radius, height) {
        super(shapeName, radius);
        this.#height = height;
    }

    set setHeight(height) {
        this.#height = height;
    }

    get getHeight() {
        return this.#height;
    }

    get area() {
        return super.perimeter * this.#height;
    }

    get perimeter() {
        return super.area * this.#height
    }
}

//----------------------------q1-7------------------------
const form = document.querySelector("form");
const shapes = document.getElementById("shapes");
const radius = document.getElementById("radius");
const width = document.getElementById("width");
const height = document.getElementById("height");
const perimeter = document.getElementById("perimeter");
const area = document.getElementById("area");


let shapeName;

form.addEventListener("change", event => {
    if (event.target.id === "shapes") {
        shapeName = event.target.value;
        if (shapeName === "circle") {
            radius.value = "";
            height.value = "";
            width.value = "";
            height.disabled = true;
            width.disabled = true;
            radius.disabled = false;
        } else if (shapeName === 'square') {
            radius.value = "";
            height.value = "";
            width.value = "";
            height.disabled = true;
            width.disabled = false;
            radius.disabled = true;
        } else if (shapeName === 'rectangle') {
            radius.value = "";
            height.value = "";
            width.value = "";
            height.disabled = false;
            width.disabled = false;
            radius.disabled = true;
        } else if (shapeName === 'cylindrical') {
            radius.value = "";
            height.value = "";
            width.value = "";
            height.disabled = false;
            width.disabled = true;
            radius.disabled = false;
        }
    }
    if (event.target.id === "radius" && shapeName === "circle") {
        const circle = new Circle('Circle', Number(radius.value))
        perimeter.innerHTML = circle.perimeter;
        area.innerHTML = circle.area;
    }
    if (event.target.id === "width" && shapeName === "square") {
        const square = new Square('Square', Number(width.value))
        perimeter.innerHTML = square.perimeter
        area.innerHTML = square.area
    }
    if (event.target.id === "height") {
        if (shapeName === "rectangle") {
            const rectangle = new RectAngle('RectAngle', Number(width.value), Number(height.value))
            perimeter.innerHTML = rectangle.perimeter
            area.innerHTML = rectangle.area
        }
        if (shapeName === "cylindrical") {
            const cylindrical = new Cylindrical('cylindrical', Number(radius.value), Number(height.value))
            perimeter.innerHTML = cylindrical.perimeter
            area.innerHTML = cylindrical.area
        }

    }

})


