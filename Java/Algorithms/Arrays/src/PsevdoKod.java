import java.util.Scanner;

public class PsevdoKod
{
    public void getColor()
    {
        String color;
        System.out.println("What is your favorite color?");
        Scanner sc = new Scanner(System.in);
        color = sc.nextLine();
        System.out.println("Your favorite color is: " + color);
    }
}
