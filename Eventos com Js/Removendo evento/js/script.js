let btn1 = document.querySelector("#bnt1");
let btn2 = document.querySelector("#bnt2");

function msg(){
    console.log("Clicou em mim");
};

btn1.addEventListener("click", msg);

bnt2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg);
});
