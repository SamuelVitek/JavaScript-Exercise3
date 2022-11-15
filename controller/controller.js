const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let canWidth = canvas.width;
let canHeight = canvas.height;
let sizeRecX = canWidth / 15;
let sizeRecY = canHeight / 15;
let sizeSpaceX = canWidth / 25;
let sizeSpaceY = canHeight / 25;
let drawingFullWidth = 8 * (sizeSpaceX + sizeRecX);
let drawingFullHeight = 8 * (sizeSpaceY + sizeRecY);
let offsetX = (canWidth - drawingFullWidth) / 2;
let offsetY = (canHeight - drawingFullHeight) / 2;

let rectangles = [];

context.fillStyle = 'green';
context.shadowBlur = 0;

window.addEventListener('change', () => {
    // canWidth = canvas.width;
    // canHeight = canvas.height;
    //
    // centerX = canWidth / 2;
    // centerY = canHeight / 2;
    //
    // scaleWidth = window.innerWidth / canWidth;
    // scaleHeight = window.innerHeight / canHeight;
    //
    // scale = Math.min(scaleHeight, scaleWidth);
})

//Row 1
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let recX = offsetX + sizeSpaceX + (j * (sizeSpaceX * 2));
        let recY = offsetY + sizeSpaceY + (i * (sizeSpaceY * 2));

        rectangles.push({
            colour: 'green',
            width: sizeRecX,
            height: sizeRecY,
            top: recY,
            left: recX
        });
    }
}

rectangles.forEach(function(rectangle) {
    context.fillRect(rectangle.left + offsetX, rectangle.top + offsetY, rectangle.width, rectangle.height);
})

canvas.addEventListener('click', function(event) {
    const elemLeft = offsetX + canvas.clientLeft;
    const elemTop = offsetY + canvas.clientTop;

    let mouseX = event.pageX - elemLeft;
    let mouseY = event.pageY - elemTop;

    rectangles.forEach(function(element) {
        if (mouseY > element.top && mouseY < element.top + element.height
            && mouseX > element.left && mouseX < element.left + element.width) {

            console.log(element.top + element.height);
        }
    });
})

function drawRect(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, 25, 12.5);
}