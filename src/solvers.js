/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme

  // make the empty board
  var possibleSolutions = findAllNRooksSolutions(n);
  solution = possibleSolutions[0];

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log('all possible solutions ' + possibleSolutions.length);
  return solution;
};

window.findAllNRooksSolutions = function(n) {
  var solutions = [];

  var emptyBoard = new Board({'n':n});
  var rows = emptyBoard.rows();

  var rounds = n;

  var makeSolutions = function(rooks, board){ // index? 
    var addOnePiece = function(board, rowIndex, colIndex){
      var newBoard = new Board(board.rows());
      
      newBoard.togglePiece(rowIndex, colIndex);
      
      return newBoard; 
    };
    
    if(board.hasAnyRowConflicts || board.hasAnyColConflicts){
      return;
    }

    if(rooks === n){ 
      solutions.push(board.rows());
      return;
    }
    // if(board === undefined){
    //   board = new Board({'n': rooks});
    // }

    for(var colIndex = 0; colIndex < n; colIndex++){
      // for(var j = 0; j < n; j++){
      makeSolutions( (rooks+1), addOnePiece(board, rooks, colIndex) );
    }
  };

  makeSolutions(0, emptyBoard);



  var makeSolutionBoard = function() {
    for(var rowIndex=0; rowIndex < rows.length; rowIndex++) {
      for(var colIndex = 0; colIndex< rows.length; colIndex++) {
        emptyBoard.togglePiece(rowIndex,colIndex);
        if(emptyBoard.hasRowConflictAt(rowIndex) || emptyBoard.hasColConflictAt(colIndex)) {
          emptyBoard.togglePiece(rowIndex,colIndex);
        }
      }
    } 
  };


  // var possibleSolutions = [];
  // for(var colStart = 0; colStart < n; colStart++){
  //   var emptyBoard = new Board({'n':n});
  //   var currentBoard = emptyBoard;
  //   var colIndex = colStart;

  //   for(var rooks = 0; rooks < n; rooks++){
  //     currentBoard.togglePiece(rooks, colIndex);
    
  //     if(colIndex === n - 1){
  //       colIndex = 0;
  //     } else {
  //       colIndex++;
  //     } 
  //   }
  //   possibleSolutions.push(currentBoard.rows());
  // }
  // return possibleSolutions;
  return solutions; // check later
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(n){
    if(n === 0){
      return 1;
    }
    if(n === 1){
      return 1;
    }
    return n * factorial(n-1);
  };
  var solutionCount = factorial(n);
 
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution; //fixme

  var nRooksSolutions = findAllNRooksSolutions(n);
  var nQueensSolutions = [];

  for(var i = 0; i< nRooksSolutions.length; i++) {
    var currentBoard = new Board(nRooksSolutions[i]);
    // debugger;
    if (!(currentBoard.hasAnyMajorDiagonalConflicts()) && !(currentBoard.hasAnyMinorDiagonalConflicts())) {
      nQueensSolutions.push(currentBoard.rows());
    }
  }
  solution = nQueensSolutions[0];
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// var getEmptyBoard = function(n) {
//   var emptyBoard = [];
//   // generate an empty board and load it in
//   for(var i=0; i<n; i++){
//     var row = [];
//     emptyBoard = row;
//     for(var j=0;j<n; j++) {
//       row.push(0);
//     }
//   }
// };



