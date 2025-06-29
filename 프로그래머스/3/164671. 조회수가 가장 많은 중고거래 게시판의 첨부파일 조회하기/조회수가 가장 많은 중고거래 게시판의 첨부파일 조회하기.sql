-- 코드를 입력하세요
-- 조건 -> 조회수가 가장높은 중고거래 게시물에 대한 첨부파일 경로 조회

WITH BESTBOARD AS (
SELECT * 
FROM (SELECT BOARD_ID FROM USED_GOODS_BOARD ORDER BY VIEWS DESC) WHERE ROWNUM = 1) 

SELECT '/home/grep/src/'||A.BOARD_ID||'/'||A.FILE_ID||A.FILE_NAME||A.FILE_EXT AS FILE_PATH FROM USED_GOODS_FILE A JOIN BESTBOARD B ON
A.BOARD_ID = B.BOARD_ID
ORDER BY A.FILE_ID DESC;

