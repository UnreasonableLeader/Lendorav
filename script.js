// Lisab nupule klikisündmuse
document.getElementById('annetuse_nupp').addEventListener('click', function() {
    alert('Aitäh, et toetad lendoravaid!')
    // Suunab kasutaja annetuste lehele
    window.location.href = 'https://elfond.ee/anneta';
  });

// Leia kõik sektsioonid
const sections = document.querySelectorAll('.section');

// Funktsioon, mis kontrollib, kas sektsioon on vaateväljas
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
}

// Lisa kerimise sündmus
window.addEventListener('scroll', showSections);

// Esialgne kontroll (kui lõigud on juba nähtaval)
showSections();

