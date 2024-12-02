// allikas: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// Lisab nupule klikisündmuse
document.getElementById('annetuse_nupp').addEventListener('click', function() {
    alert('Aitäh, et toetad lendoravaid!');
    // Suunab kasutaja annetuste lehele 
    // allikas: https://www.w3schools.com/js/js_window_location.asp
    window.location.href = 'https://elfond.ee/anneta';
  });