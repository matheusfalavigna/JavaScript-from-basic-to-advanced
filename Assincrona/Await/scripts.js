function somarComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b);
        }, 4000)
    });
}

async function resSoma(a,b,c) {
    let x = somarComDelay(a,b);
    let y = c;

    return await x + y;
}

resSoma(2,4,8).then((value) => console.log(value));