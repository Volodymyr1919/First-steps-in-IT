public class Homework
{
    public static void main(String[] args)
    {   //Level 1
        int num1 = 2;
        int num2 = 3;
        int num3 = 4;
        int sum;
        sum = num1 + num2 + num3;
        System.out.println(sum);
        //Level 2
        int[] arr = {25,14,56,15,47};
        int num = 5;
        int index = 2;
        int[] new_arr = new int[arr.length + 1];
        for(int i = 0; i < index; i++)
        {
            new_arr[i] = arr[i];
        }
        new_arr[index] = num;
        for(int i = index; i < arr.length; i++)
        {
            new_arr[i+1] = arr[i];
        }
        for(int i : new_arr)
        {
            System.out.print(i + " ");
        }
        int max = arr[0];
        int min = arr[0];
        for(int m = 1; m < new_arr.length; m++)
        {
            max = Math.max(max, new_arr[m]);
            System.out.println(max);
        }
        for(int mn = 1; mn < new_arr.length; mn++)
        {
            min = Math.min(min, new_arr[mn]);
            System.out.println(min);
        }
    }
}
