package com.calculator.basicMath;

public class BasicCalc
{
    public static int add (int a, int b)
    {
        display(a, b);
        return a+b;
    }
    private static void display (int a, int b)
    {
        System.out.println("The numbers we want to operate are: " + a + " and " + b);
    }

    public int subtract (int a, int b)
    {
        return a-b;
    }
}
