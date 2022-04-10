//Object declaration containing vectors
let IR = {
    a1:['1','6'],
    a2:['0','-1']
}



//algorithm to calculate the dot-products
let dot_product = (v1,v2) => {
    let cal1 = v1[0]*v1[1]
    let cal2 = v2[0]*v2[1]
    let ps = cal1 + cal2

    return ps;
}


//algorithm to check if two given vectors are orthogonal
function orthogonalCheck(){
    var checkVal = dot_product(IR.a1, IR.a2);

    if(checkVal==0){
        console.log(`The vectors above are orthogonal`)
    }
    else if(checkVal!=0){
        console.log(`The vectors above are NOT orthogonal`)
    }
}



//1st Function call
console.log(`The dot product of [${IR.a1}] and [${IR.a2}] is: ${dot_product(IR.a1, IR.a2)}`)

//2nd Function call
orthogonalCheck()