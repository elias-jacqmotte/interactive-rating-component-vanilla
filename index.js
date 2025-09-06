// Get containers
const ratingContainer = document.querySelector('.rating');
const thankyouContainer = document.querySelector('.thank-you');

// Get button container for selecting buttons
const selectButtons = ratingContainer.querySelectorAll('.rate-buttons button');

// Get submit button
const submit = document.querySelector('.submit');

// Get selected rate span
const visibleRate = document.querySelector('.rate');

// State - selected button
let selectedScore;

// Create eventlistener to examine which button has been pressed.
selectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        selectButtons.forEach(btn => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");
        selectedScore = e.currentTarget.textContent;

        console.log(selectedScore);
    })
});

submit.addEventListener('click', () => {
    if ( selectedScore != undefined ) {
        ratingContainer.classList.add('hidden');
        thankyouContainer.classList.remove('hidden');

        visibleRate.textContent = selectedScore;
    } else {
        console.error("No option has been selected.")    
    }
})