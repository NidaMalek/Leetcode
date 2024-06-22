Using <b>LENGTH()</b> is <b>incorrect</b>. The question is asking for the number of characters used in the content. 
</br>
LENGTH() returns the length of the string measured in <b>bytes<b>. 
<b>CHAR_LENGTH() returns the length of the string measured in characters</b>
</br>
SELECT LENGTH('€')  # is equal to 3 </br>
SELECT CHAR_LENGTH('€') # is equal to 1​
