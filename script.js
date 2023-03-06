
load = () => {
    const xVal = document.getElementById("xVal");
    const yVal = document.getElementById("yVal");
    const abiVal = document.getElementById("abiCalculator");

    xVal.addEventListener("input", () => {check()})
    yVal.addEventListener("input", () => {check()})

    if(abiVal.value == "") {
        xVal.disabled = true;
        yVal.disabled = true;
    }
    abiVal.addEventListener("input", () => {
        if(abiVal.value == "") {
            xVal.disabled = true;
            yVal.disabled = true;
        } else {
            xVal.disabled = false;
            yVal.disabled = false;
        }
    })
}

check = () => {
    var firstNumber = document.getElementById("xVal").value;
    var secondNumber = document.getElementById("yVal").value;
    if (firstNumber == "" || secondNumber == "") {
        plusBtn = document.getElementById("plusBtn").disabled = true;
        minusBtn = document.getElementById("minusBtn").disabled = true;
        multipliedBtn = document.getElementById("multipliedBtn").disabled = true;
        divisionBtn = document.getElementById("divisionBtn").disabled = true;
    } else {
        plusBtn = document.getElementById("plusBtn").disabled = false;
        minusBtn = document.getElementById("minusBtn").disabled = false;
        multipliedBtn = document.getElementById("multipliedBtn").disabled = false;
        divisionBtn = document.getElementById("divisionBtn").disabled = false;
    }
}

url = 'http://127.0.0.1:5000/'

async function plus(){
    let abi_address = document.getElementById('abiCalculator').value;
    let xVal = document.getElementById('xVal').value;
    let yVal = document.getElementById('yVal').value;

    const response = await fetch(url + 'plus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            abi_address: abi_address,
            xVal: xVal,
            yVal: yVal
        })
    }).catch((error) => {
        alert(error)
        topEndError()
    });
    const msg = await response.json();
    topEndSuscess()
    document.getElementById('result').value = msg;
}

async function minus(){
    let abi_address = document.getElementById('abiCalculator').value;
    let xVal = document.getElementById('xVal').value;
    let yVal = document.getElementById('yVal').value;

    const response = await fetch(url + 'minus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            abi_address: abi_address,
            xVal: xVal,
            yVal: yVal
        })
    }).catch((error) => {
        topEndError()
    });
    const msg = await response.json();
    topEndSuscess()
    document.getElementById('result').value = msg;
}

async function multiplied(){
    let abi_address = document.getElementById('abiCalculator').value;
    let xVal = document.getElementById('xVal').value;
    let yVal = document.getElementById('yVal').value;

    const response = await fetch(url + 'multiplied', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            abi_address: abi_address,
            xVal: xVal,
            yVal: yVal
        })
    }).catch((error) => {
        topEndError()
    });
    const msg = await response.json();
    topEndSuscess()
    document.getElementById('result').value = msg;
}

async function division(){
    let abi_address = document.getElementById('abiCalculator').value;
    let xVal = document.getElementById('xVal').value;
    let yVal = document.getElementById('yVal').value;

    const response = await fetch(url + 'division', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            abi_address: abi_address,
            xVal: xVal,
            yVal: yVal
        })
    }).catch((error) => {
        topEndError()
    });
    const msg = await response.json();
    topEndSuscess()
    document.getElementById('result').value = msg;
}

topEndSuscess = () => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Suscess',
        showConfirmButton: false,
        timer: 1500
    })
}

// Swal Error
topEndError = () => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        showConfirmButton: false,
        timer: 1500
    })
}