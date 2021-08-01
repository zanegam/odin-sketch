createGrid(16);

function createGrid(gridNum) {
    let root = document.documentElement;
    const container = document.querySelector('#sketch-con');

    root.style.setProperty('--grid-num', gridNum);

    for(i=0; i < Math.pow(gridNum, 2); i++){
        const div = document.createElement('div');
        const para = document.createElement('para');
        para.textContent = i+1;
        div.appendChild(para);
        container.appendChild(div);
    }
}