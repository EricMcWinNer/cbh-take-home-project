# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. I gave the event argument of the function a default value of false to make the code more readable. 
2. I removed the unnecessary multiple checks on the truthiness of the candidate variable. I know the candidate would always be false if the event variable is false, so I just return the `TRIVIAL_PARTITION_KEY` if the event is falsy.
3. I used the null coalesce operator to check for the presence of a partionKey, thus removing an extra if block and reducing the code. The null coalesce operator also greatly improves code readability.
4. I reduced the convoluted nested if-else statements which can be difficult to follow and spaced out the code; leaving a blank line between each if block to make the code easier to read.

