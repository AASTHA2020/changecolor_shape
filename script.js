// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the shape element
    const shape = document.getElementById('shape');
    // Get reference to the change color button
    const changeColorBtn = document.getElementById('changeColorBtn');
    // Get reference to the change shape button
    const changeShapeBtn = document.getElementById('changeShapeBtn');

    // Function to generate random color
    const randomColor = function() {
        // Define hexadecimal characters
        const hex = '0123456789ABCDEF';
        // Start building color code with #
        let color = '#';
        // Generate random color code
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        // Return the generated color code
        return color;
    };

    // Function to generate random shape
    const randomShape = function() {
        // Define an array of shape names
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * shapes.length);
        // Return the randomly selected shape
        return shapes[randomIndex];
    };

    // Event listener for change color button click
    changeColorBtn.addEventListener('click', function() {
        // Generate random color
        shape.style.backgroundColor = randomColor();
    });

    // Event listener for change shape button click
    changeShapeBtn.addEventListener('click', function() {
        // Generate random shape
        const changeShape = randomShape();

        // Update shape based on randomly generated shape
        if (changeShape === 'triangle') {
            // Set clipPath for triangle shape
            shape.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
            // In the polygon function, the percentages (%) represent the position of the points
            // For example, "50% 0%" means 50% across the width and 0% across the height (top-center point)
        } else if (changeShape === 'hexagon') {
            // Set clipPath for hexagon shape
            shape.style.clipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
            // In the polygon function, the percentages (%) represent the position of the points
            // For example, "50% 0%" means 50% across the width and 0% across the height (top-center point)
        } else {
            // Reset clipPath to null for default shape
            shape.style.clipPath = null;
            // When clipPath is set to null, it removes any clipping and restores the default shape of the element
        }
    });
});
