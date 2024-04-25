function smallestMissingPositiveInteger(nums) {

  if (nums.length === 0) return 1;
  if (nums.length === 1) return nums[0] <= 0 ? 1 : 2;

  let n = nums.length;
  for (let i = 0; i < n; i++) {
    
    while (0 < nums[i] <= n && nums[i] != nums[nums[i] - 1]) {
      let j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}

module.exports = smallestMissingPositiveInteger;
