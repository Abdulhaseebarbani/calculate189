function getNumber(num){
    var inp = document.getElementById("inp")
    inp.value += num;
}
function clearinp(){
    var inp = document.getElementById("inp")
    inp.value = ""
}
function getResult(){
    var inp = document.getElementById("inp") 
    inp.value = eval(inp.value)
}
function getper(){
    var inp = document.getElementById("inp")
    inp.value = inp.value*0.01
}
function backSpace(){
    inp.value = inp.value.slice(0, - 1);
}