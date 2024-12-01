// Funktsioon, mis lisab uue teksti dünaamiliselt
function addNewText() {
    const dynamicContent = document.createElement('p');
  
    dynamicContent.classList.add('section');

    // Lisa uus tekst viimase sektsiooni juurde, kuid mitte footerisse
    const lastSection = document.querySelector('.section:last-of-type');
    lastSection.insertAdjacentElement('afterend', dynamicContent);
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
