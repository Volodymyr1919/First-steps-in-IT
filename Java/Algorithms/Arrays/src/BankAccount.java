public class BankAccount
{
    private double balance;
    public BankAccount(double balance)
    {
        this.balance = balance;
    }
    public void addBalance(double amount)
    {
        balance = balance + amount;
    }
    public void withDrawBalance(double amount)
    {
        balance = balance - amount;
    }
    public void display()
    {
        System.out.println("balance = " + balance);
    }
}
