object ScalaSample {
    def main(args: Array[String]): Unit = {
        println("---- SubClass ----")
        val sub = new SubClass
        sub.superClassMethod()
    
        println("---- SubClassProtected ----")
        val subp = new SubClassProtected
        subp.superClassMethod()
    }
}

class SuperClass {
    private val instanceVariable = "SuperClass";

    def superClassMethod(): Unit = {
        println(instanceVariable);
    }
}

class SubClass extends SuperClass {
    private val instanceVariable = "SubClass";
}

// ----------------------------

class SuperClassProtected {
    protected val instanceVariable = "SuperClass";

    def superClassMethod(): Unit = {
        println(instanceVariable);
    }
}

class SubClassProtected extends SuperClassProtected {
    override protected val instanceVariable = "SubClass";
}
