using System;

public class CSharpSample
{
    public static void Main(string[] args)
    {
        var sub = new SubClass();
        sub.SuperClassMethod();
        sub.SubClassMethod();
        sub.CallInstanceVariableSuperOnly();
    }
}

class SuperClass
{
    private string instanceVariable = "SuperClass";
    private string instanceVariableSuperOnly = "SuperClassOnly";

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }

    public void CallInstanceVariableSuperOnly()
    {
        Console.WriteLine(instanceVariableSuperOnly);
    }
}

class SubClass : SuperClass
{
    private string instanceVariable = "SubClass";

    public void SubClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}
