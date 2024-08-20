document.addEventListener('DOMContentLoaded', () => {
    let portion = 1;
    const portionSpan = document.getElementById('portion');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const ingredients = document.querySelectorAll('.ingredient');

    function updateIngredients() {
        ingredients.forEach(ingredient => {
            const baseQuantity = parseFloat(ingredient.getAttribute('data-quantity'));
            const quantityNum = ingredient.querySelector('.quantity-num');
            if (quantityNum) {
                const newQuantity = baseQuantity * portion;
                quantityNum.textContent = newQuantity;
            }
        });
    }

    incrementButton.addEventListener('click', () => {
        portion++;
        portionSpan.textContent = portion;
        updateIngredients();
    });

    decrementButton.addEventListener('click', () => {
        if (portion > 1) {
            portion--;
            portionSpan.textContent = portion;
            updateIngredients();
        }
    });

    updateIngredients(); 
});