// Funktsioon, mis lisab uue lõigu dünaamiliselt
function addNewText() {
    const dynamicContent = document.createElement('div'); // Loo uus <div>
    dynamicContent.classList.add('box'); // Lisa "box" klass
    dynamicContent.innerHTML = `
        <h3 class="section">Uus lõik</h3>
        <p class="section">See on dünaamiliselt lisatud tekst.</p>
    `;

    // Leia viimane kast ja lisa see sellele järgmiseks
    const lastBox = document.querySelector('.box:last-of-type');
    if (lastBox) {
        lastBox.insertAdjacentElement('afterend', dynamicContent);
    }
    // Uuenda kastide loend
    boxes = document.querySelectorAll('.box');
}

// Kontrolli, kas kastid muutuvad nähtavaks
function showBoxes() {
    const triggerBottom = window.innerHeight / 1.2;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('visible'); // Nähtavaks
        } else {
            box.classList.remove('visible'); // Peidetuks
        }
    });

    // Kui viimane kast on nähtav, lisa uus dünaamiline lõik
    const lastBox = boxes[boxes.length - 1];
    if (lastBox && lastBox.getBoundingClientRect().bottom < window.innerHeight) {
        addNewText();
    }
}

// Leia kõik kastid esialgselt
let boxes = document.querySelectorAll('.box');

// Lisa sündmuse kuulaja
window.addEventListener('scroll', showBoxes);
showBoxes(); // Esialgne kontroll
