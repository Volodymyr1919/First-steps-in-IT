public class Main {
    public static void main(String[] args)
    {
        int number1 = 8;
        int number2 = 2;
        int myResult = Main.add(number1, number2);
        System.out.println(myResult);
        myResult = Main.subtract(number1, number2);
        System.out.println(myResult);
        myResult = Main.multiply(number1, number2);
        System.out.println(myResult);
        myResult = Main.divide(number1, number2);
        System.out.println(myResult);
    }
    private static int add(int a, int b)
    {
        int result = a + b;
        return result;
    }
    private static int subtract(int a, int b)
    {
        int result = a - b;
        return result;
    }
    private static int multiply(int a, int b)
    {
        int result = a * b;
        return result;
    }
    private static int divide(int a, int b)
    {
        int result = a / b;
        return result;
    }
}
