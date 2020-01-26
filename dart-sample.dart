void main() {
  print("---- SubClassPrivate ----");
  final subp = new SubClassPrivate();
  subp.superClassMethod();

  print("---- SubClass ----");
  final sub = new SubClass();
  sub.superClassMethod();

  print("---- SubClassGetter ----");
  final subg = new SubClassGetter();
  subg.superClassMethod();
}

class SuperClassPrivate {
  // アンダースコアをつけるとPrivateになるが、
  // privateは同一ライブラリに対して可視のため、ここではサブクラスから普通に見えちゃう
  final String _instanceVariable = "SuperClass";

  void superClassMethod() => print(_instanceVariable);
}

class SubClassPrivate extends SuperClassPrivate {
  final String _instanceVariable = "SubClass";
}

// ------------------------------------

class SuperClass {
  final String instanceVariable = "SuperClass";

  void superClassMethod() => print(instanceVariable);
}

class SubClass extends SuperClass {
  final String instanceVariable = "SubClass";
}

// ------------------------------------

class SuperClassGetter {
  String instanceVariable() => "SuperClass";

  void superClassMethod() => print(instanceVariable());
}

class SubClassGetter extends SuperClassGetter {
  String instanceVariable() => "SubClass";
}
