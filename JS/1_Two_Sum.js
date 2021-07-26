/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    let stored = {}
    
    for(x = 0; x < nums.length; x++){
        
        if(stored[nums[x]] >= 0){
           return [stored[nums[x]],x]
        }
        stored[target - nums[x]] = x
    }
}