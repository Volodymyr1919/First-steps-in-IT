package newpackage;

import DataModels.Animals;
import DataModels.House;
import DataModels.Person;
import DataModels.Vehicle;

public class Main
{
    public static void sellCar(Person seller, Person buyer)
    {
        Vehicle[] sellersCars = seller.getCars();
        Vehicle[] buyersCars = buyer.getCars();
        Vehicle[] newListOfBuyersCars = new Vehicle[sellersCars.length+buyersCars.length];
        for (int i=0; i<buyersCars.length; i++)
        {
            newListOfBuyersCars[i]=buyersCars[i];
        }
        for (int i=0; i<sellersCars.length; i++)
        {
            newListOfBuyersCars[buyersCars.length+i]=sellersCars[i];
        }
        //buyer.cars=newListOfBuyersCars;
        buyer.setCars(newListOfBuyersCars);
        seller.setCars(null);
    }
    public static void sellHouse (Person seller, Person buyer)
    {
        House house1 = seller.getHouse();
        House house2 = buyer.getHouse();

        buyer.setHouse(house1);
        seller.setHouse(house2);
    }
    public static void sellAnimals (Person seller, Person buyer)
    {
        Animals firstAnimal = seller.getAnimals();
        buyer.setAnimals(firstAnimal);
        seller.setAnimals(null);
    }

    public static void main(String[] args)
    {
        Vehicle myCar = new Vehicle("BMW", false, (byte) 4, (byte) 5); // Object
        myCar.setPrice(10000);

        Vehicle myNeighboursCar = new Vehicle("Volvo", false);
        myNeighboursCar.setPrice(15000);

        System.out.println("My car: " + myCar.toString());
        System.out.println("Neighbour's car: " + myNeighboursCar.toString());
        System.out.println();

        myCar.spustiloKoleso();
        System.out.println("My car: " + myCar.toString());
        System.out.println("Neighbour's car: " + myNeighboursCar.toString());
        System.out.println();

        myCar.fixedTheWheel();
        System.out.println("My car: " + myCar.toString());
        System.out.println("Neighbour's car: " + myNeighboursCar.toString());
        System.out.println();

        Vehicle[] myCars=new Vehicle[] {myCar};
        Person me = new Person(true, (byte) 35, "Albert Nurgaliev", myCars);

        Person neighbour = new Person();
        System.out.println("me: "+ me.toString());
        System.out.println("neighbour: "+neighbour.toString());

        neighbour.setName("Alex Smith");
        neighbour.setOld((byte)45);

        Vehicle[] nighboursCars=new Vehicle[] {myNeighboursCar};
        neighbour.setCars(nighboursCars);

        System.out.println("neighbour: "+neighbour.toString());
        System.out.println();

        sellCar(me,neighbour);
        System.out.println("me: "+ me.toString());
        System.out.println("neighbour: "+neighbour.toString());


        House myHouse=new House(100, 200000, 4, "4 Jackson str., apt. 404, Delaware");
        House neighboursHouse=new House(100, 200000, 4, "5 Jackson str., apt. 404, Delaware");
        me.setHouse(myHouse);
        neighbour.setHouse(neighboursHouse);

        System.out.println("1 my address is: "+myHouse.getAddress());

        myHouse.setAddress("4 Oak str., apt. 404, Delaware");

        System.out.println("2 my address is: "+myHouse.getAddress());

        System.out.println("My house" + me.getHouse());
        System.out.println("Neighbours house" + neighbour.getHouse());

        sellHouse(me, neighbour);
        System.out.println("My house" + me.getHouse());
        System.out.println("Neighbours house" + neighbour.getHouse());

        Animals dog = new Animals ("reptile", "crocodile", 50);
        neighbour.setAnimals(dog);
        System.out.println("My animal: " + me.getAnimals());
        System.out.println("Neighbours animal: " + neighbour.getAnimals());
        sellAnimals(neighbour, me);
        System.out.println("My animal: " + me.getAnimals());
        System.out.println("Neighbours animal: " + neighbour.getAnimals());
    }
}