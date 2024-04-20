
let display = document.getElementById('display')

let show = (input) => {
    display.value += input;
}

// This is delete all once
let ClearAll = () => {
    display.value = ''; 
}

// This is delete one after the other
let ClearOne = () => {
    display.value = display.value.slice(0,-1)
}

// This is equal to
let calculate = () => {
    display.value = eval(display.value)
}
