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

class SuperClassInternal {
  let instanceVariable = "Error";

  func SuperClassMethod() {
    print(instanceVariable);
  }
}

class SubClassInternal: SuperClassInternal {
  // error: cannot override with a stored property 'instanceVariable'
  // let instanceVariable = "SubClass";
}

// --------------------------------

// Computed Propertyにしてgetterを生やす。こうしたら関数扱いなのでoverrideができるようになる。
class SuperClassGetter {
  // letだと、error: 'let' declarations cannot be computed properties
  private var instanceVariable: String { get { return "SuperClass" } }

  func SuperClassMethod() {
    print(instanceVariable);
  }
}

class SubClassGetter: SuperClassGetter {
  private var instanceVariable: String { get { return "SubClass" } };
}

// --------------------------------

// Computed Propertyにしてgetterを生やす。こうしたら関数扱いなのでoverrideができるようになる。
class SuperClassInternalGetter {
  // letだと、error: 'let' declarations cannot be computed properties
  var instanceVariable: String { get { return "SuperClass" } }

  func SuperClassMethod() {
    print(instanceVariable);
  }
}

class SubClassInternalGetter: SuperClassInternalGetter {
  override var instanceVariable: String { get { return "SubClass" } };
}

print("---- SubClass ----");
let sub = SubClass();
sub.SuperClassMethod();

print("---- SubClassInternal ----");
let subi = SubClassInternal();
subi.SuperClassMethod();

print("---- SubClassGetter ----");
let subg = SubClassGetter();
subg.SuperClassMethod();

print("---- SubClassInternalGetter ----");
let subig = SubClassInternalGetter();
subig.SuperClassMethod();
