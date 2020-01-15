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

// --------------------------------

// プロパティにしてgetterを生やす。こうしたら関数扱いなのでoverrideができるようになる。
class SuperClassGetter {
  var instanceVariable: String { get { return "SuperClass" } }
  var instanceVariableSuperOnly: String { get { return "SuperClassOnly" } }

  func SuperClassMethod() {
    print(instanceVariable);
  }

  func CallInstanceVariableSuperOnly() {
    print(instanceVariableSuperOnly);
  }
}

class SubClassGetter: SuperClassGetter {
  override var instanceVariable: String { get { return "SubClass" } };

  func SubClassMethod() {
    print(instanceVariable);
  }
}


let sub = SubClass();
sub.SuperClassMethod();
sub.SubClassMethod();
sub.CallInstanceVariableSuperOnly();

let subg = SubClassGetter();
subg.SuperClassMethod();
subg.SubClassMethod();
subg.CallInstanceVariableSuperOnly();
