createGrid(16);

function createGrid(gridNum) {
    let root = document.documentElement;
    const container = document.querySelector('#sketch-con');

    root.style.setProperty('--grid-num', gridNum);

    for(i=0; i < Math.pow(gridNum, 2); i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);

        div.addEventListener("mouseout", function(e) {
            e.target.style.backgroundColor = "black";
        })
    }
}

const reset = document.querySelector('button');
reset.addEventListener('click', function(e) {
    resetGrid();
})

function resetGrid() {
    let valid = false;
    let userInput = null;

    while(valid === false){
        userInput = parseInt(prompt("Number of squares for new grid:"));
        if(isNumber(userInput)){
            if(userInput <= 100 && userInput >0){
                valid = true;
            }
            else{
                alert("Please put in a number between 0 and 100.");
            }
        }
        else{
            alert("Invalid entry. Please try again.");
        }
    }
    
    const grid = document.querySelectorAll('.pixel');
    grid.forEach(div => {
        div.remove();
    });

    createGrid(userInput);
}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 