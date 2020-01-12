public class JavaSample {
    public static void main(String[] args) {
        System.out.println("---- SubClass ----");

        SubClass sub = new SubClass();
        sub.superClassMethod();
        sub.subClassMethod();
        sub.callInstanceVariableSuperOnly();

        System.out.println("---- SubClassProtected ----");

        SubClassProtected sub2 = new SubClassProtected();
        sub2.superClassMethod();
        sub2.subClassMethod();
        sub2.callInstanceVariableSuperOnly();
    }
}

class SuperClass {
    // privateのインスタンス変数はサブクラスから参照できない
    private String instanceVariable = "SuperClass";
    private String instanceVariableSuperOnly = "SuperClassOnly";

    public void superClassMethod() {
        System.out.println(instanceVariable);
    }

    public void callInstanceVariableSuperOnly() {
        System.out.println(instanceVariableSuperOnly);
    }
}

class SubClass extends SuperClass {
    private String instanceVariable = "SubClass";

    public void subClassMethod() {
        System.out.println(instanceVariable);
    }
}

// -------------------------------------------

class SuperClassProtected {
    protected String instanceVariable = "SuperClass";
    protected String instanceVariableSuperOnly = "SuperClassOnly";

    public void superClassMethod() {
        System.out.println(instanceVariable);
    }

    public void callInstanceVariableSuperOnly() {
        System.out.println(instanceVariableSuperOnly);
    }
}

class SubClassProtected extends SuperClassProtected {
    protected String instanceVariable = "SubClass";

    public void subClassMethod() {
        // System.out.println(this.instanceVariable); と同じ。"SubClass"が出る。
        System.out.println(instanceVariable);
        // superをつけると、"SuperClass"と表示させることもできる
        // System.out.println(super.instanceVariable);
    }
}
