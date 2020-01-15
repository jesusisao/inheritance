using System;

public class CSharpSample
{
    public static void Main(string[] args)
    {
        Console.WriteLine("---- SubClass ----");
        var sub = new SubClass();
        sub.SuperClassMethod();
        sub.SubClassMethod();
        sub.CallInstanceVariableSuperOnly();

        Console.WriteLine("---- SubClassProtected ----");
        var subp = new SubClassProtected();
        subp.SuperClassMethod();
        subp.SubClassMethod();
        subp.CallInstanceVariableSuperOnly();

        Console.WriteLine("---- SubClassGetter ----");
        var subg = new SubClassGetter();
        subg.SuperClassMethod();
        subg.SubClassMethod();
        subg.CallInstanceVariableSuperOnly();
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

// ----------------------------

class SuperClassProtected
{
    protected string instanceVariable = "SuperClass";
    protected string instanceVariableSuperOnly = "SuperClassOnly";

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }

    public void CallInstanceVariableSuperOnly()
    {
        Console.WriteLine(instanceVariableSuperOnly);
    }
}

class SubClassProtected : SuperClassProtected
{
    // newはオーバーライドではなく、継承元のインスタンス変数隠しているよと明示している
    new protected string instanceVariable = "SubClass";

    public void SubClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}

// ----------------------------

class SuperClassGetter
{
    protected virtual string instanceVariable
    { 
        get { 
            return "SuperClass";
        }
    }

    protected string instanceVariableSuperOnly = "SuperClassOnly";

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }

    public void CallInstanceVariableSuperOnly()
    {
        Console.WriteLine(instanceVariableSuperOnly);
    }
}

class SubClassGetter : SuperClassGetter
{
    protected override string instanceVariable {
        get {
            return "SubClass";
        }
    }

    public void SubClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}
