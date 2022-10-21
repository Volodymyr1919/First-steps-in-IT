public class BankApp
{
    public static void main(String[] args)
    {
        BankAccount ba1 = new BankAccount(100.00);
        System.out.println("Before transaction: ");
        ba1.display();
        ba1.addBalance(40);
        ba1.withDrawBalance(80);
        System.out.println("After transaction: ");
        ba1.display();
    }
}
