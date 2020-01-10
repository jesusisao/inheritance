public class JavaSample {
    public static void main(String[] args) {
        SubClass sub = new SubClass();
        sub.superClassMethod();
        sub.subClassMethod();
        sub.callInstanceVariableSuperOnly();
    }
}
class SuperClass {
    private String instanceVariable = "SuperClass";
    private String instanceVariableSuperOnly = "SuperClassOnly";

    public void superClassMethod() {
        System.out.println(this.instanceVariable);
    }

    public void callInstanceVariableSuperOnly() {
        System.out.println(this.instanceVariableSuperOnly);
    }
}

class SubClass extends SuperClass {
    private String instanceVariable = "SubClass";

    public void subClassMethod() {
        System.out.println(this.instanceVariable);
    }
}
