import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        int A = Integer.parseInt(line[0]);
        int B = Integer.parseInt(line[1]);
        int C = Integer.parseInt(line[2]);
        if(B==1) {
            System.out.println(A%C);
            return;
        }
        Stack<Integer> stack = new Stack<>();
        while(B>0){
            stack.add(B);
            B/=2;

        }
        long answer = A;
        stack.pop();
        while(!stack.isEmpty()){
            int n=stack.pop();
            if(n%2==0){
               answer=(answer*answer)%C;
            }else{
                answer=(((answer*A)%C)*answer)%C;
            }
        }
        System.out.println(answer%C);
    }
}
