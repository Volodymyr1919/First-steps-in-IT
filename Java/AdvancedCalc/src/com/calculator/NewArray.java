package com.calculator;

import java.util.Arrays;

public class NewArray {
    public static void main(String[] args)
    {
        /*int [][] array = new int[][]
                {
                        {0, 2, -1, 6},
                        {4, 8, 13, -5},
                        {1, 2, 3, 4}
                };
        int [][][] array2 = new int[][][]
                {
                        {
                                {0, 1, 2},
                                {-5, 6, 2}
                        },
                        {
                                {8, 6, 7}
                        },
                        {
                                {9, 4, 1, 5, 88, 3242},
                                {9, 4, 1, 5, 88, 3242},
                                {9, 4, 1, 5, 88, 3242},
                                {9, 4, 1, 5, 88, 3242},
                        }
                };
        for (int i = 0; i < array.length; i++)
        {
            for (int j = 0; j < array[i].length; j++)
            {
                System.out.print(array[i][j]+" ");
            }
            System.out.println();
        }*/
        int a = 0;
        int [] array1 = new int[] {2, -4, 6, 8, -10};
        modifyMyArray(array1);
        System.out.println("After modify: ");
        System.out.println(Arrays.toString(array1));
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("Before = "+sb.toString());
        modifyMyString(sb);
        System.out.println("After = "+sb.toString());

        /*int[] copyArray1 = Arrays.copyOf(array1, 5);
        int[] copyArray2 = Arrays.copyOf(array1, 3);
        int[] copyArray3 = Arrays.copyOf(array1, 7);*/

        /*String s = Arrays.toString(copyArray1);
        System.out.println(s);
        System.out.println(Arrays.toString(copyArray2));
        System.out.println(Arrays.toString(copyArray3));*/

        /*int[] copyRange = Arrays.copyOfRange(array1, 1, 4);
        System.out.println(Arrays.toString(copyRange));*/
        /*System.out.println(Arrays.toString(array1));
        Arrays.sort(array1);
        System.out.println(Arrays.toString(array1));*/
        /*int [][] array2 = new int[][]
                {
                        {0, 2, -1, 6},
                        {4, 8, 13, -5},
                        {1, 2, 3, 4}*/

    }
    private static void modifyMyArray (int[] arraytoModify)
    {
        for (int i = 0; i < arraytoModify.length; i++)
        {
            arraytoModify[i] = arraytoModify[i] +1;
        }
        System.out.println("Inside Modified: ");
        System.out.println(Arrays.toString(arraytoModify));
    }
    private static void modifyMyString (StringBuilder s)
    {
        s.append(" World");
        System.out.println("Inside = "+s.toString());
    }
}
