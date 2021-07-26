/**
 * @param {string} s
 * @return {number}
 */

 const romanTranslation = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
 const keys = Object.keys(romanTranslation)
 
 var romanToInt = function(s) {
     
     s = s.split("")
     let result = 0
     
     for(i = 0; i < s.length; i++){
         
         if(keys.includes(s[i])){
             s[i] = romanTranslation[s[i]]
         } else {
             return false
         }
         
         switch(s[i]){
             case 1:
             if(s[i + 1] == 'V' || s[i + 1] == 'X'){
                 s[i] = -1
             } 
             break
             case 10:
             if(s[i + 1] == 'L' || s[i + 1] == 'C'){
                 s[i] = -10
             } 
             break
             case 100:
             if(s[i + 1] == 'D' || s[i + 1] == 'M'){
                 s[i] = -100
             }  
             break
         }
         
         result += s[i]
     }
     
     return result
 }