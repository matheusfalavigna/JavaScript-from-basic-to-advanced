let btn1 = document.querySelector("#bnt1");
let btn2 = document.querySelector("#bnt2");

function msg(e){
    console.log(e);
};

btn1.addEventListener("click", msg);

bnt2.addEventListener("click", function(e){
   console.log(e);
});
