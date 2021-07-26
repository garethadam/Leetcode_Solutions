/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    const countForS = {}
    const countForT = {}
    
    for (i = 0; i < s.length; i++) {
        var numS = s[i]
        countForS[numS] = countForS[numS] ? countForS[numS] + 1 : 1
    }
    
    for (i = 0; i < t.length; i++) {
        var numT = t[i]
        countForT[numT] = countForT[numT] ? countForT[numT] + 1 : 1
    }
    
    const sortedCountForS = Object.keys(countForS).sort().reduce(function (acc, key) { 
        acc[key] = countForS[key]
        return acc
    }, {})
    
    const sortedCountForT = Object.keys(countForT).sort().reduce(function (acc, key) { 
        acc[key] = countForT[key]
        return acc
    }, {})
                   
    
    if(JSON.stringify(sortedCountForS) === JSON.stringify(sortedCountForT)){
        return true
    } else {
        return false
    }
}