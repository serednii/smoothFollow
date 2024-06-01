/**
 * @function smoothFollow
 * @description This function allows an element to smoothly follow the mouse cursor, creating a "lagging" effect.
 * 
 * @param {Object} options - The options for the function.
 * @param {string} options.targetElement - The ID of the target element that will follow the cursor.
 * @param {number} [options.interval=35] - The interval for updating the element's position (in milliseconds).
 * @param {number} [options.targetElementPositionX=0] - The X-axis offset of the element relative to the cursor position.
 * @param {number} [options.targetElementPositionY=0] - The Y-axis offset of the element relative to the cursor position.
 * 
 * @example
 * smoothFollow({
 *   targetElement: 'moon',
 *   interval: 35,
 *   targetElementPositionX: -20,
 *   targetElementPositionY: -20,
 * });
 */
function smoothFollow({
    targetElement = undefined,
    interval = 35,
    targetElementPositionX = 0,
    targetElementPositionY = 0
}) {
    if (!targetElement) return;

    const positions = [{ x: 0, y: 0 }];
    const targetElementNode = document.querySelector(`#${targetElement}`);

    // Add mousemove event listener
    document.body.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        positions.unshift({ x: mouseX, y: mouseY });
    });

    let currentX = 0;
    let currentY = 0;

    // Update the position of the target element at the specified interval
    setInterval(() => {
        if (positions.length > 0) {
            const { x, y } = positions.pop();
            currentX = x;
            currentY = y;
        }
        targetElementNode.style.left = (currentX + targetElementPositionX) + 'px';
        targetElementNode.style.top = (currentY + targetElementPositionY) + 'px';
    }, interval);
}

// Example usage
smoothFollow({
    targetElement: 'target',
    interval: 35,
    targetElementPositionX: -20,
    targetElementPositionY: -20,
});
