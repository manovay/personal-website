document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const pointer = document.getElementById('pointer');

    let currentIndex = 0;

    // Function to update the pointer
    function updatePointer(index) {
        const selectedItem = menuItems[index];
        const selectedItemRect = selectedItem.getBoundingClientRect();

        // Directly use the selected item's coordinates relative to the window
        pointer.style.left = (selectedItemRect.left - 40) + 'px'; // Adjust the pointer to the left of the item
        pointer.style.top = selectedItemRect.top + 'px';  // Adjist the pointer with the top of the item
        pointer.style.display = 'block'; // Ensure the pointer is visible

        // Reset all items
        menuItems.forEach(item => item.classList.remove('active'));

        // Highlight the current item
        selectedItem.classList.add('active');
    }


    window.onload = function () {
        updatePointer(currentIndex);  // Initial pointer position when the page loads
    };

    
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

    // Handle window resize
    window.addEventListener('resize', function () {
        updatePointer(currentIndex); // Update pointer position on window resize
    });
});
