// function checkNumber() {
//     const numberInput = Number(document.querySelector('.number').value)
//     console.log(numberInput);


// const text  = document.querySelector('.text')

// if (numberInput <= 2) {
//     text.innerHTML = 'schlecht'
//    }   else if (numberInput >= 3 && numberInput <= 5){
//             text.innerHTML = 'okay'}
//             else if (numberInput >=6 && numberInput <= 7){
//                 text.innerHTML = 'good'}
//             else if (numberInput >= 8 && numberInput <= 10){
//             text.innerHTML = 'very good'
//             }
        
// }








function quality() {
    const number = Number(document.getElementById('number').value);
    
    if (number <= 2) {
    document.getElementById("text").innerText = 'schlecht' }
        else if ( number > 3 && number <= 5) {
        document.getElementById('text').innerText = 'okay' }
        else if ( number >= 6 && number <= 8) { 
        document.getElementById('text').innerText = 'gut' }
        else if ( number >= 9 ) { 
            document.getElementById("text").innerText = 'sehr gut'}
           
    
}




