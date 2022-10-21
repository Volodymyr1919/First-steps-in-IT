package com.calculator;

import java.util.Scanner;

public class PrimeNumbers
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int i = sc.nextInt();

        if (i % 2 == 0)
        {
            System.out.println("Error! It´s not a prime number. Try again");
        }
        else if (i == 3 || i == 5 || i == 7)
        {
            System.out.println("It´s a prime number");
        }
        for (int a = 3; a * a <= i; a += 2)
        {
            if (i % a == 0)
            {
                System.out.println("Error! It´s not a prime number. Try again");
            }
            else if (i % 2 != 0 && i % a != 0)
            {
                System.out.println("It´s a prime number");
            }
            break;
        }
    }
}
