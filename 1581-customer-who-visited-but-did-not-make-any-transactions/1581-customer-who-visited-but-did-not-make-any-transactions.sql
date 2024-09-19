# Write your MySQL query statement below

# SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans 
# from Visits v 
# LEFT JOIN Transactions t 
# ON v.visit_id = t.visit_id  
# WHERE t.amount IS NULL 
# GROUP BY v.customer_id;

SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans 
from Visits v 
LEFT JOIN Transactions t 
ON v.visit_id = t.visit_id  
WHERE t.transaction_id IS NULL 
GROUP BY v.customer_id; 

# WRONG: 
# select v.customer_id, t.transaction_id, t.visit_id
# from Visits v
# left join Transactions t
# on v.visit_id = t.visit_id 
# where t.transaction_id = 0
