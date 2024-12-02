// Lisab nupule klikisündmuse https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.getElementById('annetuse_nupp').addEventListener('click', function() {
    alert('Aitäh, et toetad lendoravaid!');
    // Suunab kasutaja annetuste lehele https://www.w3schools.com/js/js_window_location.asp
    window.location.href = 'https://elfond.ee/anneta';
  });





// Leia kõik sektsioonid
const boxes = document.querySelectorAll('.box');


// Sofia JavaScript
// Funktsioon, mis kontrollib, kas sektsioon on vaateväljas
function showBoxes() {
    const triggerBottom = window.innerHeight / 1.2; // Positsioon, kus lõik muutub nähtavaks

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible'); // Näita lõiku
        } else {
            box.classList.remove('visible'); // Peida lõik
        }
    });
}

// Lisa kerimise sündmus
window.addEventListener('scroll', showBoxes);

// Esialgne kontroll (kui lõigud on juba nähtaval)
showBoxes();