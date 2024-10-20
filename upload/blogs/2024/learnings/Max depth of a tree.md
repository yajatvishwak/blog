---
blogid: max-depth-of-tree
date: 10/08/2024
---

#### Problem

- Given a tree, find max depth of that tree

#### Example

```md
Input:
5
/ \
 4 6
/ \
 3 8

Output: 2
```

#### Solution

What we know:

- We need to find the longest path in this tree starting from the root to the leaf
- We need to visit every leaf node since we are unaware of the deepest node
- Thus we need to traverse the tree. We can use **DFS** for the same

For DFS we need to know 2 primary things.

1. What will be the value returned by each node? (Return Value)
2. Are there any requirements to calculate the return value? (State Value)

#### Return value

Given a node, we need to return for that node,
the maximum depth between left subtree and right subtree + 1
The plus 1 happens because the node must include its own depth when reporting the depth to its parent. (eg. pretend you are node 5, the depth from left and right subtree are 2,1 so we take max of these two which is 2 and add one to it and return that to it's parent essentially measuring its depth)

#### Code

```python
def tree_max_depth(root):
	def dfs(r):
		if r is None:
			return 0
		return max(dfs(r.left) , dfs(r.right)) + 1
	return dfs(root) - 1 if root is not None else 0
```

References:

- https://algo.monster/problems/tree_max_depth
