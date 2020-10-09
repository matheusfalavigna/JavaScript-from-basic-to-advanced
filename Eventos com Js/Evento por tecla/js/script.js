window.addEventListener("keydown", (e) => {
    if(e.key == "q"){
        console.log("Apertou q");
    }else if(e.key == "Enter"){
        console.log("Apertou enter");
    }
});

window.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        console.log("Soltou enter");
    }
});