class SuperClass {
  private readonly instanceVariable: string

  constructor() {
    this.instanceVariable = "Error"
  }

  public superClassMethod() {
    console.log(this.instanceVariable)
  }
}

class SubClass extends SuperClass {
  // instanceVariableで定義しようとすると、
  // TS2415: Class 'SubClass' incorrectly extends base class 'SuperClass'.
  // private readonly instanceVariable: string

  // constructor() {
  //   super()
  //   this.instanceVariable = "SubClass"
  // }
}

// ------------------------

class SuperClassGetter {
  private instanceVariable() {
    return "Error"
  }

  public superClassMethod() {
    console.log(this.instanceVariable())
  }
}

class SubClassGetter extends SuperClassGetter {
  // instanceVariableで定義しようとすると、
  // TS2415: Class 'SubClassGetter' incorrectly extends base class 'SuperClassGetter'.
  // Types have separate declarations of a private property 'instanceVariable'.
  // private instanceVariable() {
  //   return "SubClass"
  // }
}

// ------------------------

class SuperClassProtected {
  protected readonly instanceVariable: string

  constructor() {
    this.instanceVariable = "SuperClass"
  }

  public superClassMethod() {
    console.log(this.instanceVariable)
  }
}

class SubClassProtected extends SuperClassProtected {
  protected readonly instanceVariable: string
  
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }
}

// ------------------------

class SuperClassProtectedGetterArrow {
  protected instanceVariable = () => {
    return "SuperClass"
  }

  public superClassMethod = () => {
    console.log(this.instanceVariable())
  }
}

class SubClassProtectedGetterArrow extends SuperClassProtectedGetterArrow {
  protected instanceVariable = () => {
    return "SubClass"
  }
}

// ------------------------

// アロー関数版
class SuperClassProtectedArrow {
  protected readonly instanceVariable: string

  constructor() {
    this.instanceVariable = "SuperClass"
  }

  public superClassMethod = () => {
    console.log(this.instanceVariable)
  }
}

class SubClassProtectedArrow extends SuperClassProtectedArrow {
  protected readonly instanceVariable: string
  
  constructor() {
    super()
    this.instanceVariable = "SubClass"
  }
}

console.log('---- SubClass ----')
const sub = new SubClass()
sub.superClassMethod()

console.log('---- SubClassGetter ----')
const subg = new SubClassGetter()
subg.superClassMethod()

console.log('---- SubClassProtected ----')
const subp = new SubClassProtected()
subp.superClassMethod()

console.log('---- SubClassProtectedArrow ----')
const subpa = new SubClassProtectedArrow()
subpa.superClassMethod()

console.log('---- SubClassProtectedGetterArrow ----')
const subpga = new SubClassProtectedGetterArrow()
subpga.superClassMethod()
