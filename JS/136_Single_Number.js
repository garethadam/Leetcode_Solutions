/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    let counts = {}
    
    for (i = 0; i < nums.length; i++) {
        var num = nums[i]
        counts[num] = counts[num] ? counts[num] + 1 : 1
    }
    
    for (const [key, value] of Object.entries(counts)) {
       if(value === 1){
           return key
       }
    }
}