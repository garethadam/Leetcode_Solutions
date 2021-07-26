/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    let ogNum = x
    let reverse = 0
 
    if(x < 0){
        return false
    }
    
    while (x){
        
        lastDigit = x % 10
        reverse = (reverse * 10) + lastDigit
        x = x / 10 | 0
    }
    
    if(reverse == ogNum){
        return true
    } else {
        return false
    }
}