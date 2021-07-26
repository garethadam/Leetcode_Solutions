/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    let nonSpecialChrString = s.replace(/[^a-zA-Z0-9 ]/g, '')
    const strippedString = nonSpecialChrString.replace(/\s+/g, '').toLowerCase()    
    
    let splitStrippedString = strippedString.split('')
    let reverseString = splitStrippedString.reverse()
    let joinString = reverseString.join('')
  
    if(joinString === strippedString){
        return true
    } else {
        return false
    }
}