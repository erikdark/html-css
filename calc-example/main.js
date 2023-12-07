let input = document.getElementById('input')
let curInput = ""

function addInput(value) {
    curInput += value
    input.value = curInput
}

function addInputClear() {
    curInput = ""
    input.value = ""
}

function appOper(operator) {
    curInput += ' ' + operator + ' ';
    input.value = curInput
}

function addInputResult() {
    input.value = eval(curInput)
    curInput = input.value
}

// function addInputResult() {
//     const res = new Function ('return' + curInput)()
//     input.value = res
//     curInput = res
// }

// СОХРАНЕНИЕ В ПАМЯТЬ
// let memory = 0
// function addMemory() {
//     memory += parseFloat(input.value) || 0
//  }

// function retMemory() {
//     curInput += memory
//     input.value- curInput
// }


