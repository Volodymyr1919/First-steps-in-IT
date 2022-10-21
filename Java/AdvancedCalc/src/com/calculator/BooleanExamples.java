package com.calculator;

import java.util.Scanner;

public class BooleanExamples
{
    public static void main (String args[])
    {
  /*      Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int a = sc.nextInt();
 */       boolean day = true;
        Boolean night = false;
        Boolean isNull = null;
        int a = 1,  b = 1;
        String dayOfWeek = "Monday";
        DayOfWeek dayOfWeek2 = DayOfWeek.TUESDAY;

  /*      if (a == 12)
        {
            System.out.println("Good Afternoon!");
        }
        else if (a >= 4 && a <= 11)
        {
            System.out.println("Good Morning!");
        }
        else if (a > 12 && a <= 22)
        {
            System.out.println("Good evening!");
        }
        else if (a == 23 || a == 24)
        {
            System.out.println("It's late. Need to reach the bed ASAP!");
        }
        else if (a > 0 && a <= 3)
        {
            System.out.println("It doesn't have sense to sleep already!");
        }
        else
        {
           System.out.println("ERROR - day has only 24 hours!!!");
        }
    }

 /*   public static boolean printSomething(boolean b)
    {
        System.out.println("World");
        return b;
    }

   */
        if (day)
        {
            a=10;
        }
        else
        {
            a=50;
        }
 /*       a = !day ? 10 : 50;
        System.out.println("a=" + a);
 */       switch (dayOfWeek2)
        {
            case MONDAY :
            case TUESDAY:
            case WEDNESDAY:
            case THURSDAY:
            case FRIDAY : System.out.println ("Working");
                break;
            case SATURDAY : System.out.println ("Weekend started");
                break;
            case SUNDAY:
            break;
        }
    }


}
