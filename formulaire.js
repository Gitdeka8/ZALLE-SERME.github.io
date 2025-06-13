document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi réel du formulaire

  // Affiche le message de confirmation
  document.getElementById("confirmation").classList.remove("hidden");

  // Réinitialise le formulaire (optionnel)
  this.reset();
});
mainImage.src = images[0].src;
let currentIndex = 0; // Pour savoir où on est

function updateMainImage(index) {
    mainImage.src = images[index].src;
    caption.textContent = images[index].caption;
    currentIndex = index;

    // Met à jour la classe active sur la miniature
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Bouton suivant
document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(currentIndex);
});

// Bouton précédent
document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(currentIndex);
});
