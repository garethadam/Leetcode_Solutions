/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let counts = {}
    
    for (i = 0; i < nums.length; i++) {
        var num = nums[i]
        counts[num] = counts[num] ? counts[num] + 1 : 1
    }
    
    let arr = Object.values(counts);
    let max = Math.max(...arr)
    
    for (const [key, value] of Object.entries(counts)) {
        if(value === max){
            return key
        }
    }
}