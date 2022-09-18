let costam = () => 3;

export function setBondsYears(){
    return costam()
}

export function updateBondsYears(number){
    console.log("KURWA MOJE POLE")
    costam = () => number;
}


