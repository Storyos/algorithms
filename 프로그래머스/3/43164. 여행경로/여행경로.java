import java.util.*;
class Solution {
    static HashMap<String,List<String>> map;
    public String[] solution(String[][] tickets) {
        map = new HashMap<>();
        for(String[] ticket: tickets){
            map
                .computeIfAbsent(ticket[0],k->new ArrayList<>())
                .add(ticket[1]);
        }
        for(List<String> lists : map.values()){
            Collections.sort(lists);
        }
        List<String> path = new ArrayList<>();
        path.add("ICN");
        dfs(tickets.length,path,"ICN");
        return path.toArray(new String[0]);
    }
    static boolean dfs(int remain ,List<String> path, String city){
        if (remain == 0) return true;
        List<String> nexts = map.getOrDefault(city, new ArrayList<>());
        for (int i = 0; i < nexts.size(); i++) {
            String next = nexts.remove(i);   
            path.add(next);
            if (dfs(remain - 1, path,next)) return true;            
            path.remove(path.size() - 1);
            nexts.add(i, next);             
        }
        return false;
    }
}