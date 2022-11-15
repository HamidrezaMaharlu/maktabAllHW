//1
const table = document.getElementById("age-table");
//2
const allLabel = table.querySelectorAll("label")
//3
const firstTd = table.querySelector("td");
//4
const formSearch = document.querySelector(`form[name="search"]`)
//5
const firstInput = formSearch.querySelector("input")
//6
const allInputs = formSearch.querySelectorAll("input")
const lastInput = allInputs[allInputs.length - 1];

//-------------------------q2-----------------------------------------