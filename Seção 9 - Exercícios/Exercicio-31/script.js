let mNum = [1,2,3,4,5,6,7,8,9,10]
let nNum = [1,2,3,4]

function nElemento(num){
    if(num.length >= 5){
        console.log("Muitos elementos")
    }else{
        console.log("Poucos elementos")
    }
}

nElemento(mNum)
nElemento(nNum)