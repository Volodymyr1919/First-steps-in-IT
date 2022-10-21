import java.util.Scanner;
public class Main {
    public static void main(String[] args)
    {
        /*
        Scanner myScanner = new Scanner(System.in);
        int x = myScanner.nextInt();
        int y = myScanner.nextInt();

        int result1 = Main.add(x,y);
        System.out.println(result1);

        int result2 = Main.subtract(x,y);
        System.out.println(result2);

        int result3 = Main.multiply(x,y);
        System.out.println(result3);

        double result4 = Main.divide(x,y);
        System.out.println(result4);

        double result5 = Main.power(x,y);
        System.out.println(result5);

        double result = Main.mod(x,y);
        System.out.println(result);

        float result6 = Main.oneOverX(y);
        System.out.println(result6);

        double result7 = Main.sqrt(y);
        System.out.println(result7);

        double result8 = Main.cbrt(y);
        System.out.println(result8);

        double result9 = Main.squre(x,y);
        System.out.println(result9);
    }
    private static int add(int firstArgument, int secondArgument)

    {
        return firstArgument + secondArgument;
    }

    private static int subtract(int firstArgument, int secondArgument)

    {
        return firstArgument - secondArgument;
    }

    private static int multiply(int firstArgument, int secondArgument)

    {
        return firstArgument * secondArgument;
    }
    private static double divide(double firstArgument, double secondArgument)
    {
        return firstArgument / secondArgument;
    }
    private static double power(double firstArgument, double secondArgument)
    {
        return Math.pow(firstArgument, secondArgument);
    }
    private static int mod(int firstArgument, int secondArgument)
    {
        return firstArgument % secondArgument;
    }
    private static float oneOverX(float secondArgument)
    {
        return 1 / secondArgument;
    }
    private static double sqrt(double secondArgument)
    {
        return Math.sqrt(secondArgument);
    }
    private static double cbrt(double secondArgument)
    {
        return Math.cbrt(secondArgument);
    }
    private static double squre(float firstArgument, float secondArgument)
    {
        return Math.pow(firstArgument, 1 / secondArgument);
    }


        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int a = sc.nextInt();
        System.out.print("Enter the second number: ");
        int b = sc.nextInt();
        System.out.print("a = " + a + ", b = " + b);
        Integer result = null;

        System.out.print("Enter the operation (+, -, area, perimeter): ");
        String operator = sc.next();
        if (operator.equals("+"))
        {
            result = BasicCalc.add(a, b);
        }
        else if (operator.equals("-"))
        {
            BasicCalc bc = new BasicCalc();
            result = BasicCalc.subtract(a, b);
        }
        else if (operator.equals("area"))
        {
            result = AreaCalculator.area(a,b);
        }
        else if (operator.equals("perimeter"))
        {
            result = PerimeterCalc.perimeter(a,b);
        }
        else
        {
            System.err.println("Unknown operator! Try again!");
        }
        System.out.println("result = "+ result);


        BasicCalc bc1 = new BasicCalc();
        BasicCalc bc2 = new BasicCalc();

        bc1.k = "Hello";
        BasicCalc.printString();
        bc2.k = "World";
        BasicCalc.printString();

        System.out.println("bc1.k="+bc1.k);
        bc1.k="Sunday";
        System.out.println("bc2.k="+bc2.k);


        bc1.s = "Monday";
        bc2.s = "Tuesday";

        System.out.println("bc1.s="+bc1.s);
        System.out.println("bc2.s="+bc2.s);

        bc1.s = "Wednesday";
        bc2.s = "Thursday";

        System.out.println("bc1.s="+bc1.s);
        System.out.println("bc2.s="+bc2.s);

         */

    }

}