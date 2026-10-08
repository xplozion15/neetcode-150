# solution 1


class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        nums_set = set(nums)
        return len(nums_set) != len(nums)


# solution 2


class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        seen_elements = set()

        for num in nums:
            if num in seen_elements:
                return True
            else:
                seen_elements.add(num)
        return False
