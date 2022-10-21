public class O_1
{
    public static void main(String[] args)
    {
        int n = 8;
        System.out.println("Your input: " + n);
        System.out.println("Again: " + n);
        System.out.println("And again: " + n);
        for(int i = 1; i<n; i=i*2)
        {
            System.out.println(i);
        }
        for(int i = 0; i<n; i++)
        {
            System.out.print(i + " ");
        }
        for(int i = 1; i<=n; i++)
        {
            for(int j = 1; j<n; j = j*2)
            {
                System.out.println(i + "and" + j);
            }
        }
        for(int i = 1; i<n; i++)
        {
            for(int j=1; j<=n; j++)
            {
                System.out.println(i + "and" + j);
            }
        }
        for(int i = 1; i<=Math.pow(2,n); i++)
        {
            System.out.print(i + " ");
        }
    }
}
