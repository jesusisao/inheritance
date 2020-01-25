<?php
function println($message)
{
    echo $message.PHP_EOL;
}

// ----------------------------------------

class SuperClass
{
    private $instanceVariable = "SuperClass";

    public function superClassMethod()
    {
        println($this->instanceVariable);
    }
}

class SubClass extends SuperClass
{
    private $instanceVariable = "SubClass";
}

// ----------------------------------------

class SuperClassProtected
{
    protected $instanceVariable = "SuperClass";

    public function superClassMethod()
    {
        println($this->instanceVariable);
    }
}

class SubClassProtected extends SuperClassProtected
{
    protected $instanceVariable = "SubClass";
}

// ----------------------------------------

class SuperClassGetter
{
    private function instanceVariable()
    {
        return "SuperClass";
    }
    
    public function superClassMethod()
    {
        println($this->instanceVariable());
    }
}

class SubClassGetter extends SuperClassGetter
{
    private function instanceVariable()
    {
        return "SubClass";
    }
}

// ----------------------------------------

class SuperClassGetterProtected
{
    protected function instanceVariable()
    {
        return "SuperClass";
    }
    
    public function superClassMethod()
    {
        println($this->instanceVariable());
    }
}

class SubClassGetterProtected extends SuperClassGetterProtected
{
    protected function instanceVariable()
    {
        return "SubClass";
    }
}

// ----------------------------------------

println("---- SubClass ----");
$sub = new SubClass();
$sub->superClassMethod();

println("---- SubClassProtected ----");
$subp = new SubClassProtected();
$subp->superClassMethod();

println("---- SubClassGetter ----");
$subg = new SubClassGetter();
$subg->superClassMethod();

println("---- SubClassGetterProtected ----");
$subgp = new SubClassGetterProtected();
$subgp->superClassMethod();
