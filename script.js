let div = document.querySelectorAll(".box");
let restat = document.querySelector("#reset");
let newgame = document.querySelector("#New");
let msg = document.querySelector(".msg");
let msgp = document.querySelector("#msgp");

let turno = true;
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

div.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button is clicked");
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disbalebox=()=>
    {
        for(let box of div)
            {
                box.disabled=true;
            }
    }

 const showwinner=(winner)=>
    {
        msgp.innerText=`congratulation winner is ${winner}`;
        msg.classList.remove("hide");
        disbalebox();
         
    }


const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = div[pattern[0]].innerText;
    let pos2 = div[pattern[1]].innerText;
    let pos3 = div[pattern[2]].innerText;

    if ((pos1 != "" && pos2 != "", pos3 != "")) {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1);
      }
    }
  }
};

const reset=()=>
    {
        turno=true;
        msg.classList.add("hide");
        enablebox();
    }
const enablebox=()=>
    {
        for(let box of div)
            {
                box.disabled=false;
                box.innerText="";
            }
    }

    restat.addEventListener("click",reset);
    newgame.addEventListener("click",reset);