import java.util.Random;

public class BigAnotation
{
    public static void print_num(int [] arr)
    {
        for(int i : arr)
        {
            System.out.println(i);
        }
    }
    public static void print_pairs(int[] arr)
    {
        for(int i : arr)
        {
            for(int j : arr)
            {
                System.out.println(i + "+" + j);
            }
        }
    }
    public static void getSuit()
    {
        String [] suit = {"Classic", "Sport", "Evening"};
        int randomSuit = new Random().nextInt(suit.length);
        System.out.println(suit[randomSuit]);
    }
    public static void main(String[] args)
    {
        int [] arr = {1,2,3,4,5,6,7,8};
        print_num(arr);
        print_pairs(arr);
        getSuit();
    }
}
