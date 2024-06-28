# Write your MySQL query statement below
SELECT
EmployeeUNI.unique_id, Employees.name
FROM Employees
LEFT JOIN EmployeeUNI on Employees.id = EmployeeUNI.id

# select 
# eu.unique_id as unique_id, e.name as name
# from Employees e 
# left join EmployeeUNI eu on e.id = eu.id