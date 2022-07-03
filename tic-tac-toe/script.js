const placeI = document.querySelectorAll('.item__place');
const arrWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let arrChoiceCross = [];
let arrChoiceZero = [];
counter = 0;
let strWC = 'Победил игрок X';
let strWZ = 'Победил игрок O';
let strDraw = 'Ничья, начните заново';
let new_game = document.getElementById('new_game');

// Выбор режима игры
new_game.addEventListener('click', ()=> {
    placeI.forEach(item => {
        item.addEventListener('click', choicePlaceTwoGamers)
    
    })
    newGame();
})
 function newGame() {
    placeI.forEach(item=> {
        item.firstChild.classList.remove('zero');
        item.firstChild.classList.remove('cross');
        item.style.background = '#fff';
         arrChoiceCross = [];
         arrChoiceZero = [];
        counter = 0;
    })
 }
// функци удаления события с клеток
function delEvent() {
    placeI.forEach(item => {
        item.removeEventListener('click', choicePlaceTwoGamers)
    
    })
}


// Два игрока 
function choicePlaceTwoGamers() {
    let etarget = event.target;
    document.getElementById('new_game').innerHTML = 'Новая Игра';
    if(etarget.classList=='zero' || etarget.classList=='cross' || etarget.firstChild.classList=='zero' || etarget.firstChild.classList=='cross'){
        alert("Выбери другую клетку");
        return;
    } 
        if(counter == 0 || counter%2 ==0 ) {
            etarget.firstChild.classList.add('cross')
            arrChoiceCross.push(getIndexArr(placeI));
            if (arrChoiceCross.length==5 ) {
                alert(strDraw);
                delEvent();
                return;
            }
            let winnerCross = 0;
            showWinner(arrChoiceCross,strLine,winnerCross,strWC);
            
        } else {
            etarget.firstChild.classList.add('zero')
            arrChoiceZero.push(getIndexArr(placeI));
            if (arrChoiceCross.length==5 ) {
                alert(strDraw);
                delEvent();
                return;
            }
            let winnerZero = 0;
            showWinner(arrChoiceZero,strLine,winnerZero, strWZ);
        } 
    counter++
}

// показывает победителя
function showWinner(arr,func, counter, StrW) {
    if (arr.length >2) {
        arrWin.forEach((array,index)=> {
            array.forEach(item => {
              if(arr.includes(item,0)) {
                counter++
              }; 
            })
            if (counter==3) {
                alert(StrW)
                func(index);
                delEvent()
                counter = 0;
                return;
            } else {
                counter = 0;
            }
        })
    }
}


// Линия зачеркивания 
function strLine(index) {
switch (index) {
    case 0:
        placeI[0].style.background = 'green';
        placeI[1].style.background = 'green';
        placeI[2].style.background = 'green';
    break;
    case 1:
        placeI[3].style.background = 'green';
        placeI[4].style.background = 'green';
        placeI[5].style.background = 'green';
    break;
    case 2:
        placeI[6].style.background = 'green';
        placeI[7].style.background = 'green';
        placeI[8].style.background = 'green';
    break;
    case 3:
        placeI[0].style.background = 'green';
        placeI[3].style.background = 'green';
        placeI[6].style.background = 'green';
    break;
    case 4:
        placeI[1].style.background = 'green';
        placeI[4].style.background = 'green';
        placeI[7].style.background = 'green';
    break;
    case 5:
        placeI[2].style.background = 'green';
        placeI[5].style.background = 'green';
        placeI[8].style.background = 'green';
    break;
    case 6:
        placeI[0].style.background = 'green';
        placeI[4].style.background = 'green';
        placeI[8].style.background = 'green';
    break;
    case 7:
        placeI[2].style.background = 'green';
        placeI[4].style.background = 'green';
        placeI[6].style.background = 'green';
    break;
    default:
        break;
    }
}
// Индекс нажатой клетки в массиве
function getIndexArr(arr) {
    let etarget = event.target;
        for (let i = 0; i<=arr.length-1; i++) {
            if (arr[i]==etarget) {
                return i;
                
            }
        }
    }