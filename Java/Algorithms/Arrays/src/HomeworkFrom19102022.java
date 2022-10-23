
public class HomeworkFrom19102022
{
    public static void main (String[] args)
    {
        //method();
        method2();
        //method3();
    }
    public static void method()
    {
        int a = 10;
        int b = 15;
        while (a != b)
        {
            if (a > b)
            {
                a = a - b;
            } else
            {
                b = b - a;
            }
        }
        // O(n) в любом случае, потому что независимо от входных данных - всегда одно и то же простое действие
    }



    public static void method2()
    {
        int n = 15;
        for (int i = 0; i < n / 2; i++)
        {
            for (int j = 1; j + n / 2 <= n; j++)
            {
                for (int k = 1; k <= n; k = k * 2)
                {
                    System.out.println("I am expert!");
                }
            }
        }
        // При лучшем лучшем случае O(n) и при худшем O(n^3)
    }



    public static void method3()
    {
        int n = 15;
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= n; j = j + i)
            {
                System.out.println("I am expert!");
            }
        }
        // При лучшем лучшем случае O(n) и при худшем O(n^2)
    }
}
