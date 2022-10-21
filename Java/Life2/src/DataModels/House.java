package DataModels;

public class House
{
    private float area;
    private float price;
    private int rooms;
    private String address;

    public House(float area, float price, int rooms, String address)
    {
        this.area = area;
        this.price = price;
        this.rooms = rooms;
        this.address = address;
    }

    public float getArea()
    {
        return area;
    }

    public float getPrice()
    {
        return price;
    }

    public int getRooms()
    {
        return rooms;
    }

    public String getAddress()
    {
        return address;
    }
    public void setArea(float area)
    {
        this.area = area;
    }
    public void setPrice(float price)
    {
        this.price = price;
    }
    public void setRooms(int rooms)
    {
        this.rooms = rooms;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }
    @Override
    public String toString()
    {
        return "House{" +
                "area=" + area +
                ", price=" + price +
                ", rooms=" + rooms +
                ", address='" + address + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
          House house = (House) o;
        if (Float.compare(house.area, area) != 0) return false;
        if (Float.compare(house.price, price) != 0) return false;
        if (rooms != house.rooms) return false;
        if (!address.equals(house.address)) return false;

        return true;
    }
}
