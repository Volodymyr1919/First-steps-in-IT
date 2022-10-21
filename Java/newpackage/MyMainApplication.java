package newpackage;

import DataModels.House;
import DataModels.Person;
import DataModels.Vehicle;

public class MyMainApplication {

	public static void sellCar(Person seller, Person buyer) {
		Vehicle[] sellersCars = seller.getCars();
		Vehicle[] buyersCars = buyer.getCars();
		Vehicle[] newListOfBuyersCars = new Vehicle[sellersCars.length+buyersCars.length];
		for (int i=0; i<buyersCars.length; i++){
			newListOfBuyersCars[i]=buyersCars[i];
		}
		for (int i=0; i<sellersCars.length; i++) {
			newListOfBuyersCars[buyersCars.length+i]=sellersCars[i];
		}
		//buyer.cars=newListOfBuyersCars;
		buyer.setCars(newListOfBuyersCars);
		seller.setCars(null);
	}

	public static void main(String[] args) {
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
		me.setHouse(myHouse);
	}
}
