function clearNum(){
    document.getElementById("result").innerHTML="0";
}

function removeStartZero(){
    let value = document.getElementById("result").innerHTML;
    if(value === "0"){
        value = " "
        document.getElementById("result").innerHTML = value;
    }
}

function display(value:any){
    removeStartZero();
    document.getElementById('result').innerHTML += value;

}

function solveOperation(){
    removeStartZero();
    let equation = document.getElementById("result").innerHTML;
    let solved = eval(equation);
    document.getElementById('result').innerHTML = solved;
}