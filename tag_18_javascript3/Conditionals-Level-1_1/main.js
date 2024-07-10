
function adult() {
    const number = document.getElementById('number').value;
    const submit = document.getElementById('submit');

    if (number >= 18) {
        document.getElementById('text').innerText = 'Volljaehrig'
        } else {
            document.getElementById('text').innerText = "Minderjaehrig"
        }

}












