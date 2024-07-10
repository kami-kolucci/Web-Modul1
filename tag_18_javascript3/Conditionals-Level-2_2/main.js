// function checkAir() {
    

//     const outputVomHtml = document.querySelector(".output")

//     const qualitaetInput = document.getElementById('qualitaet').value
//     console.log(qualitaetInput);

//     if (qualitaetInput <= 50) {
        
//         outputVomHtml.innerHTML = 'Level'
//         document.body.style.backgroundColor = 'green'
//         } else if (qualitaetInput > 50 && qualitaetInput < 100){
//             outputVomHtml.innerHTML = 'Moderate '
//             document.body.style.backgroundColor = "yellow" 
//         } else if (qualitaetInput > 100 && qualitaetInput < 150){
//             outputVomHtml.innerHTML = 'Level of health concern:  Unhealthy for sensitive groups Level of health effect: Generable publics not likely affected'
//             document.body.style.backgroundColor = "red" 
//         }
// }







function checkAirQuality() {
    const range = document.getElementById('range').value;

    if ( range < 50 ) {
        document.getElementById("text").innerText = "gut"
        document.body.style.backgroundColor = 'green'
    }   else if ( range > 51 && range < 100) {
        document.getElementById('text').innerText = "okay"
        document.body.style.backgroundColor = 'yellow'
     }  else if ( range > 100 ) {
        document.getElementById("text").innerText = 'schlecht'
        document.body.style.backgroundColor = "red" }

}











