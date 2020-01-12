class SuperClass {
  // privateは同じクラスからのみアクセス可能
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

// ------------------------

class SuperClassProtected {
  protected readonly instanceVariable: string
  protected readonly instanceVariableSuperOnly: string

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

class SubClassProtected extends SuperClassProtected {
  protected readonly instanceVariable: string
  
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }

  public subClassMethod() {
    console.log(this.instanceVariable)
  }
}

// ------------------------

// アロー関数版
class SuperClassArrow {
  protected readonly instanceVariable: string
  protected readonly instanceVariableSuperOnly: string

  constructor() {
    this.instanceVariable = "SuperClass"
    this.instanceVariableSuperOnly = "SuperClassOnly"
  }

  public superClassMethod = () => {
    console.log(this.instanceVariable)
  }

  public callInstanceVariableSuperOnly = () => {
    console.log(this.instanceVariableSuperOnly)
  }
}

class SubClassArrow extends SuperClassArrow {
  protected readonly instanceVariable: string
  
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }

  public subClassMethod = () => {
    console.log(this.instanceVariable)
  }
}

console.log('---- SubClass ----')
const sub = new SubClass()
sub.superClassMethod()
sub.subClassMethod()
sub.callInstanceVariableSuperOnly()

console.log('---- SubClassProtected ----')
const subp = new SubClassProtected()
subp.superClassMethod()
subp.subClassMethod()
subp.callInstanceVariableSuperOnly()

console.log('---- SubClassArrow ----')
const suba = new SubClassArrow()
suba.superClassMethod()
suba.subClassMethod()
suba.callInstanceVariableSuperOnly()
