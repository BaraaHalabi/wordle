let tileDisplay = document.querySelector('.tile-container');
let keyboard = document.querySelector('.key-container');

const wordle = 'SMILE';

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<'
];

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']    
];

for(let i = 0; i < guessRows.length; i ++) {
    const row = document.createElement('div');
    row.id = 'guess-row-' + i;

    for(let j = 0; j < guessRows[i].length; j ++) {
        const tile = document.createElement('div');
        tile.id = 'guess-row-' + i + '-tile-' + j;
        tile.classList.add('tile');
        row.appendChild(tile);
    }

    tileDisplay.appendChild(row);
}

keys.forEach(key => {
    const keyButton = document.createElement('button');
    keyButton.innerHTML = key;
    keyButton.id = key;
    keyButton.onclick = () => { handleClick(key) };

    keyboard.appendChild(keyButton);
});

let handleClick = (key) => {
    console.log('you clicked ' + key);
}
