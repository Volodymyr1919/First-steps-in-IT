import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        String myName = "Volodymyr Ziubrytskyi";
        String firstName, lastName;
        String[] result = myName.split(" ");
        firstName = "Name: " + result[0];
        lastName = "Surname: " + result[1];
        System.out.println(firstName);
        System.out.println(lastName);


        Scanner sc = new Scanner(System.in);
        String someString = sc.nextLine(); //Volodymyr Ziubrytskyi
        String[] result1 = someString.split(" ");
        System.out.println("Name: " + result1[0]);
        System.out.println("Surname: " + result1[1]);
    }
}