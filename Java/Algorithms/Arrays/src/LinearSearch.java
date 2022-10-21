public class LinearSearch
{
    public static void main(String[] args)
    {
        float[] arr = {1, 4, -4, 23, 14, 52, 34};
        sumArray(arr);
        midArray(arr);
    }
    public static int searchLinear(int [] arr, int target)
    {
        for (int i = 0; i<arr.length; i++)
        {
            if(arr[i] == target)
            {
                return i;
            }
        }
        return -1;
    }
    public static void sumArray(float[] array)
    {
        float s = 0;
        for (int i = 0; i < array.length; i++)
        {
                s = s + array[i];
        }
        System.out.println(s);
    }
    public static void midArray(float[] array)
    {
        float s = 0;
        for (float i = 0; i < array.length; i++)
        {
            s = ((s + array[(int) i]) / array.length);
        }
        System.out.println(s);
    }
}
