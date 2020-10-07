let btn1 = document.querySelector("#bnt1");
let btn2 = document.querySelector("#bnt2");
let p = document.querySelector("p");

function msg(e){
    console.log("clicou no button");
    e.stopPropagation();
};

btn1.addEventListener("click", msg);

bnt2.addEventListener("click", function(e){
   console.log(e);
});

p.addEventListener("click", () => {
    console.log("clicou no paragrafo");
});