// window.onload = alert('Please view the image of my screen in the repository.\n' +
//     'I have recommended resolution 125% and I don\'t trust it to be the same on different pc.');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let rectangles = [];

ctx.fillStyle = 'green';
ctx.shadowBlur = 0;

//Row 1
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        ctx.fillRect(30 + (j * 30), 15 + (i * 15), 25, 12.5);
    }
}

