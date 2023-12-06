$(document).ready(function () {
    // Fonction pour changer la couleur du fond de la page
    function changeBackgroundColor() {
        $('body').css('background-color', getRandomColor());
    }

    // Fonction pour générer une couleur aléatoire au format hexadécimal
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Fonction pour changer la couleur du texte des articles
    function changeArticleTextColor() {
        $('.main-content article').css('color', getRandomColor());
    }

    // Fonction pour augmenter la taille des articles
    function increaseArticleSize() {
        var currentSize = parseInt($('.main-content article').css('font-size'));
        var newSize = currentSize * 1.2; // Augmenter la taille de 20%
        $('.main-content article').css('font-size', newSize + 'px');
    }

    // Changer la couleur du fond
    changeBackgroundColor();

    // Changer la couleur du texte des articles
    changeArticleTextColor();

    // Augmenter la taille des articles
    increaseArticleSize();
});
