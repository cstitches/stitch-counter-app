// variables for all needed HTML elements
const countEl = document.getElementById("count-el");
const incBtn = document.getElementById("increment-btn");
const decBtn = document.getElementById("decrement-btn");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const saveTxt = document.getElementById("save-text");
const saveTotal = document.getElementById("save-total");

// initialize count as 0
let count = 0;
let total = 0;


// increment function
// when increment button clicked, should increase count by 1
function increment() {
    count += 1;
    countEl.textContent = count;
}

// decrement function
// when decrement button clicked, should decrease count by 1
function decrement() {
    count -= 1;
    countEl.textContent = count;
}

// save progress function
// when save button clicked, should write current count to paragraph and reset counter to 0
function saveProg() {
    // each save
    saveTxt.textContent += count + " - ";
    // total save
    total += count;
    saveTotal.textContent = total;
    // reset for next count
    count = 0;
    countEl.textContent = count;
}

// clear progress function
// when clear button clicked, should reset 
function clearProg() {
    count = 0;
    countEl.textContent = count;
    saveTxt.textContent = "";
    saveTotal.textContent = "";
}

