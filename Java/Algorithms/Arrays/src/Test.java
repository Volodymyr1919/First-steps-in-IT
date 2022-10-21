import java.util.Arrays;

public class Test {
    public static int[] insertElement(int [] arr, int element, int pos, int n)
    {
        int i;
        int newArr[] = new int[n + 1];
        for(i = 0; i < n + 1; i++)
        {
            if(i < pos - 1)
            {
                newArr[i] = arr[i];
            }
            else if (i == pos -1)
            {
                newArr[i] = element;
            }
            else
            {
                newArr[i] = arr[i-1];
            }
        }
        return newArr;
    }
    public static int[] getMaxMin(int [] inputArray)
    {
        int maxValue = inputArray[0];
        int minValue = inputArray[0];

        for (int i = 1; i < inputArray.length; i++)
        {
            if(inputArray[i]>maxValue)
            {
                maxValue = inputArray[i];
            }
            else if(inputArray[i]<minValue)
            {
                minValue = inputArray[i];
            }
        }
        return new int[] {minValue, maxValue};
    }
    public static void main(String[] args)
    {
        int n = 10;
        int arr[] = {1,2,3,4,5,6,7,8,9,10};
        System.out.println("Array before: " + Arrays.toString(arr));
        int element = 50;
        int pos = 5;
        arr = insertElement(arr,element,pos,n);
        System.out.println("Array after: " + Arrays.toString(arr));
        int array[] = {10,11,77,4,2,3};
        int [] maxMin = getMaxMin(array);
        System.out.println("Min and Max element: " + Arrays.toString(maxMin));
    }
}
