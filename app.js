//https://rapidapi.com/sheharyar566/api/random-words5/
//https://rapidapi.com/twinword/api/word-dictionary/


const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');

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

for(let i = 0; i < keys.length; i ++) {
    const keyButton = document.createElement('button');
    keyButton.innerHTML = keys[i];
    keyButton.id = keys[i];
    keyButton.onclick = () => { handleClick(keys[i]) };

    keyboard.appendChild(keyButton);
}

// keys.forEach(key => {
//     const keyButton = document.createElement('button');
//     keyButton.innerHTML = key;
//     keyButton.id = key;
//     keyButton.onclick = () => { handleClick(key) };

//     keyboard.appendChild(keyButton);
// });

let handleClick = (key) => {
    if(key == 'ENTER') checkRow();
    else if(key == '<') deleteLetter();
    else addLetter(key);
}

//variable declarations
let currentRow = 0, currentTile = 0;
let isGameOver = false;

const addLetter = (letter) => {
    if (currentTile >= 5 || currentRow >= 6) return;

    const tile = document.getElementById('guess-row-' + currentRow + '-tile-' + currentTile);
    tile.innerHTML = letter;
    guessRows[currentRow][currentTile] = letter;
    currentTile ++;
}

const deleteLetter = () => {
    if(currentTile <= 0) return;

    currentTile --;
    const tile = document.getElementById('guess-row-' + currentRow + '-tile-' + currentTile);
    tile.innerHTML = '';
    guessRows[currentRow][currentTile] = '';
}

const checkRow = () => {
    if(currentTile == 5) {
        const guess = guessRows[currentRow].join('');
        flipTile();
        if(guess == wordle) {
            showMessage('Magnificent!');
            isGameOver = true;
            return;
        } else {
            if(currentRow >= 5) {
                isGameOver = true;
                showMessage('Game Over!');
                return;
            }

            if(currentRow < 5) {
                currentRow ++;
                currentTile = 0;
            }
        }
    }
}


const showMessage = (message) => {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messageDisplay.appendChild(messageElement);

    setTimeout(() => {messageDisplay.removeChild(messageElement)}, 2000);
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guess-row-' + currentRow).childNodes;
    for(let i = 0; i < rowTiles.length; i ++) {
        // const tileLetter = guessRows[currentRow][i];

        //optional
        setTimeout(() => {
            // rowTiles[i].classList.add('flip');

            if(rowTiles[i].innerHTML == wordle[i]) {
                rowTiles[i].classList.add('green');
                document.querySelector('#' + rowTiles[i].innerHTML).classList.add('green');
            } else if(wordle.includes(rowTiles[i].innerHTML)) {
                rowTiles[i].classList.add('yellow');
                document.querySelector('#' + rowTiles[i].innerHTML).classList.add('yellow');
            } else {
                rowTiles[i].classList.add('grey');
                document.querySelector('#' + rowTiles[i].innerHTML).classList.add('grey');
            }
        }, 500 * i);
        
    }
}