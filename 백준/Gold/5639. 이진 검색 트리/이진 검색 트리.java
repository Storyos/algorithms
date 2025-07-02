import java.io.*;
import java.util.*;

public class Main {
    static class Node {
        int num;
        Node leftNode;
        Node rightNode;
        public Node(int value){
            this.num = value;
            this.leftNode = null;
            this.rightNode = null;
        }
    }
    static class Tree {
        private Node root;
        public Tree() {
            this.root = null;
        }
        public void insert(int value){
            root = insertRecursive(root,value);
        }
        private Node insertRecursive(Node current, int value){
            if (current == null) return new Node(value);
            if(value<current.num) current.leftNode = insertRecursive(current.leftNode,value);
            else if(value>current.num) current.rightNode = insertRecursive(current.rightNode,value);
                return current;
        }

        public void postOrder() {
            postOrderRecursive(root);
        }

        private void postOrderRecursive(Node node) {
            if (node == null) return;
            postOrderRecursive(node.leftNode);
            postOrderRecursive(node.rightNode);
            System.out.println(node.num);
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line;
        Tree bst = new Tree();
        while((line=br.readLine())!=null && !line.isEmpty()){
            bst.insert(Integer.parseInt(line));

        }
        bst.postOrder();
    }
}
