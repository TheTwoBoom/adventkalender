var currentPlayer=1;
// Declare "grid"" as a 2-dimensional array
var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);

// Initialise the grid
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

function clickCell(x,y) {
  if (grid[x][y]>0) {
    alert("This cell is not empty");
  } else {
    if (currentPlayer==1) {
      document.getElementById("cell_"+x+"_"+y).style.color="#FF0000";
      document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } else {
       document.getElementById("cell_"+x+"_"+y).style.color="#0000FF";
       document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
}

function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 currentPlayer=1; 
}
