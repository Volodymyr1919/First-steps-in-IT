package DataModels;
import java.util.Arrays;
public class Person
{
    private boolean isMan;
    private byte kids;
    private float high;
    private byte old;
    private String name;

    private Vehicle[] cars; // null

    private String race; //null

    private House house;
    private Animals animals;

    public Person(boolean isMan, byte old, String name, Vehicle[] cars)
    {
        this.isMan = isMan;
        this.old = old;
        this.name = name;
        this.high=1.7f;
        this.kids=2;
        this.cars=cars;
    }

    public Person()
    {
        this.isMan = true;
        this.old = 40;
        this.name = "John Smith";
        this.high=1.8f;
        this.kids=1;
    }

    public void setAnimals(Animals animals)
    {
        this.animals = animals;
    }

    public void setHouse(House house)
    {
        this.house = house;
    }

    public void setRace(String race)
    {
        this.race = race;
    }

    public void setMan(boolean man)
    {
        isMan = man;
    }

    public void setKids(byte kids)
    {
        this.kids = kids;
    }

    public void setHigh(float high)
    {
        this.high = high;
    }

    public void setOld(byte old)
    {
        this.old = old;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public void setCars(Vehicle[] cars)
    {
        this.cars = cars;
    }

    public boolean isMan()
    {
        return isMan;
    }

    public byte getKids()
    {
        return kids;
    }

    public float getHigh()
    {
        return high;
    }

    public byte getOld()
    {
        return old;
    }

    public String getName()
    {
        return name;
    }

    public Vehicle[] getCars()
    {
        return cars;
    }

    public String getRace()
    {
        return race;
    }

    public House getHouse()
    {
        return house;
    }
    public Animals getAnimals()
    {
        return animals;
    }

    @Override
    public String toString()
    {
        return "DataModels.Person{" +
                "isMan=" + isMan +
                ", kids=" + kids +
                ", high=" + high +
                ", old=" + old +
                ", name='" + name + '\'' +
                ", car=" + Arrays.toString(cars) +
                '}';
    }
}
