function calculate_diametros() {
    var ypsos = parseInt(document.getElementById("ypsos").value);
    var gap = parseFloat(document.getElementById("gap").value);
    var number = parseInt(document.getElementById("number").value);
    var paxos = parseFloat(document.getElementById("paxos").value);
    var mandren = parseInt(document.getElementById("mandren").value);
    var L = (ypsos + gap) * number;
    var diametros = Math.sqrt(((L * paxos) + (3.14 * Math.pow(mandren,2)))/3.14);
    // round diametros 1 decimal places
    document.getElementById("diametros").value = diametros;
    console.log(L);
    console.log(ypsos);
    console.log(gap);
    console.log(number);
}
function calculate_number() {
    var ypsos = document.getElementById("ypsos").value;
    var gap = document.getElementById("gap").value;
    var paxos = document.getElementById("paxos").value;
    var mandren = document.getElementById("mandren").value;
    var diametros = document.getElementById("diametros").value;
    var number = (3.14 * (Math.pow(diametros,2) - Math.pow(mandren,2)) / paxos)/(ypsos + gap);
    // round number 2 decimal places
    document.getElementById("number").value = number;

}
//
// // get radio buttons
// const radio_num = document.querySelector('input[name="radio1"]')
// var radio_dia = document.querySelector('input[name="radio1"]:checked').value;
// console.log(radio_dia);
//
// // if radio is selected make label input disabled
// // radio_num.addEventListener("click", function() {
// //     document.getElementById("diametros").disabled = true;
// //     document.getElementById("number").disabled = false;
// //     document.getElementById("diametros").value = "";
// //     document.getElementById("number").value = "";
// //     document.getElementById("diametros").style.backgroundColor = "#e9ecef";
// //     document.getElementById("number").style.backgroundColor = "white";
// // });
// // radio_dia.addEventListener("click", function() {
// //     document.getElementById("diametros").disabled = false;
// //     document.getElementById("number").disabled = true;
// //     document.getElementById("diametros").value = "";
// //     document.getElementById("number").value = "";
// //     document.getElementById("diametros").style.backgroundColor = "white";
// //     document.getElementById("number").style.backgroundColor = "#e9ecef";
// // });
//
// if (radio_num.checked) {
//     document.getElementById("diametros").disabled = true;
//     document.getElementById("number").disabled = false;
//     document.getElementById("diametros").value = "";
//     document.getElementById("number").value = "";
//     document.getElementById("diametros").style.backgroundColor = "#e9ecef";
//     document.getElementById("number").style.backgroundColor = "white";
// }
// else if (radio_dia.checked) {
//     document.getElementById("diametros").disabled = false;
//     document.getElementById("number").disabled = true;
//     document.getElementById("diametros").value = "";
//     document.getElementById("number").value = "";
//     document.getElementById("diametros").style.backgroundColor = "white";
//     document.getElementById("number").style.backgroundColor = "#e9ecef";
// }