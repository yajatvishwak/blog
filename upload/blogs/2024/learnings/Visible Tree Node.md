---
blogid: jugaad-oriented-sprogramming1
date: 02/03/2024
---

#### Problem

In a binary tree, a node is labeled as "visible" if, on the path from the root to that node, there isn't any node with a value higher than this node's value.

The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.

![[Pasted image 20241016095753.png]]
Output: `3`

#### Solution

What we know:

- Counting max in every path of the tree
- We need to visit every leaf node since we want to find total maxes in every path
- Thus we need to traverse the tree. We can use **DFS** for the same

For DFS we need to know 2 primary things.

1. What will be the value returned by each node? (Return Value)
2. Are there any requirements to calculate the return value? (State Value)

#### Intuition

- To count something we will have to return 1
- Now we can abstractly add dfs so return 1 + find_max_on_left + find_max_on_right
- we will need to know for each path, what is the current max and update it if current node's value is greater.

##### Return value

- visible (1 if it is visibe, 0 if not) + same on left + same on right

##### State value

- If we need need to calculate if a node is visible we will need the current_max

#### Code

```python
def visible_node(root):
	def dfs(node, curr_max):
		if node == None:
			return 0
		visible = 0
		if curr_max <= node.val:
			curr_max = node.val
			visible = 1
		return visible + dfs(node.left, curr_max) + dfs(node.right, curr_max)
	return dfs(root, float("-inf"))
```
