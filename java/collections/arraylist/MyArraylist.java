import java.util.*;

public class MyArraylist {
    public static void main(String[] args) {
        /*=========================================================================================================
        |
        |---------------------------------Linked List---------------------------------
        |
        |>>>>>>>LinkedList is datastructure of the datatype string
        |==========================================================================================================*/
        
        LinkedList<String> al = new LinkedList<>();
        al.add("Ravi");
        al.add("Vijay");
        al.add("Ravi");
        al.add("Ajay");
        Iterator<String> itr = al.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
    }
}