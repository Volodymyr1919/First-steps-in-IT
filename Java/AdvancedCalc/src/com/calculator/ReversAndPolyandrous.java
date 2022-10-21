package com.calculator;

import java.util.Scanner;

public class ReversAndPolyandrous
{
    public static void main(String args[])
    {
        /*Scanner sc = new Scanner(System.in);
        System.out.println("Enter word or words: ");
        String i = sc.nextLine();
        String revers = new StringBuffer(i).reverse().toString();
        System.out.println("Reverse string is: "+revers);

        if (i.equalsIgnoreCase(revers))
        {
            System.out.println("This is polyandrous");
        }
        int[] array = new int[] {10, 5, 3};
        for (int b=array.length-1; b>=0; b--)
        {
            System.out.println(array[b]);
        }*/
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter word: ");
        String s = sc.nextLine();

        System.out.println(isPolyandrous(s));
    }
    public static boolean isPolyandrous(String s)
    {
        char[] charArr = s.toCharArray();
        for (int i = 0; i != charArr.length/2; i++)
        {
            char start = charArr[i];
            char end = charArr[charArr.length-1-i];
            if (start != end)
            {
                return false;
            }
        }
        return true;
    }
}

