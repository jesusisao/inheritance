class SuperClass {
  private let instanceVariable = "SuperClass";

  func SuperClassMethod() {
    print(instanceVariable);
  }
}

class SubClass: SuperClass {
  private let instanceVariable = "SubClass";
}

// --------------------------------

class SuperClassInternalLet {
  let instanceVariable = "Error";

  func SuperClassMethod() {
    print(instanceVariable);
  }
}

class SubClassInternalLet: SuperClassInternalLet {
  // error: cannot override with a stored property 'instanceVariable'
  // let instanceVariable = "SubClass";
}

// --------------------------------

// Computed Propertyにしてgetterを生やす。こうしたら関数扱いなのでoverrideができるようになる。
class SuperClassGetter {
  // letだと、error: 'let' declarations cannot be computed properties
  var instanceVariable: String { get { return "SuperClass" } }

  func SuperClassMethod() {
    print(instanceVariable);
  }
}

class SubClassGetter: SuperClassGetter {
  override var instanceVariable: String { get { return "SubClass" } };
}

print("---- SubClass ----");
let sub = SubClass();
sub.SuperClassMethod();

print("---- SubClassInternalLet ----");
let subi = SubClassInternalLet();
subi.SuperClassMethod();

print("---- SubClassGetter ----");
let subg = SubClassGetter();
subg.SuperClassMethod();
