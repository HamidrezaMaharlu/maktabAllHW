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

//----------------------------q1-2-----------------------------------------
//select the links
const externalLink = document.querySelectorAll(`a[href*="://"]:not([href^="http://internal.com"])`)
//loop over array and change style
externalLink.forEach(item => item.style.color = "orange")

//-----------------------------q1-3--------------------------------------
function makeList() {
    //make ul
    let ul = document.createElement('ul');
    //select sectionQ3 and append Ul to it
    document.querySelector(".Q3").append(ul);
    //while loop to get data from user with prompt
    while (true) {
        let data = prompt("Enter the text", "");
        if (!data) {
            break;
        }
        //make li
        let li = document.createElement('li');
        //use textContent to put it as a string
        li.textContent = data;
        ul.append(li);
    }
}

// makeList();

// ------------------------------q1-4-------------------------------