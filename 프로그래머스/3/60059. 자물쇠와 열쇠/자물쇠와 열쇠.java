class Solution {
    public boolean solution(int[][] key, int[][] lock) {
        boolean answer = false;
        int lockLen = lock.length;
        int lockCount = getLockCount(lock);
        int[][] rotateKey = key;
        
        for(int i=0; i<5; i++){
        for(int pX = lock.length*-1; pX<lock.length; pX++){
            for(int pY = lock.length*-1; pY<lock.length; pY++){
                if(isValid(rotateKey,lock,pX,pY,lockCount)) return true;
            }
        }
        rotateKey = rotate90(rotateKey);
        }
        return false;
    }
    
    static boolean isValid(int[][]key, int[][]lock, int pX, int pY,int limit){
        int tmp = limit;
        for(int y=0; y<key.length; y++){
            for(int x=0; x<key.length; x++){
                if(y+pY>=0&&x+pX>=0&&y+pY<lock.length&&x+pX<lock.length){
                 if(lock[y+pY][x+pX]==1&&key[y][x]==1) return false;
                 if(lock[y+pY][x+pX]==0&&key[y][x]==0) return false;
                 if(lock[y+pY][x+pX]==0&&key[y][x]==1) tmp--;
                }
            }
        }
        return tmp<=0;
    }
    
    static int getLockCount(int[][] lock){
        int tmp = 0;
        for(int i=0; i<lock.length; i++){
            for(int j=0; j<lock.length; j++){
                if(lock[i][j]==0) tmp++;
            }
        }
        return tmp;
    }
    
    static int[][] rotate90(int[][] key){
        int len = key.length;
        int[][] tmp= new int[len][len];
        for(int i=0; i<len; i++){
            for(int j=0; j<len; j++){
                tmp[i][j]=key[len-1-j][i];
            }
        }
        return tmp;
    }

}