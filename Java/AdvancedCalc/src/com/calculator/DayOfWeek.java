package com.calculator;

public enum DayOfWeek
{
    MONDAY ("Monday"),
    TUESDAY("Tuesday"),
    WEDNESDAY("Wednesday"),
    THURSDAY("Thursday"),
    FRIDAY("Friday"),
    SATURDAY("Saturday"),
    SUNDAY("Sunday");
    private final String friendlyName;
    DayOfWeek(String friendlyName)
    {
        this.friendlyName = friendlyName;
    }
    String getFriendlyName()
    {
        return friendlyName;
    }
}
