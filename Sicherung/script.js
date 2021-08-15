let fields = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

let currentShape = 'cross';

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
}

function fillShape(id) {
    if (currentShape == "cross") {
        currentShape = 'circle';
    } else {
        currentShape = 'cross'
    }
    fields[id] = currentShape;
    console.log(fields);

    draw();
    let winner = checkForWin();
    checkWinner(winner);
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
    let winner = 'Nobody';

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
            winner = 'Nobody';
            break;
    }
    // console.log(winner + ' ist winnerer');
    return winner;
}