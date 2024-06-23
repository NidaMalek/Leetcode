<b>Intuition</b></br></br>
The problem requires counting the number of continuous subarrays with exactly k odd numbers. To achieve this, we can use a prefix sum approach. The key idea is to keep track of the number of odd numbers encountered so far while iterating through the array, and use this information to count subarrays with the desired property efficiently.

</br>

<b>Approach</b></br>

<b>Initialize Variables:</b></br>

n: Length of the input array nums.</br>
cnt: An array to keep track of the count of prefix sums (number of odd numbers encountered).</br>
cnt[0]: Set to 1 initially, since a prefix sum of 0 (no odd numbers encountered) occurs once by default.</br>
ans: Variable to store the final result (number of nice subarrays).</br>
t: Variable to store the current count of odd numbers while iterating through the array.</br>

<b>Iterate Through the Array:</br></b>

For each element v in nums, update the count of odd numbers (t) encountered so far. This is done by checking if v is odd using v & 1.
Check if there exists a prefix sum t - k (i.e., a previous state where there were t - k odd numbers). If so, add the count of such prefix sums to ans.
Increment the count of the current prefix sum (t) in the cnt array.</br>

<b>Return the Result:</b></br>

After iterating through the entire array, ans will contain the number of nice subarrays.</br></br>

<b>Complexity</b></br>
Time Complexity: The solution iterates through the array once and performs constant time operations in each iteration. Thus, the time complexity is (O(n)), where (n) is the length of the array.</br>
Space Complexity: The space complexity is (O(n)) due to the additional cnt array used to store the count of prefix sums.</br>

</br></br>

<b>Steps Explained with Example</b></br></br>

<b>Initialization:</b></br>

cnt = [1, 0, 0, 0, 0, 0]</br>
ans = 0</br>
t = 0</br></br>

<b>Iteration:</b></br>

Index 0:</br>

nums[0] = 1 (odd)</br>
t = 1 (1 odd number)</br>
Update cnt: cnt[1] += 1 → cnt = [1, 1, 0, 0, 0, 0]</br>
t - k = 1 - 3 = -2 (invalid)</br>
ans = 0</br>

Index 1:</br>

nums[1] = 1 (odd)</br>
t = 2 (2 odd numbers)</br>
Update cnt: cnt[2] += 1 → cnt = [1, 1, 1, 0, 0, 0]</br>
t - k = 2 - 3 = -1 (invalid)</br>
ans = 0</br>

Index 2:</br>

nums[2] = 2 (even)</br>
t = 2 (no change in odd count)</br>
Update cnt: cnt[2] += 1 → cnt = [1, 1, 2, 0, 0, 0]</br>
t - k = 2 - 3 = -1 (invalid)</br>
ans = 0</br>

Index 3:</br>

nums[3] = 1 (odd)</br>
t = 3 (3 odd numbers)</br>
Update cnt: cnt[3] += 1 → cnt = [1, 1, 2, 1, 0, 0]</br>
t - k = 3 - 3 = 0</br>
cnt[0] = 1 (one valid prefix sum)</br>
ans += 1 → ans = 1</br>

Index 4:</br>

nums[4] = 1 (odd)</br>
t = 4 (4 odd numbers)</br>
Update cnt: cnt[4] += 1 → cnt = [1, 1, 2, 1, 1, 0]</br>
t - k = 4 - 3 = 1</br>
cnt[1] = 1 (one valid prefix sum)</br>
ans += 1 → ans = 2</br></br>
Final Answer</br>
The number of nice subarrays is 2.​</br>
