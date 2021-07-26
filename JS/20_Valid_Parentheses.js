/**
 * @param {string} s
 * @return {boolean}
 */

 const bracketTypes = ['\{', '\}', '\(', '\)','\[', '\]']

 var isValid = function(s) {
     
     let checkingArr = []
     s = s.split('')
     
     for(i = 0; i < s.length; i++){
         
         if(s.length === 1){
             return false
         }
         
         if(s[i] === bracketTypes[0] || s[i] === bracketTypes[2] || s[i] === bracketTypes[4]){
             checkingArr.push(s[i])
         }   
            switch(s[i]){
                    
                case bracketTypes[1]:
                if(checkingArr[checkingArr.length - 1] === bracketTypes[0] ){
                    checkingArr.pop()
                } else if(checkingArr[checkingArr.length - 1] != bracketTypes[0]) {
                    checkingArr.push(s[i])
                }
                break

                case bracketTypes[3]:
                if(checkingArr[checkingArr.length - 1] === bracketTypes[2] ){
                    checkingArr.pop()
                } else if(checkingArr[checkingArr.length - 1] != bracketTypes[2]){
                    checkingArr.push(s[i])
                }
                break

                case bracketTypes[5]:
                if(checkingArr[checkingArr.length - 1] === bracketTypes[4] ){
                    checkingArr.pop()
                } else if(checkingArr[checkingArr.length - 1] != bracketTypes[4]){
                    checkingArr.push(s[i])
                }
                break
            }         
         }
     
       console.log(checkingArr)
     
     if(checkingArr.length === 0 || s === ''){
     return true
     } else {
     return false
     }
    
 }