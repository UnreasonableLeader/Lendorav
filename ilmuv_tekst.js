// Funktsioon, mis lisab uue teksti dünaamiliselt
function addNewText() {
    const newText = document.createElement('p');
    newText.textContent = 'Uus dünaamiliselt lisatud tekst...';
    newText.classList.add('section');
    document.getElementById('dynamic-content').appendChild(newText);
}

// Muuda showSections funktsiooni, et lisada dünaamilist teksti
function showSections() {
    const triggerBottom = window.innerHeight / 1.2; // Positsioon, kus lõik muutub nähtavaks

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible'); // Näita lõiku
        } else {
            section.classList.remove('visible'); // Peida lõik
        }
    });

    // Kontrolli, kas viimane lõik on nähtaval ja lisa uus tekst
    const lastSection = sections[sections.length - 1];
    const lastSectionBottom = lastSection.getBoundingClientRect().bottom;
    if (lastSectionBottom < window.innerHeight) {
        addNewText();
        sections = document.querySelectorAll('.section'); // Uuenda sektsioonide loend
    }
}

// Leia kõik sektsioonid
let sections = document.querySelectorAll('.section');

// Lisa kerimise sündmus
window.addEventListener('scroll', showSections);

// Esialgne kontroll (kui lõigud on juba nähtaval)
showSections();
