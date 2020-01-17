public class JavaSample {
    public static void main(String[] args) {
        System.out.println("---- SubClass ----");
        SubClass sub = new SubClass();
        sub.superClassMethod();

        System.out.println("---- SubClassProtected ----");
        SubClassProtected subp = new SubClassProtected();
        subp.superClassMethod();

        System.out.println("---- SubClassGetter ----");
        SubClassGetter subg = new SubClassGetter();
        subg.superClassMethod();

        System.out.println("---- SubClassGetterProtected ----");
        SubClassGetterProtected subgp = new SubClassGetterProtected();
        subgp.superClassMethod();
    }
}

class SuperClass {
    // privateのインスタンス変数はサブクラスから参照できない
    private String instanceVariable = "SuperClass";

    public void superClassMethod() {
        System.out.println(instanceVariable);
    }
}

class SubClass extends SuperClass {
    private String instanceVariable = "SubClass";
}

// -------------------------------------------

class SuperClassProtected {
    protected String instanceVariable = "SuperClass";

    public void superClassMethod() {
        System.out.println(instanceVariable);
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

// -------------------------------------------

class SuperClassGetter {
    private String instanceVariable() {
        return "SuperClass";
    }

    public void superClassMethod() {
        System.out.println(instanceVariable());
    }
}

class SubClassGetter extends SuperClassGetter {
    private String instanceVariable() {
        return "SubClass";
    }
}

// -------------------------------------------

class SuperClassGetterProtected {
    protected String instanceVariable() {
        return "SuperClass";
    }

    public void superClassMethod() {
        System.out.println(instanceVariable());
    }
}

class SubClassGetterProtected extends SuperClassGetterProtected {
    protected String instanceVariable() {
        return "SubClass";
    }
}
