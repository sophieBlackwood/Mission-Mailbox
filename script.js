document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');

    // Adds the 'open' class when clicking the envelope
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
    });

    // Prevents clicking inside the letter from accidentally re-triggering envelope logic
    letter.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
