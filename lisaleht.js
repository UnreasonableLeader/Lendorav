// Ticker konstruktor
function Ticker(elem) {
    elem.lettering(); // Lisa tähestikuline tükeldamine
    this.done = false;
    this.cycleCount = 5; // Mitu korda tähti genereeritakse
    this.cycleCurrent = 0; // Praegune tsükkel
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
    this.charsCount = this.chars.length; // Märkide koguarv
    this.letters = elem.find('span'); // Tähestiku tähised
    this.letterCount = this.letters.length; // Täheste koguarv
    this.letterCurrent = 0; // Praegune töötav täht

    // Lähtesta iga tähe algtekst
    this.letters.each(function () {
        var $this = $(this);
        $this.attr('data-orig', $this.text()); // Säilita originaaltekst
        $this.text('-'); // Muuda vaikimisi märgiks '-'
    });
}

// Suvalise märgi valimine
Ticker.prototype.getChar = function () {
    return this.chars[Math.floor(Math.random() * this.charsCount)];
};

// Reset funktsioon, tagab uue alguse
Ticker.prototype.reset = function () {
    if (this.isResetting) return; // Kaitse korduva käivitamise eest
    this.isResetting = true;

    this.done = false;
    this.cycleCurrent = 0;
    this.letterCurrent = 0;

    var self = this;

    this.letters.each(function () {
        var $this = $(this);
        $this.text($this.attr('data-orig')); // Taasta originaaltekst
        $this.removeClass('done'); // Eemalda valmis klass
    });

    // Käivita uuesti loop
    this.loop();

    // Luba uus reset peale viivitust
    setTimeout(function () {
        self.isResetting = false;
    }, 100); // Lühike kaitseviivitus
};

// Tickeri loop funktsioon
Ticker.prototype.loop = function () {
    var self = this;

    // Täida tähed tsükliliselt
    this.letters.each(function (index, elem) {
        var $elem = $(elem);
        if (index >= self.letterCurrent) {
            if ($elem.text() !== ' ') {
                $elem.text(self.getChar()); // Asenda märgiga
                $elem.css('opacity', Math.random()); // Muuda läbipaistvust
            }
        }
    });

    // Kontrolli tsükli ja tähe edenemist
    if (this.cycleCurrent < this.cycleCount) {
        this.cycleCurrent++;
    } else if (this.letterCurrent < this.letterCount) {
        var currLetter = this.letters.eq(this.letterCurrent);
        this.cycleCurrent = 0;
        currLetter.text(currLetter.attr('data-orig')).css('opacity', 1).addClass('done');
        this.letterCurrent++;
    } else {
        this.done = true;
    }

    // Käivita loop uuesti või reseti
    if (!this.done) {
        requestAnimationFrame(function () {
            self.loop();
        });
    } else {
        setTimeout(function () {
            self.reset();
        }, 750); // Ooteaeg enne resetti
    }
};

// DOM sündmuse käivitamine pärast lehe täielikku laadimist
document.addEventListener('DOMContentLoaded', function () {
    var $words = $('.word');

    // Lisa nähtavuse klass
    $words.addClass('loaded');

    // Käivita ticker iga sõna jaoks
    $words.each(function () {
        var $this = $(this);
        var ticker = new Ticker($this);
        ticker.reset(); // Alusta uuesti
        $this.data('ticker', ticker);
    });
});

// Fallback animatsiooni raami taotluse jaoks (vanemad brauserid)
window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function (callback) {
        setTimeout(callback, 1000 / 60); // Fallback 60 kaadrit/sekundis
    };
