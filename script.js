//making a container div
const container = document.createElement('div');
container.id = 'container';

//function to make 16x16 square grid of divs

const divGrid = function() {
    for(let i=0; i<257; i++) {
        const grid = document.createElement('div');
        grid.setAttribute('style','aspect-ratio: 1:1; border:1px; background-color: blue');
    }
}

container.appendChild(divGrid);
document.body.appendChild(container);