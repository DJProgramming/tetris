var tetrisPieceTypes = {
  o: {
    offsets: {
      one: [0, 1, 10, 11],
      two: [0, 1, 10, 11],
      three: [0, 1, 10, 11],
      four: [0, 1, 10, 11]
    },
    bottomCells: {
      one: [10, 11],
      two: [10, 11],
      three: [10, 11],
      four: [10, 11]
    },
    leftCells: {
      one: [0, 10],
      two: [0, 10],
      three: [0, 10],
      four: [0, 10]
    },
    rightCells: {
      one: [1, 11],
      two: [1, 11],
      three: [1, 11],
      four: [1, 11]
    },
    color: '#0ff'
  },
  i: {
    offsets: {
      one: [-10, 0, 10, 20],
      two: [-1, 0, 1, 2],
      three: [-10, 0, 10, 20],
      four: [-1, 0, 1, 2]
    },
    bottomCells: {
      one: [20],
      two: [-1, 0, 1, 2],
      three: [20],
      four: [-1, 0, 1, 2]
    },
    leftCells: {
      one: [-10, 0, 10, 20],
      two: [-1],
      three: [-10, 0, 10, 20],
      four: [-1]
    },
    rightCells: {
      one: [-10, 0, 10, 20],
      two: [2],
      three: [-10, 0, 10, 20],
      four: [2]
    },
    color: '#0fa'
  },
  s: {
    offsets: {
      one: [0, 1, 9, 10],
      two: [-11, -1, 0, 10],
      three: [0, 1, 9, 10],
      four: [-11, -1, 0, 10]
    },
    bottomCells: {
      one: [1, 9, 10],
      two: [-1, 10],
      three: [1, 9, 10],
      four: [-1, 10]
    },
    leftCells: {
      one: [0, 9],
      two: [-11, -1, 10],
      three: [0, 9],
      four: [-11, -1, 10]
    },
    rightCells: {
      one: [1, 10],
      two: [-11, 0, 10],
      three: [1, 10],
      four: [-11, 0, 10]
    },
    color: '#0f0'
  },
  z: {
    offsets: {
      one: [-1, 0, 10, 11],
      two: [-10, -1, 0, 9],
      three: [-1, 0, 10, 11],
      four: [-10, -1, 0, 9]
    },
    bottomCells: {
      one: [-1, 10, 11],
      two: [0, 9],
      three: [-1, 10, 11],
      four: [0, 9]
    },
    leftCells: {
      one: [-1, 10],
      two: [-10, -1, 9],
      three: [-1, 10],
      four: [-10, -1, 9]
    },
    rightCells: {
      one: [0, 11],
      two: [-10, 0, 9],
      three: [0, 11],
      four: [-10, 0, 9]
    },
    color: '#f00'
  },
  l: {
    offsets: {
      one: [-10, 0, 10, 11],
      two: [-1, 0, 1, 9],
      three: [-11, -10, 0, 10],
      four: [-9, -1, 0, 1]
    },
    bottomCells: {
      one: [10, 11],
      two: [0, 1, 9],
      three: [-11, 10],
      four: [-1, 0, 1]
    },
    leftCells: {
      one: [-10, 0, 10],
      two: [-1, 9],
      three: [-11, 0, 10],
      four: [-9, -1]
    },
    rightCells: {
      one: [-10, 0, 11],
      two: [1, 9],
      three: [-10, 0, 10],
      four: [-9, 1]
    },
    color: 'orange'
  },
  j: {
    offsets: {
      one: [-10, 0, 9, 10],
      two: [-11, -1, 0, 1],
      three: [-10, -9, 0, 10],
      four: [-1, 0, 1, 11]
    },
    bottomCells: {
      one: [9, 10],
      two: [-1, 0, 1],
      three: [-9, 10],
      four: [-1, 0, 11]
    },
    leftCells: {
      one: [-10, 0, 9],
      two: [-11, -1],
      three: [-10, 0, 10],
      four: [-1, 11]
    },
    rightCells: {
      one: [-10, 0, 10],
      two: [-11, 1],
      three: [-9, 0, 10],
      four: [1, 11]
    },
    color: '#00f'
  },
  t: {
    offsets: {
      one: [-1, 0, 1, 10],
      two: [-10, -1, 0, 10],
      three: [-10, -1, 0, 1],
      four: [-10, 0, 1, 10]
    },
    bottomCells: {
      one: [-1, 1, 10],
      two: [-1, 10],
      three: [-1, 0, 1],
      four: [1, 10]
    },
    leftCells: {
      one: [-1, 10],
      two: [-10, -1, 10],
      three: [-10, -1],
      four: [-10, 0, 10]
    },
    rightCells: {
      one: [1, 10],
      two: [-10, 0, 10],
      three: [-10, 1],
      four: [-10, 1, 10]
    },
    color: '#f0f'
  }
}

class TetrisPiece {
  constructor(rootCell, type, orientation) {
    this.rootCell = rootCell;
    this.type = type;
    this.orientation = orientation;
  }
}

var tetrisControl = {
  screenHeight: '',
  boardHeight: '',
  cellArray: [],
  numberOfCells: 220,
  numberOfColumns: 10,
  cellSize: 40,
  timingInterval: 200,
  currentDropFrame: 0,
  dropTimingRate: 4,
  pieceInPlay: '',
  lockSound: new Audio('./audio/click.mp3'),
  currentTimeout: '',
  currentRootCell: 4,
  rowsDestroyed: 0,
  isPaused: false,
  canMove: true,
  isMoving: false,
  canShift: false,
  shiftLeft: false,
  shiftRight: false,
  keysPressed: {}
}

var setBoardsize = function() {
  tetrisControl.screenHeight = $(window).height();
  tetrisControl.boardHeight = Math.floor(tetrisControl.screenHeight * 0.7);
  tetrisControl.cellSize = Math.floor(tetrisControl.boardHeight / 20);
}

var tetrisLogo = function() {
  var $logoContainer = $('<div class="logo-container">').css('height', `${tetrisControl.screenHeight * 0.15}`);
  var $logo = $('<h1 id="tetris">Tetris</h1>').css('display', 'block').css('font-size', `${tetrisControl.screenHeight * 0.1}px`);
  $logoContainer.append($logo);
  $('body').prepend($logoContainer);
}

var createMenu = function() {
  var $menu = $('<div class="menu">').css('height', `${tetrisControl.screenHeight * 0.15}px`);

  var $startButton = $('<button id="start" class="menu-button">').text('Start').css('width', '8em').css('height', `${tetrisControl.screenHeight * 0.06}px`);
  $menu.append($startButton);
  // var $pauseButton = $('<button id="pause">').text('Pause').css('width', '8em').css('height', '4em');
  // $menu.append($pauseButton);
  var $rows = $('<div id="row-score-display" class="menu-display">0</div>').css('height', `${tetrisControl.screenHeight * 0.05}px`).css('fontSize', `${tetrisControl.screenHeight * 0.04}px`);
  $menu.append($rows);

  var $resetButton = $('<button id="reset" class="menu-button">').text('Reset').css('width', '8em').css('height', `${tetrisControl.screenHeight * 0.06}px`);
  $menu.append($resetButton);

  $('body').append($menu);

  $('#start').on('click', start);
  // $('#pause').on('click', pause);
  $('#reset').on('click', reset);
  // gameLoop();
}


// used to recalculate the dimensions of the board and display updated board when window is resized
var resizePage = function() {
  setBoardsize();
  // board
  $('.board').css('width', tetrisControl.cellSize * tetrisControl.numberOfColumns).css('height', tetrisControl.cellSize * tetrisControl.numberOfColumns * 2);
  $('.cell').css('width', `${tetrisControl.cellSize}`).css('height', `${tetrisControl.cellSize}`);
  // logo
  $('.logo-container').css('height', `${tetrisControl.screenHeight * 0.15}px`);
  $('#tetris').css('font-size', `${tetrisControl.screenHeight * 0.1}px`);
  // menu
  $('.menu-button').css('height', `${tetrisControl.screenHeight * 0.06}px`);
  $('.menu-display').css('height', `${tetrisControl.screenHeight * 0.06}px`).css('fontSize', `${tetrisControl.screenHeight * 0.05}px`);
}

var initializeCellArray = function() {
  for(let i = 0; i < tetrisControl.numberOfCells; i++) tetrisControl.cellArray[i] = 0;
}

var createPhysicalGrid = function() {
  var $board = $('<div class="board">');
  $board.css('width', `${tetrisControl.cellSize * tetrisControl.numberOfColumns}px`);
  for(let i = 0; i < tetrisControl.numberOfCells; i++) {
    // var $cell = $(`<div id="cell${i}" class="cell">${i}</div>`).css('width', `${tetrisControl.cellSize}`).css('height', `${tetrisControl.cellSize}`);
    var $cell = $(`<div id="cell${i}" class="cell"></div>`).css('width', `${tetrisControl.cellSize}`).css('height', `${tetrisControl.cellSize}`);
    $cell.css('color', 'white');
    $board.append($cell);
  }
  $('body').prepend($board);
  for(let i = 0; i < 20; i++) {
    $(`#cell${i}`).hide();
  }
}

var activateCell = function(number, color) {
  tetrisControl.cellArray[number] = 1;
  $(`#cell${number}`).css('background', color).css('color', color);
}

var deactivateCell = function(number) {
  tetrisControl.cellArray[number] = 0;
  $(`#cell${number}`).css('background', 'white').css('color', 'white');
}

var lockCell = function(number, color) {
  tetrisControl.cellArray[number] = 2;
  $(`#cell${number}`).css('background', color).css('color', color);
}

var emptyCell = function(number) {
  tetrisControl.cellArray[number] = 3;
  $(`#cell${number}`).css('background', 'white').css('color', 'white');
}

var clearBoard = function() {
  for(let i = 0; i < tetrisControl.numberOfCells; i++) {
    deactivateCell(i);
  }
}

var start = function() {
  tetrisControl.rowsDestroyed = 0;
  clearBoard();
  createNewPiece();
  tetrisControl.isPaused = false;
  gameLoop();
}

var pause = function() {
  // console.log('pause');
  // if(tetrisControl.isPaused) {
  //   tetrisControl.isPaused = false;
  //   tetrisControl.canMove = true;
  // } else {
  //   tetrisControl.isPaused = true;
  //   tetrisControl.canMove = false;
  // }
  // gameLoop();
}

var reset = function() {
  initializeCellArray();
  clearBoard();
  clearTimeout(tetrisControl.currentTimeout);
  tetrisControl.canMove = true;
  tetrisControl.isMoving = false;
  tetrisControl.isPaused = true;
  tetrisControl.rowsDestroyed = 0;
  $('#row-score-display').text('0');
}

var setupGame = function() {
  initializeCellArray();
  createPhysicalGrid();
  tetrisLogo();
  createMenu();

  for(let i = 0; i < tetrisControl.numberOfCells; i++) {
    if(i%10 < 3) {
      $(`#cell${i}`).on('click', function() {
        tetrisControl.shiftLeft = true;
      })
    } else if(i%10 > 6) {
      $(`#cell${i}`).on('click', function() {
        tetrisControl.shiftRight = true;
      })
    } else {
      $(`#cell${i}`).on('click', function() {
        if(!rotateCollisions()) {
          rotate();
        }
      })
    }
  }
}

var shiftDown = function(startIndex) {
  for(let i = startIndex+9; i >= 0; i--) {
    // cell has been deleted and cell above it is full
    if(tetrisControl.cellArray[i] === 3 && tetrisControl.cellArray[i-10] !== 0) {
      var color = $(`#cell${i-10}`).css('color');
      console.log('color', color);
      lockCell(i, color);
      emptyCell(i-10);
    }
    // cell has been deleted and cell above it is empty
    else if(tetrisControl.cellArray[i] === 3 && tetrisControl.cellArray[i-10] === 0) {
      deactivateCell(i);
    }
    // cell is full and cell above it is also full
    else if(tetrisControl.cellArray[i] === 2 && tetrisControl.cellArray[i-10] === 2) {
      var color = $(`#cell${i-10}`).css('color');
      console.log('color', color);
      lockCell(i, color);
      emptyCell(i-10);
    }
    // if cell is empty and cell above it is full
    else if(tetrisControl.cellArray[i] === 0 && tetrisControl.cellArray[i-10] === 2) {
      var color = $(`#cell${i-10}`).css('color');
      console.log('color', color);
      lockCell(i, color);
      deactivateCell(i-10);
    }
  }
}

var cellFull = function(number) {
  return (tetrisControl.cellArray[number] === 2 || tetrisControl.cellArray[number] === 3);
}

var rotateCollisions = function() {
  var collisionRight = false;
  var collisionLeft = false;
  var collision = false;
  var type = tetrisControl.pieceInPlay.type;
  var orientation = tetrisControl.pieceInPlay.orientation;
  var nextOrientation;
  // console.log(nextOrientation);
  switch (orientation) {
    case 'one':
      nextOrientation = 'two';
      break;
    case 'two':
      nextOrientation = 'three';
      break;
    case 'three':
      nextOrientation = 'four';
      break;
    case 'four':
      nextOrientation = 'one';
      break;
    default:
  }

  var leftMost = eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.leftCells.${nextOrientation}[0]`)%10;

  var rightMost = eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.rightCells.${nextOrientation}[0]`)%10;

  var bottomMost = eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.bottomCells.${nextOrientation}[0]`);

  for(let i = 0; i < eval(`tetrisPieceTypes.${type}.rightCells.${nextOrientation}`).length; i++) {
    leftMost = eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.leftCells.${nextOrientation}[${i}]`)%10 < leftMost ? eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.leftCells.${nextOrientation}[${i}]`)%10 : leftMost;

    rightMost = eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.rightCells.${nextOrientation}[${i}]`)%10 > rightMost ? eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.rightCells.${nextOrientation}[${i}]`)%10 : rightMost;

    bottomMost = eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.bottomCells.${nextOrientation}[${i}]`) > bottomMost ? eval(`${tetrisControl.currentRootCell} + tetrisPieceTypes.${type}.bottomCells.${nextOrientation}[${i}]`) : bottomMost;

    // if(lets leave)
    // bc i want to leave
    // and we should leave
    // now
    // :)
    // :)))))))))))))))
    // return true

    console.log('eval', cellFull(tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.rightCells.${nextOrientation}[${i}]`)));

    // check for right wall clipping
    if(cellFull(tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.rightCells.${nextOrientation}[${i}]`)) || ((tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.rightCells.${nextOrientation}[${i}]`))%10 === 0 && (tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.leftCells.${nextOrientation}[${i}]`))%10 > 0)) {
      console.log('clipping right');
      collision = true;
    }
    // check for left wall clipping
    else if(cellFull(tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.leftCells.${nextOrientation}[${i}]`)) || ((tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.leftCells.${nextOrientation}[${i}]`))%10 === 9 && (tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.rightCells.${nextOrientation}[${i}]`))%10 < 9)) {
      console.log('clipping left');
      collision = true;
    }
    // check for bottom clipping
    else if(tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.bottomCells.${nextOrientation}[${i}]`) >= tetrisControl.numberOfCells-10) {
      console.log('bottom');
      collision = true;
    }
  }
  // if a rotation would clip the side of the board
  if(Math.abs(rightMost - leftMost) > 4 || Math.abs(leftMost - rightMost) > 4) {
    console.log('clipping');
    collision = true;
  }
  // if a rotation would clip the bottom of the board
  if(bottomMost >= tetrisControl.numberOfCells) {
    collision = true;
    console.log('nah');
  }
  return collision;
}

var destroyRow = function() {
  for(let i = 0; i < tetrisControl.numberOfCells; i+=10) {
    var count = 0;
    while(tetrisControl.cellArray[i+count] === 2) {
      if(count >= 10) break;
      count++;
    }
    if(count === 10) {
      for(let cell = 0; cell < 10; cell++) {
        emptyCell(i+cell);
        // tetrisControl.cellArray[i+cell] = 3;
        // emptyCell(i+cell);
      }
      tetrisControl.rowsDestroyed++;
      $('#row-score-display').text(tetrisControl.rowsDestroyed);
      shiftDown(i);
    }
  }
}

var shiftLeft = function() {
  var canShiftLeft = true;
  var type = tetrisControl.pieceInPlay.type;
  var orientation = tetrisControl.pieceInPlay.orientation;
  for(let i = 0; i < eval(`tetrisPieceTypes.${type}.leftCells.${orientation}`).length; i++) {
    if(cellFull(tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.leftCells.${orientation}[${i}]`)-1) || (tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.leftCells.${orientation}[${i}]`))%10 === 0) {
      canShiftLeft = false;
    }
  }
  if(canShiftLeft) {
    tetrisControl.currentRootCell -= 1;
  }
  tetrisControl.shiftLeft = false;
}

var shiftRight = function() {
  var canShiftRight = true;
  var type = tetrisControl.pieceInPlay.type;
  var orientation = tetrisControl.pieceInPlay.orientation;
  for(let i = 0; i < eval(`tetrisPieceTypes.${type}.rightCells.${orientation}`).length; i++) {
    if(cellFull(tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.rightCells.${orientation}[${i}]`)+1) || (tetrisControl.currentRootCell + eval(`tetrisPieceTypes.${type}.rightCells.${orientation}[${i}]`))%10 === 9) {
      canShiftRight = false;
    }
  }
  if(canShiftRight) {
    tetrisControl.currentRootCell += 1;
  }
  tetrisControl.shiftRight = false;
}

var rotate = function() {
  switch (tetrisControl.pieceInPlay.orientation) {
    case 'one':
      tetrisControl.pieceInPlay.orientation = 'two';
      break;
    case 'two':
      tetrisControl.pieceInPlay.orientation = 'three';
      break;
    case 'three':
      tetrisControl.pieceInPlay.orientation = 'four';
      break;
    case 'four':
      tetrisControl.pieceInPlay.orientation = 'one';
      break;
    default:
  }
}

var topReached = function() {
  for(let i = 20; i < 30; i++) if(tetrisControl.cellArray[i] === 2) return true;
  return false;
}

var resetTimingInterval = function() {
  tetrisControl.timingInterval = 200;
}

var increaseTimingInterval = function() {
  tetrisControl.timingInterval = 50;
}

var resetRootCell = function() {
  tetrisControl.currentRootCell = 4;
}

var dropPiece = function() {
  tetrisControl.currentDropFrame >= tetrisControl.dropTimingRate ? tetrisControl.currentDropFrame = 0 : tetrisControl.currentDropFrame++;
  tetrisControl.isMoving = true;
  tetrisControl.canMove = true;
  var type = tetrisControl.pieceInPlay.type;
  var orientation = tetrisControl.pieceInPlay.orientation;
  var bottomCellsArray = eval(`tetrisPieceTypes.${tetrisControl.pieceInPlay.type}.bottomCells.${tetrisControl.pieceInPlay.orientation}`);

  if(topReached()) {
    clearTimeout(tetrisControl.currentTimeout);
    return;
  }

  for(let i = 0; i < bottomCellsArray.length; i++) {
    if(cellFull(bottomCellsArray[i]+tetrisControl.currentRootCell+10) || (bottomCellsArray[i]+tetrisControl.currentRootCell) >= tetrisControl.numberOfCells-10) {
      tetrisControl.canMove = false;
      tetrisControl.isMoving = false;

      clearTimeout(tetrisControl.currentTimeout);
      resetTimingInterval();
    }
  }
  tetrisControl.canShift = false;
  for(let i = 0; i < 4; i++) {
    activateCell(eval(`tetrisControl.currentRootCell+tetrisPieceTypes.${type}.offsets.${orientation}[${i}]`), eval(`tetrisPieceTypes.${type}.color`));
  }
  if(tetrisControl.canMove) {
    tetrisControl.currentTimeout = setTimeout(function() {
      for(let i = 0; i < 4; i++) {
        deactivateCell(eval(`tetrisControl.currentRootCell+tetrisPieceTypes.${type}.offsets.${orientation}[${i}]`));
      }
      if(tetrisControl.currentDropFrame === tetrisControl.dropTimingRate) {
        tetrisControl.currentDropFrame = 0;
        tetrisControl.currentRootCell += 10;
      }
      tetrisControl.currentDropFrame++;

      if(tetrisControl.shiftLeft) {
        shiftLeft();
      } else if(tetrisControl.shiftRight) {
        shiftRight();
      }
      dropPiece();
    }, tetrisControl.timingInterval)
  } else {
    for(let i = 0; i < 4; i++) {
      lockCell(eval(`tetrisControl.currentRootCell+tetrisPieceTypes.${type}.offsets.${orientation}[${i}]`));
    }
  }
}

var generateRandomPiece = function() {
  var pieceTypes = Object.keys(tetrisPieceTypes);
  var orientations = Object.keys(tetrisPieceTypes.o.offsets);
  var randomPiece = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
  var randomOrientation = orientations[Math.floor(Math.random() * orientations.length)];

  return new TetrisPiece(tetrisControl.currentRootCell, randomPiece, randomOrientation);
}

var createNewPiece = function() {
  resetRootCell();
  tetrisControl.pieceInPlay = generateRandomPiece();
}

var gameLoop = function() {
  if(!tetrisControl.isMoving) {
    createNewPiece();
    console.log(tetrisControl.pieceInPlay);
    destroyRow();
    if(!tetrisControl.isPaused) dropPiece();
  } else {
    $(document).keydown(function(k) {
      console.log(k.keyCode);

      if(tetrisControl.keysPressed[k.keyCode] === false) return;
      tetrisControl.keysPressed[k.keyCode] = false;
      // when r key or spacebar is pressed
      if(k.keyCode === 82 || k.keyCode === 32) {
        console.log("rotate");

        if(!rotateCollisions()) {
          rotate();
        }
      }
      // when left arrow is pressed
      if(k.keyCode === 37) {
        tetrisControl.keysPressed[k.keyCode] = true;
        tetrisControl.shiftLeft = true;
      }
      // when right arrow is pressed
      else if (k.keyCode === 39) {
        tetrisControl.keysPressed[k.keyCode] = true;
        tetrisControl.shiftRight = true;
      }
      // when down arrow is pressed
      else if (k.keyCode === 40) {
        increaseTimingInterval();
      }
      // when up arrow is pressed
      else if (k.keyCode === 38) {
        resetTimingInterval();
      }
    });
    $(document).keyup(function(k) {
      tetrisControl.keysPressed[k.keyCode] = true;
    })
  }
  setTimeout(function() {
    gameLoop();
  }, 100)
}
