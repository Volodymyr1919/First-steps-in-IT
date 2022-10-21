package com.calculator;

public class HomeworkArray
{
    public static void main(String[] args)
    {
        int[][] array = new int[][]
                {
                        {0, 2, -1, 6},
                        {4, 8, 13, -5},
                        {1, 2, 3, 4}
                };
        sumArray(array);
    }
    public static void sumArray(int[][] array)
    {
        int s = 0;
        for (int i = 0; i < array.length; i++)
        {
            for (int j = 0; j < array[i].length; j++)
            {
                s = s + array[i][j];
            }
        }
            System.out.println(s);
    }
}
