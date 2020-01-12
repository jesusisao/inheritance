fun main(args: Array<String>) {
    // private
    println("---- SubClass ----");
    val sub = SubClass();
    sub.superClassMethod();
    sub.subClassMethod();
    sub.callInstanceVariableSuperOnly();

    println("---- SubClassOverride ----");
    // openしてoverrideした
    val sub2 = SubClassOverride();
    sub2.superClassMethod();
    sub2.subClassMethod();
    sub2.callInstanceVariableSuperOnly();
}

open class SuperClass {
    // privateのインスタンス変数はサブクラスから参照できない
    private val instanceVariable = "SuperClass";
    private val instanceVariableSuperOnly = "SuperClassOnly";

    fun superClassMethod() {
        println(instanceVariable);
    }

    fun callInstanceVariableSuperOnly() {
        println(instanceVariableSuperOnly);
    }
}

class SubClass : SuperClass() {
    private val instanceVariable = "SubClass";

    fun subClassMethod() {
        println(instanceVariable);
    }
}

// -----------------------------------

open class SuperClassOverride {
    open val instanceVariable = "SuperClass";
    val instanceVariableSuperOnly = "SuperClassOnly";

    fun superClassMethod() {
        println(instanceVariable);
    }

    fun callInstanceVariableSuperOnly() {
        println(instanceVariableSuperOnly);
    }
}

class SubClassOverride : SuperClassOverride() {
    override val instanceVariable = "SubClass";

    fun subClassMethod() {
        println(instanceVariable);
    }
}
