let inputNumbers1 = [];
let inputNumbers2 = [];
let history = []; 
let op1;
let op2;
let result
let operation;
let textarea = document.getElementById(txtStory);
const Pi = 3.1415926535;

function getNumbers(result){
    if(result){
        return result
    } else {
    return inputNumbers1.join('');
    }
}

function showInInput(p1){
    if(!p1){
        p1 = getNumbers();
      }
      document.getElementById("input1").value = p1;
}
function showInInput2(p1){
    document.getElementById("input1").value = inputNumbers2.join("")
}

let calcnums = document.getElementsByClassName("numbtn");
[...calcnums].forEach(element => {
    element.onclick = function() {
        if (element.dataset.num == ".") {
            if (inputNumbers1. includes(".")){
                return;
            }
        }
        inputNumbers1.push(element.dataset.num);
        inputNumbers2.push(element.dataset.num);
        showInInput2();
    }
});

let ravno = document.getElementById("equal");
ravno.onclick = function(){
    inputNumbers2 = [];
    switch (operation) {
        case "minus":
            op2 = parseFloat(getNumbers())    
            result = op1 - op2;
            // console.log(result)
            showInInput("=     " + result);
            addToHistory(result);
            op1 = result;
            inputNumbers2 = [];
        break;
    
        case "plus":
            op2 = parseFloat(getNumbers())
            result = op1 + op2;
            showInInput("=     " + result);
            addToHistory(result);
            op1 = result;
            inputNumbers2 = [];
            break;
        
        case "mult":
            op2 = parseFloat(getNumbers())
            result = op1 * op2;
            showInInput("=     " + result);
            addToHistory(result);
            op1 = result;
            inputNumbers2 = [];
            break;
        case "div":
            op2 = parseFloat(getNumbers())
            if(op2 == 0){
                showInInput("на ноль делить нельзя сука");
            } 
            else{
                result = op1 / op2;
                showInInput("=     " + result);
                addToHistory(result);
                op1 = result;
                inputNumbers2 = [];
            }
        break;
        
    }
}

let minus = document.getElementById("minus");
minus.onclick = function(){
        op1 = parseFloat(getNumbers());
        operation = "minus";
        deleteFromInput();
        inputNumbers2.push("-");
        showInInput2();
    }

let plus = document.getElementById("plus");
plus.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "plus";
    deleteFromInput();
    inputNumbers2.push("+");
    showInInput2();
}
let mult = document.getElementById("mult");
mult.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "mult";
    deleteFromInput();
    inputNumbers2.push("*");
    showInInput2();
}
let div = document.getElementById("div");
div.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "div";
    deleteFromInput();
    inputNumbers2.push("/");
    showInInput2();
}


function deleteFromInput(){
    inputNumbers1 = [];
    // inputNumbers1.splice(0,inputNumbers1.length);
    showInInput();
    
}
document.getElementById("delet").onclick = function(){
    deleteFromInput();
    inputNumbers2 = [];
}

function addToHistory(item){
    history.push(item);
    if(history.length > 5){
        history.splice(0, 1);
    }
}

function addBrToHistory(){
    return history.join('/\n/');
}

function addToHistory(){
    
}