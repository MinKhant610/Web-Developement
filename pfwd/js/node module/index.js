//common js module test

let add = (a, b) => {
    return a + b;
}

let div = (a, b) => {
    if (b === 0) return "Cannot divided by zero";
    else return a / b;
}

module.exports = {add, div};