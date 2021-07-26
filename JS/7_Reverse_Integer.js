/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    let numToStrArr = x.toString().split('')
    let reverseArr = []
    let isNegative = false
    let newString
    let number
    
    let number32bit = Math.pow(2, 31) - 1
    
    if(numToStrArr[0] == '-'){
        isNegative = true
    }
    
    for(i = 0; i < numToStrArr.length; i++){
        reverseArr[i] = numToStrArr[(numToStrArr.length - (i + 1))]
    }
    
    newString = reverseArr.join('')
    number = parseInt(newString, 10)
    
    if(number > number32bit){
        return 0
    } else if(number < number32bit && isNegative === true) {
        return -Math.abs(number)
    }
    
    return number
}