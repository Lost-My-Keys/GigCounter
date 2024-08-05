// //document.getElementById("count").innerText = 5;
let countEl = document.getElementById("count-el");
let countSave = document.getElementById("save-el");
console.log(countEl);
let totalPeople = 0;
let count = totalPeople;
let previousNumber = 0


function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}
function save() {
    let totalNumber = previousNumber + count

    console.log("Total Number " + totalNumber)
    console.log("previous number " + previousNumber)
    console.log("count " + count)
    
    countSave.innerText = totalNumber
    previousNumber = totalNumber
    count = 0
    countEl.innerText = count

    console.log("Total Number " + totalNumber)
    console.log("previous number " + previousNumber)
    console.log("count " + count)
}

function reset() {
    count = 0
    totalNumber = 0
    previousNumber = 0
    countSave.innerText = totalNumber
    countEl.innerText = count
}
