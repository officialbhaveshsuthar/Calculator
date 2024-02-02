let calcu = document.getElementById('input');
let button = document.querySelectorAll('td');

function dis(number) {
    calcu.value += number;
}

function result() {
     try {
         calcu.value = eval(calcu.value)
    }
    
    catch (arr) {
        alert("Insert Valid Number")
    }
}

function clr() {
    calcu.value = ""
}

