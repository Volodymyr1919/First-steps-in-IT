package DataModels;

import java.util.ArrayList;

public class CollectionsExample
{
    public static void main(String[] args)
    {
        int[] array = new int[] {1, 2, 3};
        int a = array[0];
        ArrayList<Integer> myArrayList = new ArrayList<>(3);
        int b = myArrayList.get(0);
        int size = myArrayList.size();
        myArrayList.add(1);
        myArrayList.add(2);
        myArrayList.add(3);
        myArrayList.add(4);

        for (Integer number: myArrayList){
            System.out.println(number);
        }
        System.out.println();
        for (int i=0; i<myArrayList.size(); i++){
            System.out.println(myArrayList.get(i));
        }
    }
}
