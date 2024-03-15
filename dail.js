// Function to toggle the flip class on project cards
function flipCard(event) {
    event.currentTarget.classList.toggle('flip');
}

// Add event listeners to all project cards
var projectCards = document.querySelectorAll('.project');
projectCards.forEach(function(card) {
    card.addEventListener('click', flipCard);
});