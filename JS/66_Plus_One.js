/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    let conCatArrtoNum = ''
    let result = []
    const one = 1n
    
    for(i = 0; i < digits.length; i++){
        conCatArrtoNum += digits[i]
    }
    
    console.log(conCatArrtoNum)
    
    conCatArrtoNum = BigInt(conCatArrtoNum);
    conCatArrtoNum += one
    console.log(conCatArrtoNum)
    
    result = conCatArrtoNum.toString().split('')
    return result
}