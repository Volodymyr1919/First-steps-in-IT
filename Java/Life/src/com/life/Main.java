package com.life;

public class Main
{
    private Vehicle[] cars;
    private House[] houses;

    public static void sellCar(Human seller, Human buyer)
    {
        Vehicle[] sellersCars = seller.cars;
        Vehicle[] buyersCars = buyer.cars;
        Vehicle[] newListOfBuyersCars = new Vehicle[sellersCars.length + buyersCars.length];
        for (int i = 0; i < buyersCars.length; i++)
        {
            newListOfBuyersCars[i] = buyersCars[i];
        }
        for (int i = 0; i < sellersCars.length; i++)
        {
            newListOfBuyersCars[buyersCars.length + i] = sellersCars[i];
        }
        buyer.cars = newListOfBuyersCars;
        seller.cars = null;
    }
    public static void sellHouse(Human seller, Human buyer)
    {
        House[] sellersHouses = seller.houses;
        House[] buyersHouses = buyer.houses;
        House[] newListOfBuyersHouses = new House[sellersHouses.length + buyersHouses.length];
        for (int i = 0; i < buyersHouses.length; i++)
        {
            newListOfBuyersHouses[i] = buyersHouses[i];
        }
        for (int i = 0; i < sellersHouses.length; i++)
        {
            newListOfBuyersHouses[buyersHouses.length + i] = sellersHouses[i];
        }
        buyer.houses = newListOfBuyersHouses;
        seller.houses = null;
    }
    public static void main(String[] args) // желательно делать в отдельном классе
    {
        Vehicle myCar = new Vehicle("BMW", false, (byte)4, (byte)5);
        myCar.setPrice(10000);
        House myHouse = new House (false, "Munich");
        Vehicle myNeighboursCar = new Vehicle("Volvo", false);
        myNeighboursCar.setPrice(15000);
        House myNeighboursHouse = new House (false, "Berlin", 100000, (byte)5);
        System.out.println("My car:" + myCar.toString());
        System.out.println("Neighbours car:" + myNeighboursCar.toString());
        System.out.println("My house:" + myHouse.toString());
        System.out.println("Neighbours house:" + myNeighboursHouse.toString());


        myCar.spustiloKoleso();
        System.out.println("My car:" + myCar.toString());
        System.out.println("Neighbours car:" + myNeighboursCar.toString());

        myCar.fixedTheWheel();
        System.out.println("My car:" + myCar.toString());
        System.out.println("Neighbours car:" + myNeighboursCar.toString());

        Vehicle[] myCars = new Vehicle[] {myCar};
        House[] myHouses = new House[] {myHouse};
        Human me = new Human("Volodymyr Ziubrytskyi", (byte)23, true, myCars, myHouses);
        Human neighbour = new Human();
        System.out.println("me: " + me.toString());
        System.out.println("neighbour: " + neighbour.toString());

        neighbour.setName("Alex Smith");
        neighbour.setAge((byte)45);

        Vehicle[] neighboursCars = new Vehicle[] {myNeighboursCar};
        House[] neighboursHouses = new House[] {myNeighboursHouse};
        neighbour.setCars(neighboursCars);
        neighbour.setHouses(neighboursHouses);
        System.out.println("neighbour: " + neighbour.toString());

        System.out.println();

        sellCar(me,neighbour);
        System.out.println("me: " + me.toString());
        System.out.println("neighbour: " + neighbour.toString());

        sellHouse(neighbour, me);
        System.out.println("me: " + me.toString());
        System.out.println("neighbour: " + neighbour.toString());
    }
}