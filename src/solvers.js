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
  var possibleSolutions = findAllSolutions(n,"hasAnyRooksConflicts");
  solution = possibleSolutions[0];

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log('all possible solutions ' + possibleSolutions.length);
  return solution;
};

window.findAllSolutions = function(n,validator) {
  var solutions = [];
  var solution;

  var emptyBoard = new Board({'n':n});
  var rooks = 0;

  var makeSolutions = function(rooks, currBoard){ // index? 
    if(currBoard[validator]()){
      return;
    }

    if(rooks === n){ 
      solution = _.map(currBoard.rows(), function(row) {
        return row.slice();
      });
      solutions.push(solution);
      return;
    }
    for(var colIndex = 0; colIndex < n; colIndex++){
      currBoard.togglePiece(rooks,colIndex);
      makeSolutions(rooks + 1, currBoard);
      currBoard.togglePiece(rooks,colIndex);
    }
  };

  makeSolutions(0, emptyBoard);
  return solutions; 
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

  var board = new Board({n:n});
  var solution; //fixme

  var possibleSolutions = findAllSolutions(n,"hasAnyQueensConflicts");

  if(possibleSolutions.length > 0) {
    solution = possibleSolutions[0];
  } else {
    solution = board.rows();     
  }

  // var nRooksSolutions = findAllNRooksSolutions(n);
  // var nQueensSolutions = [];

  // for(var i = 0; i< nRooksSolutions.length; i++) {
  //   var currentBoard = new Board(nRooksSolutions[i]);
  //   // debugger;
  //   if (!(currentBoard.hasAnyQueensConflicts()) {
  //     nQueensSolutions.push(currentBoard.rows());
  //   }
  // }
  // solution = nQueensSolutions[0];

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



