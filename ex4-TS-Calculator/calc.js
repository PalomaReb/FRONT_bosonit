function clearNum() {
    document.getElementById("result").innerHTML = "0";
}
function removeStartZero() {
    var value = document.getElementById("result").innerHTML;
    if (value === "0") {
        value = " ";
        document.getElementById("result").innerHTML = value;
    }
}
function display(value) {
    removeStartZero();
    document.getElementById('result').innerHTML += value;
}
function solveOperation() {
    removeStartZero();
    var equation = document.getElementById("result").innerHTML;
    var solved = eval(equation);
    document.getElementById('result').innerHTML = solved;
}
