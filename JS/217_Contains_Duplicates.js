/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    let counts = {}
        
        for (i = 0; i < nums.length; i++) {
            var num = nums[i]
            counts[num] = counts[num] ? counts[num] + 1 : 1
        }
        
        const countsValuesArr = Object.values(counts)
        const equalsOne = (currentValue) => currentValue === 1
        
        if(countsValuesArr.every(equalsOne)){
            return false
        } else {
            return true
        }
}