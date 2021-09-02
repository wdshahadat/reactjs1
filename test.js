function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
            // (Fill in the missing line here)
        }
    }
    return max_num;
}
console.log(find_max([23, 41]));
