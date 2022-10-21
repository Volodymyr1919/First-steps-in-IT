package com.calculator;

import com.calculator.basicMath.BasicCalc;
import com.calculator.geometry.AreaCalculator;
import com.calculator.geometry.AreaOfCircle;
import com.calculator.geometry.PerimeterCalculator;
import com.calculator.geometry.PerimeterOfCircle;

import java.util.Scanner;
public class Main
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int a = sc.nextInt();
        System.out.print("Enter the second number: ");
        int b = sc.nextInt();
        System.out.println("a = " + a + ", b = " + b);
        Float result = null;
        System.out.print("Enter the operation (+, -, S, P, SO, PO): ");
        String operator = sc.next();
        if (operator.equals("+"))
        {
            result = Float.valueOf(BasicCalc.add(a,b));
        }
        else if (operator.equals("-"))
        {
            BasicCalc bc = new BasicCalc();
            result = Float.valueOf(bc.subtract(a,b));
        }
        else if (operator.equals("S"))
        {
            result = Float.valueOf(AreaCalculator.area(a,b));
        }
        else if (operator.equals("P"))
        {
            result = Float.valueOf(PerimeterCalculator.perimeter(a,b));
        }
        else if (operator.equals("SO"))
        {
            result = AreaOfCircle.areaOfCircle(a);
        }
        else if (operator.equals("PO"))
        {
            result = PerimeterOfCircle.perimeterOfCircle(a);
        }
        else
        {
            System.err.println("Unknown operator! Try again!");
        }
        System.out.println("result = "+ result);
        sc.close();
        ////////////////

    }
}