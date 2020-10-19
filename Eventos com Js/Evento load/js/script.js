//window.addEventListener("load", () => {
///    alert("Assine nossos termos");
//});

window.addEventListener("beforeunload", (e) => {
    event.returnValue = null;
});