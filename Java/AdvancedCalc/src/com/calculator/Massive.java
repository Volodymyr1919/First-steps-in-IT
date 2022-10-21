package com.calculator;

import java.util.Random;

public class Massive
{
    /*public static void main (String args[])
    {
        int[] array = new int[10];

        String[] array2 = new String[2];

        int[] array3 = new int[] {1,2,3,4,5,6,7};
        int length = array3.length;
        System.out.println(array3[length-1]);
        for (int i : array3)
        {
            System.out.println(i);
        }
        int myIndex = getIndex();
        System.out.println("My index = "+myIndex);
        if (getIndex()<array3.length && getIndex()>=0)
        {
            System.out.println("element = "+array3[myIndex]);
        }
        else
        {
            System.out.println("Incorrect index");
        }

        //char[] charArray = new char[3];
    }
    private static int getIndex()
    {
        int i = 0;
        Random r = new Random();
        i = r.nextInt(100000);
        return i;
    }


        generateArray();
    }
    private static void generateArray()
    {
        int[] array = new int[10];
        Random r = new Random();
        for (int a = 0; a < array.length; a++)
        {
            array[a] = r.nextInt(100);
            System.out.println(array[a]);
        }
    }*/
    public static void main(String args[])
    {
        int[] array = new int[] {0, 4, 5, 6, 3, -10, -4, 0, 3, -1};
        printNegative(array);
    }
    private static void printNegative(int[] input)
    {
        for (int i = 0; i < input.length; i++)
        {
            if (input[i] < 0)
            {
                System.out.println(input[i]);
            }
        }
    }
}
