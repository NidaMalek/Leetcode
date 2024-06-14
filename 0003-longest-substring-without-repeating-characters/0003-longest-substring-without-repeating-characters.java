import java.util.HashSet;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Initialize a set to store unique characters
        HashSet<Character> set = new HashSet<>();
        int n = s.length();
        int maxLength = 0;
        int left = 0;

        // Iterate through the string
        for (int right = 0; right < n; right++) {
            // If the character is already in the set, remove the leftmost character
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            // Add the current character to the set
            set.add(s.charAt(right));
            // Update the maximum length
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
