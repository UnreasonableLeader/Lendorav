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