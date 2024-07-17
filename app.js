let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#res");
let newgamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".message-container ");

let p1=true;
const winpatter=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box)=>
{
     box.addEventListener("click",()=>{
        console.log("Button was clicked");
        if(p1)

        {
           box.innerText="0";
           p1=false;

        }
        else{
            box.innerText="X";
            p1=true;
        }
        box.disabled=true;
        checkwinner();


     });
});
disablebowes=()=>{
    for(let boxes of box)
    {
      boxes.disable=true;
    }
};
const showwinner=(Winner)=>{
  msg.innerText=`Congratulation, winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};
const checkwinner=()=>{
    for(let pattern of winpatter)
    {
        let pat0=boxes[pattern[0]].innerText;
        let pat1=boxes[pattern[1]].innerText;
        let pat2=boxes[pattern[2]].innerText;
        if(pat0!=""&& pat1!=""&&pat2!="")
         {
            if(pat0===pat1&&pat1===pat2)
             {
                console.log("Winner",pat0);
                showwinner(pat0);
             }
         }
    }
};