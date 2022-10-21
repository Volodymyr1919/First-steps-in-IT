package com.calculator;


import java.util.Scanner;

public class FibonacciAndFactorial
{
    public static void main(String[] args)
    {
        //for each
        String[] names = new String[] {"Alex", "Bob", "Mike"};
        for (String name : names)
        {
            System.out.println("name = "+ name);
        }
        for (int i=0; i<names.length; i++)
        {
            System.out.println("name = "+ names[i]);
        }
 /*       Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int i = sc.nextInt();
        System.out.print("Enter the operation (! or Fibonacci): ");
        String operator = sc.next();

        if (operator.equals("!"))
        {
            int result = 1;
            for (int a = 1; a <= i; a++)
            {
                result = result * a;
            }
            System.out.println("result: "+result);
        }

        if (operator.equals("Fibonacci"))
        {
            int a = 0;
            int b = 1;
            int y;
            for (int q = 3; q <= i; q++)
            {
                y = a + b;
                a = b;
                b = y;
            }
            System.out.println("result: "+b);
        }
 */   }

}
