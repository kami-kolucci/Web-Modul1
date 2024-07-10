
function doubleIt() {
    const output = document.querySelector(".output-form");
    const number = document.getElementById('number-input').value;
    const double = number * 2;
    output.innerHTML = double;
    // output.innerText = double;
    // document.getElementById('result').innerText = double;
}

// unterschied zwischen innerText und innerHTML


   