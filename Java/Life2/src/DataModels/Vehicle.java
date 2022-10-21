package DataModels;

public class Vehicle
{
    String model; // null
    boolean isTruck; // false
    byte wheels; // 0
    byte doors; // 0

    float price;

    public void setPrice(float price)
    {
        this.price = price;
    }

    public Vehicle()
    { // default constructor
        model = "Noname";
        isTruck=false;
        wheels=4;
        doors=5;
        price=1000f;
    }

    public Vehicle(String model, boolean isTruck, byte wheels, byte doors)
    { // overloaded constrcutor
        this.model=model;
        this.isTruck=isTruck;
        this.wheels=wheels;
        this.doors=doors;
        price=2000.2f;
    }

    public Vehicle(String model, boolean isTruck)
    { //overloaded constructor
        this.model=model;
        this.isTruck=isTruck;
        if (isTruck)
        {
            this.doors=2;
            this.wheels=10;
        } else
        {
            this.doors=5;
            this.wheels=4;
        }
    }

    public void spustiloKoleso()
    {
        if (this.wheels>0)
            this.wheels-=1;
    }

    public void fixedTheWheel()
    {
        if (this.wheels<4)
            this.wheels+=1;
    }

    public String toString()
    {
        return "Model: "+this.model+", isTruck: "+isTruck + ", wheels: " + wheels + ", doors: "+ doors;
    }
}
