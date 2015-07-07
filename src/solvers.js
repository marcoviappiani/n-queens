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
  var possibleSolutions = [];
  // var rooks = 0;
  for(var colStart = 0; colStart < n-1; colStart++){
    var currentBoard = new Board({n:n});
    var colIndex = colStart;

    for(var rooks = 0; rooks < n - 1; rooks++){
      currentBoard.togglePiece(rooks, colIndex);
    
      if(colIndex === n - 1){
        colIndex = 0;
      } else {
        colIndex++;
      } 

      // rooks++;
    } 
    possibleSolutions.push(currentBoard);
  }

  // toggleBoard(y0,y1,y2);

  // var colCounter = 0;
  // for(var rowIndex =0; rowIndex < n; rowIndex++) {
  //   var allRows = emptyBoard.rows();
  //   var row = allRows[rowIndex];
  //   while(colCounter < n) {
  //     toggleOneRow(rowIndex,colCounter);
  //     colCounter++;
  //   }
  // } maybe there was a bracket here

  // togglePiece(rowIndex, colIndex)

  //place the rook
  


  //check for collisions
  // if it has no collisions, push to solutions



  // (y0,y1,y2,y3)

  

  // toggle
  // test if it has conflicts
  // repeat

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

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



