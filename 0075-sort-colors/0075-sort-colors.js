/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
        var done = false;
     while(!done){
        done = true;
        for(var i = 1; i < nums.length; i++){
            if(nums[i-1] > nums[i]){
                done=false;
                 var tmp = nums[i-1];
                nums[i-1] = nums[i];
                nums[i] = tmp;
             }
        }
    }
    return nums;
};