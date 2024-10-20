---
blogid: jugaad-osriented-programming1
date: 02/03/2024
---

#### Problem:

- [Leetcode Link](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/?envType=problem-list-v2&envId=xcrx4mxm)
- Given array find peak element's index

#### Examples:

```py
[0,1,0] -> returns 1
[0,2,1,0] -> returns 1
[0,10,5,2] -> returns 1
```

#### Solution

- Since we have to find an element, and there is given pattern, we can use binary search.
- Feasibility function will check if element to the left of a given index is increasing, if it is increasing, we can return true, else we can return False
  Example:

```md
[0,2,1,0] -> feasibility function -> [F,T,T,T]
```

- From here all we have to do is find index of the first true.

#### Code

```python
def peakIndexInMountainArray(self, arr: List[int]) -> int:
        def feasible(index):
            return arr[index] == max(arr) or (index != 0 and arr[index - 1] > arr[index])
        l = 0
        r = len(arr) - 1
        max_index = -1
        while l<=r:
            mid = (l+r) // 2
            if feasible(mid):
                r = mid - 1
                max_index = mid
            else:
                l = mid + 1
        return max_index
```

Problems:

1. Max getting computed takes O(n)
2. Max(arr) is the answer, why even do binary search?

We can fix the feasibility function so that it remains in constant time. To do that we need to check if the current element is bigger than the next element

```python
def feasible(index):
    return arr[index] > arr[index+1]
```

#### Put together - Final Code

```python
def peakIndexInMountainArray(self, arr: List[int]) -> int:
        def feasible(index):
            return arr[index] > arr[index + 1]
        l = 0
        r = len(arr) - 1
        max_index = -1
        while l<=r:
            mid = (l+r) // 2
            if feasible(mid):
                r = mid - 1
                max_index = mid
            else:
                l = mid + 1
        return max_index
```
