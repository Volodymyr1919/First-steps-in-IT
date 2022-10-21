package com.life;

public class House
{

    boolean flat;
    byte rooms;
    int cost;
    String town;
    float area;
    String address;
    public House()
    {
        town = "Noname";
        flat = false;
        cost = 100000;
        rooms = 5;
    }

    public House(boolean flat, String town, int cost, byte rooms)
    {
        this.flat = flat;
        this.town = town;
        this.cost = cost;
        this.rooms = rooms;
    }

    public House(boolean flat, String town)
    {
        this.flat = flat;
        this.town = town;
        if (flat)
        {
            this.rooms = 2;
            this.cost = 50000;
        }
        else
        {
            this.rooms = 5;
            this.cost = 100000;
        }
    }

    @Override
    public String toString()
    {
        return "Home{" +
                "flat=" + flat +
                ", rooms=" + rooms +
                ", cost=" + cost +
                ", town='" + town + '\'' +
                '}';
    }

    public void setFlat(boolean flat)
    {
        this.flat = flat;
    }

    public void setRooms(byte rooms)
    {
        this.rooms = rooms;
    }

    public void setCost(int cost)
    {
        this.cost = cost;
    }

    public void setTown(String town)
    {
        this.town = town;
    }
}
