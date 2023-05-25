# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Created function createHash, so that we can reuse it at multiple places
2. In line 16, I have simplified nested if else statement using ternary operator
3. We don't need the data variable, since we are handling that in line 6 itself
4. Since we already have assigned a value to candidate variable in line 6, we dont need if(candidate) condition, in line 17(of original code)
5. In line 16 of refactored code we still need the condition, because return value always have to be string
