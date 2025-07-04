-- 코드를 입력하세요

WITH TMP AS(
SELECT B.APNT_NO,B.MCDP_CD, A.DR_ID, A.DR_NAME, B.APNT_YMD, B.PT_NO
FROM DOCTOR A JOIN APPOINTMENT B
ON A.DR_ID=B.MDDR_ID
WHERE A.MCDP_CD='CS'AND TO_CHAR(B.APNT_YMD,'YYYY-MM-DD')='2022-04-13' AND B.APNT_CNCL_YN='N'
)

SELECT B.APNT_NO, A.PT_NAME, A.PT_NO, B.MCDP_CD,  B.DR_NAME, B.APNT_YMD FROM
PATIENT A JOIN TMP B
ON A.PT_NO = B.PT_NO
ORDER BY B.APNT_YMD;