let firstName = document.querySelector('#tableFirstName');
let lastName = document.querySelector('#tableLastName');
let doctorNum = document.querySelector('#doctorNum');
let table = document.querySelector('table');

function addToTable() {
    let row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = firstName.value;
    cell2.innerHTML = lastName.value;
    cell3.innerHTML = doctorNum.value;

    document.getElementById('tableFirstName').value = '';
    document.getElementById('tableLastName').value = '';
    document.getElementById('doctorNum').value = '';
}