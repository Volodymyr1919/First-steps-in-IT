public class alg
{
    public class MinMax
    {
        public static void main(String[] args)
        {
            int arr[] = new int[] {40, 250, 80, 88, 240, 12, 148 };
            System.out.println(getMax(arr, 0));
            System.out.println(getMin(arr, 0));
        }
        static int getMax(int[] arr, int index)
        {
            if (arr.length > index)
            {
                int max = getMax(arr, index + 1);
                if (arr[index] > max)
                {
                    return arr[index];
                }
            }
            return 0;
        }
        static int getMin(int[] arr, int index)
        {
            return 0;
        }
    }
}
    
