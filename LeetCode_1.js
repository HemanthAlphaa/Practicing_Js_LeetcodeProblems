function function_name(nums, target) {

    var arr_index = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            console.log(nums.indexOf(nums[i]))
        }
        else {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    arr_index.push(nums.indexOf(nums[i]))
                    arr_index.push(nums.indexOf(nums[j]))
                }
            }
        }

    } console.log(arr_index)
}

var nums = [2,7,11,15]
var target = 9
function_name(nums, target)
/*var x
for (var i = 6; i <= 5; i++) {
    x = prompt("Enter x :")
    nums.push(x)
}*/

