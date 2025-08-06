function createLine(numberOfLines){
    let container = document.getElementById('linesContainer')

    for(let i = 0; i < numberOfLines; i++){
        let line = document.createElement('div');
        line.className = 'line';
        linesContainer.appendChild(line);
    }
}
createLine(30)