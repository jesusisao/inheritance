fun main(args: Array<String>) {
    println("---- SubClass ----");
    val sub = SubClass();
    sub.superClassMethod();

    println("---- SubClassOverride ----");
    val subo = SubClassOverride();
    subo.superClassMethod();
}

open class SuperClass {
    private val instanceVariable = "SuperClass";

    fun superClassMethod() {
        println(instanceVariable);
    }
}

class SubClass : SuperClass() {
    private val instanceVariable = "SubClass";
}

// -----------------------------------

open class SuperClassOverride {
    open val instanceVariable = "SuperClass";

    fun superClassMethod() {
        println(instanceVariable);
    }
}

class SubClassOverride : SuperClassOverride() {
    override val instanceVariable = "SubClass";
}
