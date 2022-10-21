package com.life;

import java.util.Arrays;

public class Human
{
    String name;
    byte age;
    boolean isMan;
    float height;
    byte kids;
    Vehicle[] cars;
    House[] houses;
    String race;

    public Human(String name, byte age, boolean isMan, Vehicle[] cars, House[] houses)
    {
        this.name = name;
        this.age = age;
        this.isMan = isMan;
        this.height = 1.7f;
        this.kids = 2;
        this.cars = cars;
        this.houses = houses;
    }

    public Human()
    {
        this.name = "John Smith";
        this.age = 40;
        this.isMan = true;
        this.height = 1.8f;
        this.kids = 1;
    }

    @Override
    public String toString()
    {
        return "Human{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", isMan=" + isMan +
                ", height=" + height +
                ", kids=" + kids +
                ", car=" + Arrays.toString(cars) +
                ", house=" + Arrays.toString(houses) +
                '}';
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

    public void setHeight(float height)
    {
        this.height = height;
    }

    public void setAge(byte age)
    {
        this.age = age;
    }

    public void setName(String name)

    {
        this.name = name;
    }

    public void setCars(Vehicle[] cars)

    {
        this.cars = cars;
    }
    public void setHouses(House[] houses)
    {
        this.houses = houses;
    }
}
