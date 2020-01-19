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

println("---- SubClass ----");
$sub = new SubClass();
$sub->superClassMethod();

println("---- SubClassProtected ----");
$subp = new SubClassProtected();
$subp->superClassMethod();
