createGrid(16);

function createGrid(gridNum) {
    let root = document.documentElement;
    const container = document.querySelector('#sketch-con');

    root.style.setProperty('--grid-num', gridNum);

    for(i=0; i < Math.pow(gridNum, 2); i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);

        div.addEventListener("mouseover", function(e) {
            if(e.target.style.backgroundColor === "black"){
                e.target.style.backgroundColor = "orange";
            }
            else{
                e.target.style.backgroundColor = "black";
            }
        })
    }
}

