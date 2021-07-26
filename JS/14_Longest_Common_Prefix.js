/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    if(strs.length === 0){
        return ''
    }
        
    let base = strs[0]
    let result = []
        
        function checkletters(word){
           
            for(i = 0; i < word.length; i++){
                if(word[i] == base[i]){
                    result[i] = word[i]
                } else {
                    break
                }
            }   
            base = result
            result = []
        }
        
        let commonPrefix = strs.map(checkletters)
        
        if(base === []){
            return ''
        } else {
            return base.join('')
        }
}