// da sich die Größe des Spielfeldes sich im Spielverlauf nicht ändert, hab ich das Array schon mit Werten befüllt
let fields = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

// das Spiel beginnt das Kreuz
let currentShape = 'circle';

// zum zählen der Spielzüge
let counter = 0;

// das Spielfeld wird in den Ursprungszustand versetzt
function init() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`circle-${i}`).classList.add('d-none');
        document.getElementById(`cross-${i}`).classList.add('d-none');
    }
    document.getElementById('winner-screen-cross').classList.add('d-none');
    document.getElementById('winner-screen-circle').classList.add('d-none');
    document.getElementById('winner-screen-nobody').classList.add('d-none');
    fields = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    document.getElementById('end-screen').classList.add('d-none');
    counter = 0;
    activatePlayer1();
}

function fillShape(id) {
    if (fields[id] != 'cross' && fields[id] != 'circle') {


        // Kreuz und Kreis wechseln sich ab
        if (currentShape == "circle") {
            currentShape = 'cross';
            activatePlayer2();
        } else {
            currentShape = 'circle'
            activatePlayer1()
        }
        fields[id] = currentShape;
        console.log(fields);

        counter++;

        // die gesetzte Form wird mit draw() sichtbar gemacht
        draw();

        let winner = checkForWin();
        checkWinner(winner);
    }
}

function checkWinner(winner) {
    if (winner == 'cross') {
        document.getElementById('winner-screen-cross').classList.remove('d-none');
        showEndScreen();
    }
    if (winner == 'circle') {
        document.getElementById('winner-screen-circle').classList.remove('d-none');
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById('end-screen').classList.remove('d-none');
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }
    }
}



function checkForWin() {
    let winner;

    switch (true) {
        case fields[0] == fields[1] && fields[1] == fields[2]:
            winner = fields[0];
            break;

        case fields[3] == fields[4] && fields[4] == fields[5]:
            winner = fields[3];
            break;

        case fields[6] == fields[7] && fields[7] == fields[8]:
            winner = fields[6];
            break;

        case fields[0] == fields[4] && fields[4] == fields[8]:
            winner = fields[0];
            break;

        case fields[2] == fields[4] && fields[4] == fields[6]:
            winner = fields[2];
            break;

        case fields[0] == fields[3] && fields[3] == fields[6]:
            winner = fields[0];
            break;

        case fields[1] == fields[4] && fields[4] == fields[7]:
            winner = fields[1];
            break;

        case fields[2] == fields[5] && fields[5] == fields[8]:
            winner = fields[2];
            break;

        default:
            winner = 'nobody';
    }
    checkCounter();
    console.log(winner + ' has win');
    return winner;
}

function checkCounter() {
    if (counter == 9) {
        document.getElementById('winner-screen-nobody').classList.remove('d-none');
        showEndScreen();
    }
}

function activatePlayer2() {
    document.getElementById('player-1').classList.add('player-inactive');
    document.getElementById('player-2').classList.remove('player-inactive');
}

function activatePlayer1() {
    document.getElementById('player-2').classList.add('player-inactive');
    document.getElementById('player-1').classList.remove('player-inactive');
}