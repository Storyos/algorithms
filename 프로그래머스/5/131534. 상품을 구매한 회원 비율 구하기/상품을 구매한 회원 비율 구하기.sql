WITH joined_2021 AS (
    SELECT user_id
    FROM   user_info
    WHERE  joined >= DATE '2021-01-01'
           AND joined <= DATE '2021-12-31'
    )
 ,
sale_joined_2021 AS (
    SELECT     EXTRACT(YEAR FROM s.sales_date) AS year
             , EXTRACT(MONTH FROM s.sales_date) AS month
             , COUNT(DISTINCT s.user_id) AS purchased_users
    FROM       online_sale s
    INNER JOIN joined_2021 j
               ON s.user_id = j.user_id
    GROUP BY   EXTRACT(YEAR FROM s.sales_date)
             , EXTRACT(MONTH FROM s.sales_date)
)
SELECT   year
       , month
       , purchased_users
       , ROUND(purchased_users / (SELECT COUNT(*) FROM joined_2021), 1) AS puchased_ratio
FROM     sale_joined_2021
ORDER BY year ASC
       , month ASC;