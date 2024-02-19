let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clcik");
    if (turn0) {
      //player0
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "x";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Va = boxes[pattern[0]].innerText;
    let pos2Va = boxes[pattern[1]].innerText;
    let pos3Va = boxes[pattern[2]].innerText;

    if(pos1Va != "" && pos2Va !="" && pos3Va != ""){
      if(pos1Va === pos2Va && pos2Va === pos3Va){
        console.log("Winner");
      }
    }
  }
};
