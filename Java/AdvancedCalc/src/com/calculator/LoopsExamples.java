package com.calculator;

public class LoopsExamples
{
    public static void main (String args[])
    {
        //while loops
        int i = 0;
        boolean day = true, night = false;
        boolean a = true;
        System.out.println("Entering");
        /*while (i>0 && printSomething(day) || printSomething(night))
        {
            System.out.println("i="+i);
            i--;
        }
         */
        while (a)
        {
            if (i==0)
            {
                break;
            }
            System.out.println("i="+i);
            i--;
        }
 /*       do
        {
            System.out.println("i="+i);
            i--;
        }

  */
        while (i>0);
        System.out.println("Exiting");

    }

    private static boolean printSomething(boolean b)
    {
        System.out.println("hello from method = "+b);
        return b;
    }
}
