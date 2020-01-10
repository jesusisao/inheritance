class SuperClass {
  private readonly instanceVariable: string
  private readonly instanceVariableSuperOnly: string

  constructor() {
    this.instanceVariable = "SuperClass"
    this.instanceVariableSuperOnly = "SuperClassOnly"
  }

  public superClassMethod() {
    console.log(this.instanceVariable)
  }

  public callInstanceVariableSuperOnly() {
    console.log(this.instanceVariableSuperOnly)
  }
}

class SubClass extends SuperClass {
  // instanceVariableで定義しようとすると、
  // TS2415: Class 'SubClass' incorrectly extends base class 'SuperClass'.
  private readonly instanceVariable2: string
  
  constructor() {
    super()
    this.instanceVariable2 = "SubClass"
  }

  public subClassMethod() {
    // instanceVariableにアクセスしようとするとエラー。
    // プロパティ 'instanceVariable' はプライベートで、クラス 'SuperClass' 内でのみアクセスできます。ts(2341)
    console.log(this.instanceVariable2)
  }
}

const sub = new SubClass()
sub.superClassMethod()
sub.subClassMethod()
sub.callInstanceVariableSuperOnly()
