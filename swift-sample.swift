class SuperClass {
  let instanceVariable = "SuperClass";
  let instanceVariableSuperOnly = "SuperClassOnly";

  func SuperClassMethod() {
    print(instanceVariable);
  }

  func CallInstanceVariableSuperOnly() {
    print(instanceVariableSuperOnly);
  }
}

class SubClass: SuperClass {
  // let instanceVariable = "SubClass"; を書くと
  // error: cannot override with a stored property 'instanceVariable'
  let instanceVariable2 = "SubClass";

  func SubClassMethod() {
    print(instanceVariable2);
  }
}

let sub = SubClass();
sub.SuperClassMethod();
sub.SubClassMethod();
sub.CallInstanceVariableSuperOnly();
