// function verdoppelMich() {
//   let number = document.getElementById("number").value;
//   let double = number * 2;
//   console.log(double);

  
//   document.getElementById('result').innerText = double;
// }


        







// function checkAge() {
//     const age = document.getElementById('age').value;
//     let result;
//     if (age >= 18){
//         result = "Volljaehrig";
//     } else if (age <= 17){
//         result = "Minderjaehrig";
//     }
//     document.querySelector('.text').textContent = result;
    
// }















// function checkAge(event) {
//     event.preventDefault(); 
//     const age = document.getElementById('age').value;
//     let resultText;
//     if (age >= 18) {
//         resultText = 'Ja, Du kannst Shisha rauchen';
//     } else if (age < 18) {
//         resultText = 'Du darfst noch nicht Shisha rauchen';
//     }
//     document.querySelector('.text').textContent = resultText;
// }

















// function adult(age) {
// if (age >= 18) {
//     return true;
// } else {
//     return false;
// }
// }

// function checkAge() {
//     const age  = document.getElementById('age').value;
//     const isAdult = adult(age);
//     const resultElement = document.getElementById('result');
//     if (isAdult) {
//         resultElement.textContent = "Volljaerig"
//     } else {
//         resultElement.textContent = "Minderjaehrig"
//     }
//     }






  
    // function adult(age) {
    //     if (age >= 18) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function checkAge() {
    //     const age = document.getElementById('age').value;
    //     const isAdult = adult(age);
    //     const resultElement = document.getElementById('result');
    //     if (isAdult) {
    //         resultElement.textContent = "Volljährig";
    //     } else {
    //         resultElement.textContent = "Minderjährig";
    //     }
    // }











// function doubleIt() {
   
//     const number = document.getElementById("age").value;
//     const double = number * 2;
//     document.getElementById('result').innerText = double 
   
// }











// function doubleIt() {
//     const output = document.querySelector(".output-form")

//     const number = document.getElementById('number-input').value;
//     const double = number * 2;
//     output.innerHTML = document.querySelector('.output')
// }





function doubleIt() {
    const output = document.querySelector(".output-form");
    const number = document.getElementById('number-input').value;
    const double = number * 2;
    output.innerHTML = double;
}















