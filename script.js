document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const pointer = document.getElementById('pointer');
    let currentIndex = 0;

    // Function to update the pointer position
    function updatePointer(index) {
        const selectedItem = menuItems[index];
        const pointerLeftOffset = 1000;  // Small horizontal adjustment
        const pointerTopOffset = 400;     // Small vertical adjustment
        pointer.style.left = (selectedItem.offsetLeft + pointerLeftOffset) + 'px';
        pointer.style.top = (selectedItem.offsetTop + pointerTopOffset) + 'px';
        pointer.style.display = 'block';

        // Reset all items
        menuItems.forEach(item => item.classList.remove('active'));

        // Highlight the current item
        selectedItem.classList.add('active');
    }

    // Initial position of the pointer
    updatePointer(currentIndex);

    // Event listener for keyboard inputs
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % menuItems.length;
            updatePointer(currentIndex);
        } else if (event.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            updatePointer(currentIndex);
        } else if (event.key === 'Enter') {
            menuItems[currentIndex].click(); // Simulate click on current item
        }
    });
});
