const startColor = document.querySelector('.selected-btn').id;

createGrid(16);

const selectBtns = document.querySelectorAll('.select-btns');
selectBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const btnId = e.originalTarget.id;
        if(btnId !== "reset"){
            const selectedBtn = document.querySelector('.selected-btn');
            chooseColor(btnId, selectedBtn.id);
            selectedBtn.classList.remove('selected-btn');
            e.originalTarget.classList.add('selected-btn');
        }
        else{
            resetGrid();
        }
    });
});

function createGrid(gridNum) {
    let root = document.documentElement;
    const container = document.querySelector('#sketch-con');

    root.style.setProperty('--grid-num', gridNum);

    for(i=0; i < Math.pow(gridNum, 2); i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);

        chooseColor(startColor, null);
    }
}

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

function chooseColor(btnId, selectedBtn){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        switch(selectedBtn){
            case "black":
                pixel.removeEventListener('mouseout', paintBlack);
                break;
            case "white":
                pixel.removeEventListener('mouseout', paintWhite);
                break;
            case "random":
                pixel.removeEventListener('mouseout', paintRandom);
                break;
            case null:
                break;
            default:
                console.log(selectedBtn);
        }
        switch(btnId){
            case "black":
                pixel.addEventListener('mouseout', paintBlack);
                break;
            case "white":
                pixel.addEventListener('mouseout', paintWhite);
                break;
            case "random":
                pixel.addEventListener('mouseout', paintRandom);
                break;
            default:
                console.log(btnId);    
        }
    });
}

function paintBlack(e){
    e.target.style.backgroundColor = "black";
}

function paintWhite(e){
    e.target.style.backgroundColor = "white";
}

function paintRandom(e){
    e.target.style.backgroundColor = "orange";
}