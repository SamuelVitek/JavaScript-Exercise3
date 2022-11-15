//Global variables
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
//  All dynamic sizes (canvas, rectangle, space between rectangles) due to canvas size
let canWidth = canvas.width;
let canHeight = canvas.height;

let sizeRecX = canWidth / 15;
let sizeRecY = canHeight / 15;

let sizeSpaceX = canWidth / 25;
let sizeSpaceY = canHeight / 25;

//  Calculations for offsetting the main part of the canvas in middle of the canvas
let drawingFullWidth = 8 * (sizeSpaceX + sizeRecX);
let drawingFullHeight = 8 * (sizeSpaceY + sizeRecY);

let offsetX = (canWidth - drawingFullWidth) / 2;
let offsetY = (canHeight - drawingFullHeight) / 2;

let rectangles = [];

context.fillStyle = 'green';

//Generates field of rectangles in the rectangles array
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

//Drawing rectangles
rectangles.forEach(function(rectangle) {
    context.fillRect(rectangle.left + offsetX, rectangle.top + offsetY, rectangle.width, rectangle.height);
})

//On hit function for whole canvas, if invoked, checks if object was hit
canvas.addEventListener('click', function(event) {
    let mouseX = event.pageX - offsetX;
    let mouseY = event.pageY - offsetY;

    rectangles.forEach(function(element) {
        if (mouseY > element.top && mouseY < element.top + element.height
            && mouseX > element.left && mouseX < element.left + element.width) {

            console.log('FUUUUU')

            if (element.color !== 'green') {
                drawRect(element.left, element.top, element.width, element.height, 'green');
            } else {
                drawRect(element.left, element.top, element.width, element.height, 'blue');
            }
        }
    });
})

//Redraw rectangle function
function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}