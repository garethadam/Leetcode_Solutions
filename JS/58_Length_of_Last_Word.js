/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    const strArr = s.split(' ')
    let strCount = []
    let lengthOfLastWord = 0
    
    
     for(i = 0; i < strArr.length; i++){
         strCount[i] = strArr[i].length
     }
    
    for(i = 0; i < strCount.length; i++){
        
        if(strCount[i] > strCount[i + 1]){
           lengthOfLastWord = strCount[i]
            
            if(strCount[i] > lengthOfLastWord){
                    lengthOfLastWord = strCount[i]
            }
        }
    }
    
    const arrEnd = strCount.length - 1
    
    console.log(lengthOfLastWord)
    console.log(strCount[strCount.length - 1])
    
    if(strCount[arrEnd] !== 0){
        return strCount[arrEnd]
    } else if(strCount[arrEnd] === 0){
        return lengthOfLastWord
    }
}