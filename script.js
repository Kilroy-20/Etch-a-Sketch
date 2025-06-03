//making a container div
const container = document.createElement('div');

container.id = 'container';

let isDrawing = false;
let currentTool = 'draw';

document.body.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.body.addEventListener('mouseup', () => {
    isDrawing = false;
});


const topDiv = document.createElement('div');
topDiv.id = 'topDiv';
document.body.appendChild(topDiv);

const drawBtn = document.createElement('button');
drawBtn.textContent = "Draw";
drawBtn.classList = 'drawBtn';
topDiv.appendChild(drawBtn);

const gridSize = document.createElement('button');
gridSize.textContent = "Grid Size";
gridSize.classList = 'gridSize';
topDiv.appendChild(gridSize);

const rainbow = document.createElement('button');
rainbow.classList = 'rainbow';
rainbow.textContent = 'Rainbow Mode';
topDiv.appendChild(rainbow);

const eraser = document.createElement('button');
eraser.textContent = "Erase";
eraser.classList = 'eraser';
topDiv.appendChild(eraser);

drawBtn.addEventListener('click', () => {
      currentTool = 'draw'; 
})

rainbow.addEventListener('click', () => {
      currentTool = 'rainbow'; 
})

eraser.addEventListener('click', () => {
    currentTool = 'eraser';
})

function getRandomColor() {
            const r = Math.floor(Math.random() * 256 );
            const g = Math.floor(Math.random() * 256 );
            const b = Math.floor(Math.random() * 256 );
            return `rgb(${r},${g},${b})`;
        };

const resetBtn = document.createElement('button');
resetBtn.classList = 'reset';
resetBtn.textContent = 'Reset';
topDiv.appendChild(resetBtn);


const colorPick = document.createElement('input');
colorPick.type = 'color';
topDiv.appendChild(colorPick);

resetBtn.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.gridDiv');
    allSquares.forEach((square) => {
        square.style.backgroundColor = "";
    })
});

let row = 16;
let col = 16;

function makeDiv(row, col) {
    container.innerHTML = "";
    
    for(let i=0; i < (row * col); i++) {
        const sketchArea = 512/row;
        const grid = document.createElement('div');
        grid.classList.add('gridDiv');
        grid.style.width = `${sketchArea}px`;
        grid.style.height = `${sketchArea}px`;

        grid.addEventListener('mouseover', () => {
            if(isDrawing){
                if(currentTool === 'draw'){
            grid.style.backgroundColor = colorPick.value;}
            else if(currentTool === 'rainbow') {
                grid.style.backgroundColor = getRandomColor();
            } else if(currentTool === 'eraser'){
                grid.style.backgroundColor = '';
            }
        }
    
        });

        container.appendChild(grid);
    }
}


makeDiv(row,col);
document.body.appendChild(container);


gridSize.addEventListener('click', () => {
    const input = prompt("New Grid Values:");
    const size = parseInt(input);    
    if(size && size > 0 && size <=100) {
        row = col = size;
        makeDiv(row,col);}
        else {
            alert("Please Enter a valid number between 1 to 100!");
        }
    }
        );

const bottomDiv = document.createElement('div');
bottomDiv.id = 'bottomDiv';
document.body.appendChild(bottomDiv);

const footer = document.createElement('p');
footer.textContent = 'Sketch-A-Etch, Project Made by Shubham Tiwari - The Odin Project';
footer.setAttribute('style', 'background-color: black; color: white; border: 2px solid green; padding: 6px;');
bottomDiv.appendChild(footer);