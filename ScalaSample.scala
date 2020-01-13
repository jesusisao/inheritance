object ScalaSample {
  def main(args: Array[String]) {
    println("---- SubClass ----")
    val sub = new SubClass
    sub.superClassMethod()
    sub.subClassMethod()
    sub.callInstanceVariableSuperOnly()

    println("---- SubClassProtected ----")
    val subp = new SubClassProtected
    subp.superClassMethod()
    subp.subClassMethod()
    subp.callInstanceVariableSuperOnly()
  }
}

class SuperClass {
    // privateのインスタンス変数はサブクラスから参照できない
    private val instanceVariable = "SuperClass";
    private val instanceVariableSuperOnly = "SuperClassOnly";

    def superClassMethod() {
        println(instanceVariable);
    }

    def callInstanceVariableSuperOnly() {
        println(instanceVariableSuperOnly);
    }
}

class SubClass extends SuperClass {
    private val instanceVariable = "SubClass";

    def subClassMethod() {
        println(instanceVariable);
    }
}

// ----------------------------

class SuperClassProtected {
    protected val instanceVariable = "SuperClass";
    protected val instanceVariableSuperOnly = "SuperClassOnly";

    def superClassMethod() {
        println(instanceVariable);
    }

    def callInstanceVariableSuperOnly() {
        println(instanceVariableSuperOnly);
    }
}

class SubClassProtected extends SuperClassProtected {
    override protected val instanceVariable = "SubClass";

    def subClassMethod() {
        println(instanceVariable);
    }
}
