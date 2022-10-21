public class ArrayApp
{
    public static void main(String[] args)
    {
        int [] arr;
        int i;
        arr = new int[10];
        arr[0] = 88;
        arr[1] = 21;
        arr[2] = 65;
        arr[3] = 12;
        arr[4] = 34;
        arr[5] = 51;
        arr[6] = 32;
        arr[7] = 1;
        arr[8] = 23;
        arr[9] = 88;

        for(i = 0; i<arr.length; i++)
        {
            System.out.println(arr[i] + " ");
        }
        int searchKey = 51;
        for(i = 0; i<arr.length; i++)
        {
            if(arr[i] == searchKey)
            {
                break;
            }
        }
        if(i==arr.length)
        {
            System.out.println("Can´t find " + searchKey);
        }
        else
        {
            System.out.println(searchKey + " Found at: " + i);
        }
    }
}
