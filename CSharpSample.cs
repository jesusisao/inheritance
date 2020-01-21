using System;

public class CSharpSample
{
    public static void Main(string[] args)
    {
        Console.WriteLine("---- SubClass ----");
        var sub = new SubClass();
        sub.SuperClassMethod();

        Console.WriteLine("---- SubClassProtected ----");
        var subp = new SubClassProtected();
        subp.SuperClassMethod();

        Console.WriteLine("---- SubClassGetter ----");
        var subg = new SubClassGetter();
        subg.SuperClassMethod();

        Console.WriteLine("---- SubClassGetterProtectedOverride ----");
        var subgpo = new SubClassGetterProtectedOverride();
        subgpo.SuperClassMethod();

        Console.WriteLine("---- SubClassGetterProtectedNew ----");
        var subgpn = new SubClassGetterProtectedNew();
        subgpn.SuperClassMethod();
    }
}

class SuperClass
{
    private string instanceVariable = "SuperClass";

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}

class SubClass : SuperClass
{
    // warning CS0414: The field 'SubClass.instanceVariable' is assigned but its value is never used
    private string instanceVariable = "SubClass";
}

// ----------------------------

class SuperClassProtected
{
    protected string instanceVariable = "SuperClass";

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}

class SubClassProtected : SuperClassProtected
{
    // newはオーバーライドではなく、継承元のインスタンス変数隠しているよと明示している
    new protected string instanceVariable = "SubClass";
}

// ----------------------------

class SuperClassGetter
{
    private string instanceVariable
    { 
        get { 
            return "SuperClass";
        }
    }

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}

class SubClassGetter : SuperClassGetter
{
    private string instanceVariable {
        get {
            return "SubClass";
        }
    }
}

// ----------------------------

class SuperClassGetterProtected
{
    protected virtual string instanceVariable
    { 
        get { 
            return "SuperClass";
        }
    }

    public void SuperClassMethod()
    {
        Console.WriteLine(instanceVariable);
    }
}

class SubClassGetterProtectedOverride : SuperClassGetterProtected
{
    protected override string instanceVariable {
        get {
            return "SubClass";
        }
    }
}

class SubClassGetterProtectedNew : SuperClassGetterProtected
{
    protected new string instanceVariable {
        get {
            return "SubClass";
        }
    }
}
